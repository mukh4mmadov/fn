//rrd import
import { Form, Link, useActionData } from "react-router-dom";

//hook

import { useEffect } from "react";

//components
import { FormInput } from "../components";

//Action
export const action = async ({ request }) => {
  let formData = await request.formData();
  let email = formData.get("email");
  let password = formData.get("password");
  return { email, password };
};

import { sendPasswordResetEmail } from "firebase/auth";

//custom hooks
import { useRegister } from "../hooks/useRegister";
import { useLogin } from "../hooks/useLogin";
import { auth } from "../firebase/firebaseConfig";

function Login() {
  const nomi = useActionData();

  const { isPanding, registerWithGoogle } = useRegister();

  const { isPanding: isPandingLogin, signIn } = useLogin();

  useEffect(() => {
    if (nomi) {
      signIn(nomi.email, nomi.password);
    }
  }, [nomi]);

  return (
    <div className="auth-container">
      <div className="auth-bg-login auth-right">
        <Form
          method="post"
          className="flex flex-col gap-5 w-[340px] shadow-2xl p-7 rounded-xl  bg-[rgba(255,255,255,0.6)]"
        >
          <h1 className="text-4xl font-semibold text-center">Login</h1>
          <FormInput
            label="Email :"
            type="email"
            name="email"
            placeholder="Email"
          />
          <FormInput
            label="Password :"
            type="password"
            name="password"
            placeholder="Password"
          />
          <div className="form-control flex items-center">
            <label className="cursor-pointer flex gap-1"></label>
          </div>
          <div>
            {isPandingLogin && (
              <button
                disabled
                type="button"
                className="btn btn-primary btn-block font-bold"
              >
                Loading...
              </button>
            )}
            {!isPandingLogin && (
              <button className="btn btn-primary btn-block font-bold">
                Login
              </button>
            )}
          </div>
          <div>
            {isPanding && (
              <button
                disabled
                type="button"
                className="btn bg-green-300 border-red-400 btn-block font-bold"
              >
                Loading...
              </button>
            )}
            {!isPanding && (
              <button
                onClick={registerWithGoogle}
                type="button"
                className="btn bg-green-300 border-yellow-400 btn-block font-bold"
              >
                Google
              </button>
            )}
          </div>

          <div className="text-center">
            <p className="font-medium text-slate-500">
              If you don't have account,{" "}
              <Link className="link link-primary" to="/register">
                Register
              </Link>
            </p>
          </div>
        </Form>
      </div>
    </div>
  );
}

export default Login;
