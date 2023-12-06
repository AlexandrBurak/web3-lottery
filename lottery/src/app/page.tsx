import { NextPage } from "next";

import { Main } from "@/components/Main/Main";
import Footer from "@/components/Footer";

const Home: NextPage = () => {
  return (
    <div className="bg-[#091B18] min-h-screen flex-col">
      <Main />
      <footer className="border-t border-emerald-500/20 flex items-center text-white p-5">
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
