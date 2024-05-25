"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ApiResponse } from "@/types/ApiResponse";
import { userSignInSchema } from "@/schemas/userSignInSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { toast } from "react-toastify";

type SignInSchema = z.infer<typeof userSignInSchema>;

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();
  const { handleSubmit, register, formState } = useForm<SignInSchema>({
    defaultValues: {
      identifier: "",
      password: "",
    },
    mode: "onSubmit",
    resolver: zodResolver(userSignInSchema),
  });
  const { errors } = formState;
  const submitHandler = async (data: SignInSchema) => {
    try {
      const res = await signIn("credentials", {
        redirect: false,
        identifier: data.identifier,
        password: data.password,
      });
      if (res?.error) {
        if (res.error == "CredentialsSignin") {
          toast.error("Invalid Credentials");
        } else {
          toast.error(res?.error);
        }
      }
      if (res?.url) {
        router.replace("/dashboard");
        toast.success("Logged In Successfully");
      }
    } catch (error: any) {
      toast.error(error?.message);
    }
  };

  return !session ? (
    <div className="flex bg-gray-50 flex-col justify-center min-h-screen items-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="space-y-3 p-5 w-full max-w-md rounded-lg shadow-md m-auto bg-white"
      >
        <h1 className="text-center text-3xl my-6 font-bold ">User SignIn</h1>
        <div>
          <label className="block text-xs text-slate-700" htmlFor="identifier">
            Username
          </label>
          <input
            className="input-form-field"
            type="text"
            id="identifier"
            {...register("identifier")}
          />
          <p
            className={`${
              errors.identifier ? "text-red-500" : "text-black"
            } text-xs`}
          >
            {" "}
            {errors.identifier && errors.identifier?.message}
          </p>
        </div>

        <div>
          <label className="block text-xs text-slate-700" htmlFor="identifier">
            Password
          </label>
          <input
            className="input-form-field"
            type="password"
            id="password"
            {...register("password")}
          />
          <p
            className={`${
              errors.password ? "text-red-500" : "text-black"
            } text-xs`}
          >
            {" "}
            {errors.password && errors.password?.message}
          </p>
        </div>

        <button
          className="border box-border rounded-sm  px-6 bg-blue-600 hover:bg-blue-700 cursor-pointer p-3 mt-5 text-white font-bold text-sm active:border-black"
          type="submit"
        >
          Submit
        </button>
        <span className="p-3  block text-center text-slate-600 mt-1">
          New user Register?
          <Link
            className="underline hover:cursor-pointer text-blue-600"
            href={"/sign-up"}
          >
            {" "}
            SignUp
          </Link>{" "}
          or Verify?{" "}
          <Link
            className="underline hover:cursor-pointer text-blue-600"
            href={"/verify/fghsdfg"}
          >
            {" "}
            verify
          </Link>
        </span>
      </form>
    </div>
  ) : (
    <div className="flex bg-gray-50 flex-col justify-center min-h-screen items-center">
      <h1 className="text-3xl font-bold">
        You are already logged in as {session.user.username}
      </h1>
      <button
        onClick={() => signOut()}
        className="border box-border rounded-sm  px-6 bg-blue-600 hover:bg-blue-700 cursor-pointer p-3 mt-5 text-white font-bold text-sm active:border-black"
      >
        Sign Out
      </button>
    </div>
  );
}
