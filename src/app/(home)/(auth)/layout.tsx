"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const UserLayout = ({ children }: { children: React.ReactNode }) => {
  const { data: session } = useSession();

  const url = process.env.NEXT_PUBLIC_BASE_URL;

  if (!session) redirect(`${url}/user-login`);

  return <>{children}</>;
};

export default UserLayout;
