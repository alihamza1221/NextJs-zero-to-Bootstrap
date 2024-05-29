import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/UserModel";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import bcrypt from "bcrypt";
import { setEngine } from "crypto";

export const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",

      credentials: {
        email: {
          label: "Email",
          type: "text",
          placeholder: "johnDoe@gmail.com",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials: any): Promise<any> {
        await dbConnect();
        const { email: CredEmail } = credentials.identifier;

        try {
          const user = await UserModel.findOne({
            $or: [{ email: CredEmail }, { username: credentials.identifier }],
          });
          console.log(user);
          if (!user) throw new Error("User does't exist");
          else if (!user.isVerified) throw new Error("User is not verified");
          const isValid = await bcrypt.compare(
            credentials.password,
            user.password
          );
          if (!isValid) throw new Error("Password is incorrect");
          return user;
        } catch (err: any) {
          console.log(err.message);
          throw new Error(err);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user, trigger, session }) {
      if (user) {
        token._id = user._id?.toString();
        token.isVerified = user.isVerified;
        token.username = user.username;
        token.isAcceptingMessages = user.isAcceptingMessages;
        token.email = user.email;
      }

      if (trigger === "update") {
        console.log("triggered", session);
        if (session?.isAcceptingMessages !== undefined) {
          console.log("session defined");
          token.isAcceptingMessages = session.isAcceptingMessages;
        }
      }

      return token;
    },
    async session({ session, token }) {
      session.user._id = token._id;
      session.user.isVerified = token.isVerified;
      session.user.username = token.username;
      session.user.isAcceptingMessages = token.isAcceptingMessages;
      return session;
    },
  },
  // pages: {
  //   signIn: "/sign-in",
  // },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};
