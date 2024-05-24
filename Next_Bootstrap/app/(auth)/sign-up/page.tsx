"use client";
import axios, { AxiosError } from "axios";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { ApiResponse } from "@/types/ApiResponse";
import { userSignUpSchema } from "@/schemas/userSignUpSchema";
import { useDebounceCallback } from "usehooks-ts";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

var count = 0;
export default function SignUP() {
  count += 1;
  const [UserName, setUserName] = useState("");
  const [isUniqueUserName, setIsUniqueUserName] = useState(false);

  const router = useRouter();
  const debounced = useDebounceCallback(setUserName, 500);
  type SignUpForm = z.infer<typeof userSignUpSchema>;

  const {
    register,
    handleSubmit,
    reset,
    watch,
    getValues,
    setValue,
    formState,
    control,
  } = useForm<SignUpForm>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    mode: "onBlur",
    resolver: zodResolver(userSignUpSchema),
  });
  const { errors, isLoading, isDirty, isValid, isSubmitSuccessful } = formState;
  //checking if username unique on keypress
  useEffect(() => {
    const subscription = watch((value: any) => {
      debounced(value.username);
    });

    return () => {
      return subscription.unsubscribe();
    };
  }, [watch]);

  useEffect(() => {
    const checkUsernameUnique = async () => {
      if (UserName) {
        try {
          const response = await axios.get<ApiResponse>(
            `/api/usernameValidation?username=${UserName}`
          );
          setIsUniqueUserName(response.data.success);
          console.log("in-res: ", isUniqueUserName);
        } catch (error) {
          const axiosError = error as AxiosError<ApiResponse>;
          setIsUniqueUserName(false);
          console.log(axiosError.response?.data.message);
        }
      }
    };
    checkUsernameUnique();
  }, [UserName]);

  const submitHandler = async (data: SignUpForm) => {
    console.log(data);
  };
  useEffect(() => {
    console.log("ineff: ", isUniqueUserName);
  }, [isUniqueUserName]);

  return (
    <div className="w-full h-screen flex items-center ">
      <form
        className="bg-slate-50 container min-h-[30rem] flex md:w-[30%] max-h-[40rem] w-full max-w-screen-md p-5  justify-center items-center border-2 rounded-sm border-slate-50 shadow-md flex-col"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="text-center text-3xl font-bold my-3">
          Register, {count / 2}
        </h1>
        <div className="form-field w-[85%] p-3">
          <label
            htmlFor="username"
            className="inline-block text-xs text-slate-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            {...register("username")}
            className="input-form-field"
          />
          <p
            className={`${
              errors.username || !isUniqueUserName
                ? "text-red-500"
                : "text-black"
            } text-xs`}
          >
            {" "}
            {isUniqueUserName && <span>"username available" </span>}
          </p>
        </div>
        <div className="form-field w-[85%] p-3">
          <label
            htmlFor="email"
            className="inline-block text-xs text-slate-700"
          >
            Email
          </label>
          <input
            type="text"
            id="email"
            {...register("email")}
            className="input-form-field"
          />
          <p
            className={`${
              errors.email ? "text-red-500" : "text-white"
            } text-xs`}
          >
            {errors.email ? errors.email?.message : "Email is Valid"}
          </p>
        </div>
        <div className="form-field w-[85%] p-3">
          <label
            htmlFor="password"
            className="inline-block text-xs text-slate-700"
          >
            Password
          </label>
          <input
            type="text"
            id="password"
            {...register("password")}
            className="input-form-field"
          />
          <p
            className={`${
              errors.password ? "text-red-500" : "text-white"
            } text-xs`}
          >
            {errors.password ? errors.password?.message : "Password is valid"}
          </p>
        </div>
        <div className="block w-3/4 text-center">
          <hr className="mx-auto w-3/4 border-slate-200 border-b-[1px]" />
        </div>
        <button
          type="submit"
          className="border box-border rounded-sm  px-6 bg-blue-600 hover:bg-blue-700 cursor-pointer p-3 mt-5 text-white font-bold text-sm active:border-black"
        >
          Submit
        </button>
        <span className="w-[85%] p-3  block text-start text-slate-600 mt-1">
          Already have an account?
          <Link
            className="underline hover:cursor-pointer text-blue-600"
            href={"/sign-in"}
          >
            {" "}
            SignIn
          </Link>
        </span>
      </form>
    </div>
  );
}
