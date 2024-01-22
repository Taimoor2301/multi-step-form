import Navigator from "./components/Navigator";
import PageOne from "./components/Page-1";
import { Route, Routes } from "react-router-dom";
import PageTwo from "./components/Page-2";
import PageThree from "./components/Page-3";
import PageFour from "./components/Page-4";
import Thankyou from "./components/Thankyou";
import { useEffect, useState } from "react";
import Layout from "./components/utils/Layout";

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.matchMedia("(max-width:760px)").matches);
    }
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <main className="md:min-h-screen w-full md:grid place-content-center bg-n3">
      <div className="bg-white shadow-md rounded-xl p-3 flex flex-col min-h-screen md:min-h-[auto] md:flex-row gap-1  md:min-w-[760px] lg:min-w-[55rem]">
        <Navigator />
        <Layout>
          <Routes>
            <Route path="/" element={<PageOne />} />
            <Route path="/2" element={<PageTwo />} />
            <Route path="/3" element={<PageThree />} />
            <Route path="/4" element={<PageFour />} />
            <Route path="/thankyou" element={<Thankyou />} />
          </Routes>
        </Layout>
      </div>
    </main>
  );
}

export default App;
