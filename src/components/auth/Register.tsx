"use client";

import { Button } from "../ui/button";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiUnlock } from "react-icons/ci";
import { Input } from "../ui/input";
import { CiUser } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { registerUser } from "@/actions/registerUser";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await registerUser({ email, password, name });
      router.push("/user-login");
      router;
      setName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    } catch (error) {
      console.error("Registration failed:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='md:w-[50vw] sm:w-[70vw] w-[100vw] my-10 mx-auto'>
      <div className='md:p-10 sm:p-5 p-2 shadow-2xl'>
        <form className='grid gap-4 py-4' onSubmit={handleSubmit}>
          <div className='flex items-center relative'>
            <span className='text-xl absolute right-0 bg-slate-200 px-3 flex items-center h-full'>
              <CiUser />
            </span>
            <Input
              className='w-full shadow-none! p-2 outline-none! border-none! h-[6vh]'
              placeholder='Name ...'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className='flex items-center relative'>
            <span className='text-xl absolute right-0 bg-slate-200 px-3 flex items-center h-full'>
              <MdOutlineAlternateEmail />
            </span>
            <Input
              className='w-full shadow-none! p-2 outline-none! border-none! h-[6vh]'
              placeholder='Email ...'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='flex items-center relative'>
            <span className='text-xl absolute right-0 bg-slate-200 px-3 flex items-center h-full'>
              <CiUnlock />
            </span>
            <Input
              className='w-full shadow-none! p-2 outline-none! border-none! h-[6vh]'
              placeholder='Password ...'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='flex items-center relative'>
            <span className='text-xl absolute right-0 bg-slate-200 px-3 flex items-center h-full'>
              <CiUnlock />
            </span>
            <Input
              className='w-full shadow-none! p-2 outline-none! border-none! h-[6vh]'
              placeholder='Confirm your password ...'
              type='password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <Button
            disabled={loading}
            type='submit'
            variant={"secondary"}
            className=' bg-slate-600 text-slate-100 hover:text-slate-900 border-none shadow-xl flex items-center justify-center'>
            {loading ? "Sending..." : "Creat"}
          </Button>
        </form>
        <div className='flex items-center justify-between'>
          <p className='text-sm text-slate-600'>
            Have already an account{" "}
            <Link
              href={"/user-login"}
              className='text-slate-900 font-semibold underline'>
              Login
            </Link>
          </p>
          <Button
            variant={"outline"}
            className='border-none shadow-xl flex items-center justify-center'>
            <FcGoogle /> <span>Continue with Google</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Register;
