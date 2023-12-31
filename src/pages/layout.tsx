import Alink from "@/components/a-link";
import routes from "@/utils/routes";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#BDDAFF] to-white">
      <svg
        className="absolute -top-24 right-0 lg:top-0 lg:right-0 w-48 lg:w-[415px] pointer-events-none"
        width="415"
        height="539"
        viewBox="0 0 415 539"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="344"
          cy="195"
          r="75.5"
          stroke="#00286B"
          strokeOpacity="0.15"
        />
        <circle
          cx="344"
          cy="195"
          r="111.5"
          stroke="#00286B"
          strokeOpacity="0.15"
        />
        <circle
          cx="344"
          cy="195"
          r="157.74"
          stroke="#00286B"
          strokeOpacity="0.15"
        />
        <circle
          cx="344"
          cy="195"
          r="242.593"
          stroke="#00286B"
          strokeOpacity="0.15"
        />
        <circle
          cx="344"
          cy="195"
          r="198.5"
          stroke="#00286B"
          strokeOpacity="0.15"
        />
        <circle
          cx="344"
          cy="195"
          r="292.5"
          stroke="#00286B"
          strokeOpacity="0.15"
        />
        <circle
          cx="344"
          cy="195"
          r="343.5"
          stroke="#00286B"
          strokeOpacity="0.15"
        />
      </svg>
      <svg
        className="absolute -left-48 top-[30%] lg:top-[30%] lg:w-[343px] pointer-events-none"
        width="343"
        height="688"
        viewBox="0 0 343 688"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="-1"
          cy="344"
          r="75.5"
          stroke="#00286B"
          strokeOpacity="0.15"
        />
        <circle
          cx="-1"
          cy="344"
          r="111.5"
          stroke="#00286B"
          strokeOpacity="0.15"
        />
        <circle
          cx="-0.999985"
          cy="344"
          r="157.74"
          stroke="#00286B"
          strokeOpacity="0.15"
        />
        <circle
          cx="-0.999985"
          cy="344"
          r="242.593"
          stroke="#00286B"
          strokeOpacity="0.15"
        />
        <circle
          cx="-1"
          cy="344"
          r="198.5"
          stroke="#00286B"
          strokeOpacity="0.15"
        />
        <circle
          cx="-1"
          cy="344"
          r="292.5"
          stroke="#00286B"
          strokeOpacity="0.15"
        />
        <circle
          cx="-1"
          cy="344"
          r="343.5"
          stroke="#00286B"
          strokeOpacity="0.15"
        />
      </svg>
      <main className="flex flex-col items-center pb-16 h-full min-h-screen">
        <header className="h-24 w-full border-b-brand border flex justify-center items-center">
          <Alink to={routes.LANDING_PAGE}>
            <div className="font-bold text-xl text-brand">urogy.in</div>
          </Alink>
        </header>

        <div className="max-w-7xl w-full h-full flex flex-col items-center">
          <Outlet />
        </div>
      </main>
    </div>
  );
}

export default Layout;
