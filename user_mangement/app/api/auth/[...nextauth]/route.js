import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import connectDB from "@/app/lib/db/connectDB";
import UserModel from "@/app/lib/db/userModel";

export const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },

      async authorize(credentials) {
        await connectDB();
        try {
          const user = await UserModel.findOne(
            $or[({ email: credentials }, { username: credentials })]
          );

          if (user) {
            if (!user.isVerified) {
              return new Error("Please verify your email address to login");
            }
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              return new Error("Invalid Credentials");
            }
          }
          return new Error("User not found");
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],

  callbacks: {
    async jwt(token, user) {
      if (user) {
        token._id = user._id;
        token.email = user.email;
        token.username = user.username;
        token.isVerified = user.isVerified;
        token.isAcceptingMessages = user.isAcceptingMessages;
      }
      return token;
    },
    async session(session, token) {
      if (token) {
        session.user._id = token._id;
        session.user.email = token.email;
        session.user.username = token.username;
        session.user.isVerified = token.isVerified;
        session.user.isAcceptingMessages = token.isAcceptingMessages;
        return session;
      }
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
