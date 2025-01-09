import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";
const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  const url = process.env.NEXT_PUBLIC_BASE_URL;

  if (session) redirect(`${url}/user/${session?.user?._id}`);

  return <>{children}</>;
};

export default UserLayout;
