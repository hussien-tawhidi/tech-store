import { Metadata } from "next";

export const metadata: Metadata = {
  title: "You could see the most %off products ...",
  description: "Generated by create next app",
};

const TechStoreOffLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className='z-0 over'>{children}</div>;
};

export default TechStoreOffLayout;
