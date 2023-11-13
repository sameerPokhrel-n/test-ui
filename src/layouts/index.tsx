import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Sidebar } from "./components/Sidebar";
import Header from "./components/Header";
import { SubHeader } from "./components/SubHeader";
import { menuItems } from "@/app/data/menu";

export const AppLayout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard");
  }, []);

  return (
    <div className="flex flex-col max-h-screen bg-gray-200 text-gray-800 max-w-screen">
      <Header />
      <div className="w-full max-h-screen col-span-4 overflow-hidden">
        <div className="flex-1 flex  flex-row gap-[0.3rem]">
          <Sidebar items={menuItems} />
          <section className="flex flex-col">
            <SubHeader />
            <div className="bg-white w-screen h-screen duration-250 text-dark">
              <div className="w-[calc(100vw-240px)]">
                <Outlet />
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
