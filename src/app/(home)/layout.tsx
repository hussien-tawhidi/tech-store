import Footer from "@/components/footer/Footer";
import Header from "@/components/header/Header";
import Banner from "@/components/home/Banner";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='z-0 over'>
      <Banner />
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default HomeLayout;
