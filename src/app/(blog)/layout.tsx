import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "You can see topics we created about any products in this page| tech-store",
  description: "Generated by create next app",
};

const BlogLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className='pt-32 mt-12'>{children}</div>
      <Footer />
    </div>
  );
};

export default BlogLayout;
