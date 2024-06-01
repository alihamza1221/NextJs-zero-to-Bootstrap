# Next.js Full Stack Project

## Overview
This project is a full-stack application built with Next.js, utilizing various modern technologies to provide authentication, user messaging, and a dynamic user interface. It features user sign-up with email verification, user-specific messaging capabilities, and suggestions for messages using OpenAI API. The UI components are styled with Material Tailwind.

## Features
- **User Authentication**: Implemented with NextAuth's credentials provider.
- **Email Verification**: Utilizes the Resend API for verifying user emails during sign-up.
- **Dashboard**: Upon signing in, users are redirected to a dashboard where they can view messages sent to them by other users.
- **Message Preferences**: Users can change their status to indicate whether they want to accept messages or not.
- **User-Specific Messaging**: Users can send messages to others by navigating to a URL formatted as `/u/[username]`.
- **Message Suggestions**: Integrates OpenAI API to suggest messages for users to send to others.
- **UI Components**: Styled with Material Tailwind for a modern and responsive design.

## Technologies Used
- **Next.js**: For server-side rendering and routing.
- **NextAuth**: For authentication and session management.
- **Resend API**: For sending and verifying emails.
- **Tailwind CSS**: For utility-first CSS styling.
- **Material Tailwind**: For UI components.
- **TypeScript**: For type safety and better developer experience.
- **React**: For building the user interface.
- **React Email Hook**: For managing email-related functionality.
- **React Toast Hook**: For displaying notifications.
- **Axios**: For making API requests.
- **OpenAI API**: For generating message suggestions.

## Getting Started

### Prerequisites
- Node.js installed on your machine.
- An OpenAI API key.
- A Resend API key.

### Installation
1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/nextjs-fullstack-project.git
   cd nextjs-fullstack-project
   \`\`\`
2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`
3. Create a \`.env.local\` file in the root of your project and add the following environment variables:
   \`\`\`
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-nextauth-secret
   RESEND_API_KEY=your-resend-api-key
   OPENAI_API_KEY=your-openai-api-key
   \`\`\`

### Running the Project
To start the development server:
\`\`\`bash
npm run dev
\`\`\`
Navigate to \`http://localhost:3000\` to see the application in action.

### Building for Production
To build the project for production:
\`\`\`bash
npm run build
\`\`\`
Then start the  server:
\`\`\`bash
npm run dev
\`\`\`

## Usage

### Sign Up and Email Verification
1. Navigate to the sign-up page and register with your email.
2. Check your email for a verification link.
3. Click the link to verify your email address.

### Dashboard
After signing in, you will be redirected to the dashboard where you can:
- View messages sent to you by other users.
- Change your message acceptance status.

### Sending Messages
To send a message to another user:
1. Navigate to \`/u/[username]\` (replace \`[username]\` with the actual username of the recipient).
2. Enter your message and send.

### Message Suggestions
- While composing a message, you can get suggestions from the OpenAI API to help you draft your message.

## Contributing
Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License
This project is licensed under the MIT License.

## Contact
For any questions or feedback, please reach out to [your-email@example.com].

---

Thank you for using our Next.js Full Stack Project! We hope it helps you build amazing applications.
"""

