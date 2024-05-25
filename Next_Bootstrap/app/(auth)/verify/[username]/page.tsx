"use client";
import axios, { AxiosError } from "axios";
import { useRouter, useParams } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ApiResponse } from "@/types/ApiResponse";
import { verificationCodeSchema } from "@/schemas/verificationCodeSchema";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { toast } from "react-toastify";

type UserVerificationSchema = z.infer<typeof verificationCodeSchema>;

const UserVerification = () => {
  const param = useParams<{ username: string }>();
  const router = useRouter();
  const { handleSubmit, register, formState } = useForm<UserVerificationSchema>(
    {
      defaultValues: {
        code: "",
      },
      mode: "onSubmit",
      resolver: zodResolver(verificationCodeSchema),
    }
  );
  const { errors } = formState;
  const submitHandler = async (data: UserVerificationSchema) => {
    try {
      const decodedUsername = decodeURIComponent(param.username);
      const response = await axios.post<ApiResponse>(
        "/api/verifyUser",
        {
          username: decodedUsername,
          verificationCode: data.code,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.data.success) {
        router.push(`/sign-in`);
      }
      toast.success("User Verified");
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      console.log(axiosError.response?.data.message);
      toast.error(axiosError.response?.data.message as String);
    }
  };

  return (
    <div className="flex bg-gray-50 flex-col justify-center min-h-screen items-center">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="space-y-3 p-5 w-full max-w-md rounded-lg shadow-md m-auto bg-white"
      >
        <h1 className="text-center text-3xl my-6 font-bold ">
          Verification Code
        </h1>
        <label
          className="block text-xs text-slate-700"
          htmlFor="verificationCode"
        >
          Enter your VerificationCode from Email
        </label>
        <input
          className="input-form-field"
          type="password"
          id="code"
          {...register("code")}
        />
        <p className={`${errors.code ? "text-red-500" : "text-black"} text-xs`}>
          {" "}
          {errors.code && errors.code?.message}
        </p>
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
        </span>
      </form>
    </div>
  );
};

export default UserVerification;
