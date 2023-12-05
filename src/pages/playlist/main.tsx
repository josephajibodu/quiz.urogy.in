import Button from "../../components/button";

function MainPlaylistPage() {
  return (
    <>
      <section className="text-brand flex w-full flex-col py-12">
        <h2 className="text-xl font-bold mb-10">
          Your Tailored Playlist is Ready!
        </h2>
        <p className="text-lg leading-relaxed w-full max-w-prose">
          Congratulations on completing the questionnaire! We&apos;ve
          meticulously curated a custom playlist just for you, tailored to
          address your urogynecology-related concerns and educational needs.
        </p>

        <a target="_blank" rel="noreferrer" href="https://youtube.com" className="w-fit">
          <Button className="w-fit flex items-center gap-2">
            View Playlist on Youtube
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              width="48px"
              height="48px"
              className="w-6 h-6"
            >
              <path
                fill="#FF3D00"
                d="M43.2,33.9c-0.4,2.1-2.1,3.7-4.2,4c-3.3,0.5-8.8,1.1-15,1.1c-6.1,0-11.6-0.6-15-1.1c-2.1-0.3-3.8-1.9-4.2-4C4.4,31.6,4,28.2,4,24c0-4.2,0.4-7.6,0.8-9.9c0.4-2.1,2.1-3.7,4.2-4C12.3,9.6,17.8,9,24,9c6.2,0,11.6,0.6,15,1.1c2.1,0.3,3.8,1.9,4.2,4c0.4,2.3,0.9,5.7,0.9,9.9C44,28.2,43.6,31.6,43.2,33.9z"
              />
              <path fill="#FFF" d="M20 31L20 17 32 24z" />
            </svg>
          </Button>
        </a>
      </section>

      <section className="text-brand flex w-full gap-8">
        <div className="w-7/12">
          <div className="aspect-video h-[400px] border-brand border-2 rounded-xl"></div>
        </div>
        <div className="w-5/12 flex flex-col gap-8 h-[400px] overflow-y-scroll">
          <div className="flex gap-4">
            <div className="aspect-video h-20 border-brand border-2 rounded-xl"></div>
            <div>
              <p className="font-semibold text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <span className="text-base">3.15</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="aspect-video h-20 border-brand border-2 rounded-xl"></div>
            <div>
              <p className="font-semibold text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <span className="text-base">3.15</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="aspect-video h-20 border-brand border-2 rounded-xl"></div>
            <div>
              <p className="font-semibold text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <span className="text-base">3.15</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="aspect-video h-20 border-brand border-2 rounded-xl"></div>
            <div>
              <p className="font-semibold text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <span className="text-base">3.15</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="aspect-video h-20 border-brand border-2 rounded-xl"></div>
            <div>
              <p className="font-semibold text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <span className="text-base">3.15</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="aspect-video h-20 border-brand border-2 rounded-xl"></div>
            <div>
              <p className="font-semibold text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <span className="text-base">3.15</span>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="aspect-video h-20 border-brand border-2 rounded-xl"></div>
            <div>
              <p className="font-semibold text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>
              <span className="text-base">3.15</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainPlaylistPage;
