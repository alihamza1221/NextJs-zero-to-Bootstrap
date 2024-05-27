import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Create an OpenAI API client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = "edge";

export async function POST(req: Request) {
  // Extract the `prompt` from the body of the request
  const prompt =
    "create a list of three open-ended and engaging questions,formatted as a single string, each question should be separated by '||'. These messages are for anonymous social messaging platform. Like Qooh.me and should be suitable for a diverse audience. Should be friendly messages. For example, your output should be structred like this: 'What's the hobby you recently started || What's your favorite book || What's your favorite movie'. Ensure messages foster creativity and self-expression.";

  // Ask OpenAI for a streaming completion given the prompt
  try {
    const response = await openai.completions.create({
      model: "gpt-3.5-turbo-instruct",
      max_tokens: 2000,
      stream: true,
      prompt,
    });

    // Convert the response into a friendly text-stream
    const stream = OpenAIStream(response);

    // Respond with the stream
    return new StreamingTextResponse(stream);
  } catch (error: any) {
    if (error instanceof OpenAI.APIError) {
      const { name, status, headers, message } = error;
      return Response.json(
        {
          success: false,
          error: { name, status, headers, message },
        },
        { status: 500 }
      );
    } else {
      return Response.json(
        {
          success: false,
          error: [error?.message, "Something went wrong with OpenAI API"],
        },
        { status: 500 }
      );
    }
  }
}
