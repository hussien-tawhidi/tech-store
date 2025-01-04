
import { redirect } from "next/navigation";
import { auth } from "../../../../../auth";
const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (session) redirect(`/user/${session?.user?._id}`);

  return <>{ children }</>;
};

export default UserLayout;
