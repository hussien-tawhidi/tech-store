import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='z-0 over mt-20 pt-12'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
