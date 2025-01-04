"use client";

import { Button } from "../ui/button";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiUnlock } from "react-icons/ci";
import { Input } from "../ui/input";
import { FcGoogle } from "react-icons/fc";
import { FormEvent, useState, ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import Link from "next/link";
const Login = () => {
  const [email, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsloading] = useState<boolean>(false);
  const router = useRouter();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsloading(true);

    try {
      // Attempt to sign in with credentials
      const res = await signIn("credentials", {
        redirect: false,
        email,
        password,
      });

      if (res?.error) {
        toast.error("email or password not valid");
      } else {
        toast.success("Successfully login ");
        router.refresh();
        router.push("/");
      }
    } catch (error: any) {
      console.error("Unexpected error:", error);
    } finally {
      setIsloading(false);
    }
  };

  const handleUserEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className='md:w-[50vw] sm:w-[70vw] w-[100vw] my-10 mx-auto'>
      <div className='md:p-10 sm:p-5 p-2 shadow-2xl'>
        <form className='grid gap-4 py-4' onSubmit={handleSubmit}>
          <div className='flex items-center  relative'>
            <span className='text-xl absolute right-0 bg-slate-200 px-3 flex items-center h-full'>
              <MdOutlineAlternateEmail />
            </span>
            <Input
              onChange={handleUserEmailChange}
              value={email}
              type='email'
              className='w-full shadow-none! p-2 outline-none! border-none! h-[6vh]'
              placeholder='Email ...'
            />
          </div>
          <div className='flex items-center  relative'>
            <span className='text-xl absolute right-0 bg-slate-200 px-3 flex items-center h-full'>
              <CiUnlock />
            </span>
            <Input
              onChange={handlePasswordChange}
              value={password}
              className='w-full shadow-none! p-2 outline-none! border-none! h-[6vh]'
              placeholder='Password ...'
              type='password'
            />
          </div>

          <Button
            type='submit'
            variant={"secondary"}
            className=' bg-slate-600 text-slate-100 hover:text-slate-900 border-none shadow-xl flex items-center justify-center'>
            {isLoading ? "Please wait..." : " Sign In"}
          </Button>
        </form>
        <Button variant={"link"} className='font-semibold '>
          Forgot your password?
        </Button>
        <div className='flex items-center justify-between'>
          <p className='text-sm text-slate-600'>
            Don't register yet
            <Link
              href={"/user-register"}
              className='text-slate-900 ml-1 font-semibold underline'>
              Create new{" "}
            </Link>
          </p>
          <Button
            variant={"outline"}
            className='border-none shadow-xl flex items-center justify-center'>
            <FcGoogle />
            <span>Continue with google</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
