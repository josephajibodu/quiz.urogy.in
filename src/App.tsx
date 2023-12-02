function App() {
  return (
      <div className="relative min-h-screen bg-gradient-to-b from-[#BDDAFF] to-white">
          {/* <svg className="absolute right-0" width="415" height="539" viewBox="0 0 415 539" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="344" cy="195" r="75.5" stroke="#00286B" strokeOpacity="0.15"/>
              <circle cx="344" cy="195" r="111.5" stroke="#00286B" strokeOpacity="0.15"/>
              <circle cx="344" cy="195" r="157.74" stroke="#00286B" strokeOpacity="0.15"/>
              <circle cx="344" cy="195" r="242.593" stroke="#00286B" strokeOpacity="0.15"/>
              <circle cx="344" cy="195" r="198.5" stroke="#00286B" strokeOpacity="0.15"/>
              <circle cx="344" cy="195" r="292.5" stroke="#00286B" strokeOpacity="0.15"/>
              <circle cx="344" cy="195" r="343.5" stroke="#00286B" strokeOpacity="0.15"/>
          </svg>
          <svg className="absolute top-[30%]" width="343" height="688" viewBox="0 0 343 688" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="-1" cy="344" r="75.5" stroke="#00286B" strokeOpacity="0.15"/>
            <circle cx="-1" cy="344" r="111.5" stroke="#00286B" strokeOpacity="0.15"/>
            <circle cx="-0.999985" cy="344" r="157.74" stroke="#00286B" strokeOpacity="0.15"/>
            <circle cx="-0.999985" cy="344" r="242.593" stroke="#00286B" strokeOpacity="0.15"/>
            <circle cx="-1" cy="344" r="198.5" stroke="#00286B" strokeOpacity="0.15"/>
            <circle cx="-1" cy="344" r="292.5" stroke="#00286B" strokeOpacity="0.15"/>
            <circle cx="-1" cy="344" r="343.5" stroke="#00286B" strokeOpacity="0.15"/>
        </svg> */}
        <main className="flex flex-col items-center">
          <header className="h-24 w-full border-b-brand border flex justify-center items-center">
            <div className="font-bold text-lg">urogy.in</div>
          </header>

          <h1 className="text-center text-5xl lg:text-8xl mt-20 lg:mt-40 leading-[4rem] lg:leading-[6.4rem]">
            <div>Urogynecology</div>
            <div className="w-fit flex items-center gap-4 lg:gap-14">
              Patient 
              <span className="block lg:hidden border-4 border-accent rounded-full w-[120px] lg:w-[200px] h-10"></span>
              <span className="hidden lg:block border-8 border-accent rounded-full w-[500px] h-20"></span>
            </div>
            <div className="w-fit flex items-center gap-4 lg:gap-8 relative">
              <span className="hidden lg:block border-8 bg-accent border-accent rounded-full w-[150px] h-20"></span>
              <span className="block lg:hidden border-8 bg-accent border-accent rounded-full w-[50px] h-10 absolute top-[100%]"></span>
              <span>Education App</span>
            </div>
          </h1>

          <div className="">

          </div>
        </main>
      </div>
  )
}

export default App
