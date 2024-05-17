import VerificationEmail from "@/emails/verificationEmail";
import { resend } from "@/lib/resend";
import { ApiResponse } from "@/types/ApiResponse";

interface SendVerificationEmailProps {
  email: string;
  username: string;
  verificationCode: string;
}
export default async function sendVerificationEmail({
  email,
  username,
  verificationCode,
}: SendVerificationEmailProps): Promise<ApiResponse> {
  try {
    const { data, error } = await resend.emails.send({
      from: "alihamza@resend.dev",
      to: ["alihamza77065@gmail.com", "sp23-bse-016@cuilahore.edu.pk"],
      subject: "Your SASS verification Code",
      react: VerificationEmail({ username, otp: verificationCode }),
    });
    if (data) {
      return {
        success: true,
        status: 201,
        message: data.toString(),
      };
    } else if (error) {
      throw new Error(error.message);
    }
  } catch (err: any) {
    console.log(err);
    return {
      success: false,
      status: 500,
      message: err?.message?.toString(),
    };
  }
  return {
    success: false,
    status: 500,
    message: "Internal Server Error",
  };
}
