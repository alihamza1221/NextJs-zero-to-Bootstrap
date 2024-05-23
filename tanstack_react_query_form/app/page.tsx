"use client";
import { useForm, useFieldArray } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { z } from "zod";
import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
let render = 0;

export default function Home() {
  render++;
  const schema = z.object({
    username: z.string().nonempty(),
    password: z.string().nonempty(),
    social: z.object({
      twitter: z.string().nonempty(),
      facebook: z.string().nonempty(),
    }),
    phoneNumbers: z.array(
      z.object({
        ph_no: z.string().nonempty(),
      })
    ),
  });
  type socialFormData = {
    username: string;
    password: string;
    social: {
      twitter: string;
      facebook: string;
    };
    phoneNumbers: {
      ph_no: string;
    }[];
  };

  const form = useForm<socialFormData>({
    defaultValues: {
      username: "",
      password: "",
      social: {
        twitter: "",
        facebook: "",
      },
      phoneNumbers: [
        {
          ph_no: "",
        },
      ],
    },
    mode: "onBlur",
    resolver: zodResolver(schema),
  });
  const {
    register,
    handleSubmit,
    control,
    formState,
    getValues, // getting values without watching re-render
    watch, // watching individual input or form (watch('username'))
    setValue,
    trigger, // trigger validation manually by calling trigger()
    reset,
  } = form;

  const {
    isDirty, // true if the form has been modified (values are changed)
    isValid, // true if the form is valid
    isSubmitting,
    isSubmitted,
    isSubmitSuccessful,
    submitCount,
  } = formState;
  const { fields, append, remove } = useFieldArray({
    control,
    name: "phoneNumbers",
  });
  const submitHandler = async (data: any): Promise<void> => {
    console.log(data);
    console.log(data["username"], "pass:", data["password"]);
  };
  useEffect(() => {
    const subscription = watch((value) => {
      console.log(value);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <>
      <h1 className=" w-full bg-slate-800 h-min text-bold text-white border-1 rounded-md">
        Rendered: {render} times
      </h1>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <form
            className="mt-8 space-y-6"
            onSubmit={handleSubmit(submitHandler)}
            noValidate
          >
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  {...register("username")}
                  type="text"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>

                <input
                  id="password"
                  {...register("password")}
                  type="password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>
            <input
              id="soical"
              {...register("social.twitter")}
              type="text"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="twitter"
            />
            <input
              id="facebook"
              {...register("social.facebook")}
              type="text"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="facebook"
            />
            <div className="field-array-form-control">
              {fields.map((field, index) => {
                return (
                  <div className="form-control" key={field.id}>
                    <input
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      {...register(`phoneNumbers.${index}.ph_no` as const, {
                        validate: (value) => {
                          const val = parseInt(value.trim());
                          return (
                            (value.length == 10 && !isNaN(val)) ||
                            "Invalid Phone Number"
                          );
                        },
                      })}
                      placeholder="Phone Number"
                    />
                    <span>
                      {formState?.errors?.phoneNumbers?.[index]?.ph_no?.message}
                    </span>
                    {index >= 0 && (
                      <button
                        className=" mt-3 group relative w-1/4 flex justify-start py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 focus:ring-indigo-500"
                        type="button"
                        onClick={() => remove(index)}
                      >
                        Delete
                      </button>
                    )}
                  </div>
                );
              })}
            </div>
            <button
              type="button"
              className=" mt-3 group relative w-1/4 flex justify-start py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 text-center focus:ring-offset-2 focus:ring-indigo-500"
              onClick={() => {
                append({ ph_no: "" });
              }}
            >
              Add no.
            </button>
            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Register
              </button>
            </div>
          </form>
          <DevTool control={control} />
        </div>
      </div>
    </>
  );
}
