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
          const user = await UserModel.findOne({ email: credentials.email });
          console.log(user, credentials);
          if (user) {
            const isPasswordCorrect = await bcrypt.compare(
              credentials.password,
              user.password
            );

            if (isPasswordCorrect) {
              return user;
            } else {
              return null;
            }
          }
          return null;
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      console.log("user", user, "account", account);
      if (account?.provider == "credentials") {
        return true;
      } else {
        return new Error("Invalid Credentials");
      }
    },
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
