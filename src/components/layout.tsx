import { ReactElement } from "react";

function Layout({ children } : { children: ReactElement }) {
    return (
      <div className="relative min-h-screen bg-gradient-to-b from-[#BDDAFF] to-white">
        <svg
          className="absolute -top-24 right-0 lg:top-0 lg:right-0 w-48 lg:w-[415px]"
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
          className="absolute -left-48 top-[30%] lg:top-[30%] lg:w-[343px]"
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
        <main className="flex flex-col items-center pb-16">
          <header className="h-24 w-full border-b-brand border flex justify-center items-center">
            <div className="font-bold text-lg">urogy.in</div>
          </header>
  
          {children}
        </main>
      </div>
    );
  }
  
  export default Layout;
  