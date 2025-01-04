import { auth } from "../../../../../../auth";
import { redirect } from "next/navigation";
const UserLayout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session) redirect("/user-login");

  return <>{ children }</>;
};

export default UserLayout;
