import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar";
import Header from "../Header";

const AppLayout = () => {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar />

        <div className="flex min-h-screen flex-1 flex-col">
          <Header />

          <main className="flex-1">
            <div className="mx-auto w-full max-w-7xl p-4 sm:p-6 lg:p-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
