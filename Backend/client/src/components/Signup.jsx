import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../contex/AuthProvider";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const [authUser, setAuthUser] = useAuth();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const password = watch("password", "");
  const confirmPssword = watch("confirmPassword", "");
  const validatePasswordMatch = (value) => {
    return value === password || " Password don't match";
  };

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      password: data.password,
      confirmpassword: data.confirmPassword,
    };
    await axios
      .post("/api/user/signup", userInfo)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          toast.success("Signup successfull ! you can now log in.");
        }
        localStorage.setItem("messenger", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((error) => {
        if (error.response) {
          toast.error("Error:" + error.response.data.error);
        }
      });
  };

  return (
    <>
      <div className="bg-white h-full text-black">
        <div className=" flex h-screen items-center justify-center">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" border border-black px-6 py-2 rounded-md space-y-3 w-96"
          >
            <h1 className="text-2xl items-center text-blue-800 font-bold">
              Messenger
            </h1>

            <h2 className="text-2xl items-center">
              Create a new{" "}
              <span className="text-blue-800 font-semibold">Account</span>
            </h2>

            {/*username */}
            <label className=" border border-gray-400 input input-bordered flex items-center gap-2 bg-white  ">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </g>
              </svg>
              <input
                type="text"
                className="grow"
                placeholder="Username"
                {...register("name", { required: true })}
              />
            </label>
            {errors.name && (
              <span className="text-red-600 text-sm font-semibold">
                **This field is required**
              </span>
            )}

            {/*email */}
            <label className="border border-gray-400 input input-bordered flex items-center gap-2 bg-white">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </g>
              </svg>
              <input
                type="email"
                className="grow"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && (
              <span className=" text-red-600 text-sm font-semibold">
                **This field is required**
              </span>
            )}
            {/* password */}
            <label className="border border-gray-400 input input-bordered flex items-center gap-2 bg-white">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && (
              <span className="text-red-600 text-sm font-semibold">
                This field is required
              </span>
            )}
            {/* confirm password */}
            <label className="border border-gray-400 input input-bordered flex items-center gap-2 bg-white">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="confirm password"
                {...register("confirmPassword", {
                  required: true,
                  validate: validatePasswordMatch,
                })}
              />
            </label>

            {errors.confirmPassword && (
              <span className="text-red-600 text-sm font-semibold">
                {errors.confirmPassword.message}
              </span>
            )}
            {/* text & button */}
            <div className="flex justify-center">
              <input
                type="submit"
                value="signup"
                className="text-white bg-blue-700 cursor-pointer w-full rounded-lg py-2"
              ></input>
              {errors.exampleRequired && <span>This field is required</span>}
            </div>
            <p>
              Have any Account?{" "}
              <Link
                to={"/login"}
                className="text-blue-700 underline cursor-pointer ml-1"
              >
                Login
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
