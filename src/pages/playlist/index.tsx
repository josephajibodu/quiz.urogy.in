import Button from "@/components/button";
import routes from "@/utils/routes";
import PlaylistLoader from "./loader";
import Alink from "@/components/a-link";
import PlaylistError from "./error";
import { useActionData, useSearchParams, useSubmit } from "react-router-dom";

function PlaylistPage() {
  const submit = useSubmit()
  const [searchParam] = useSearchParams();
  const actionData = useActionData()
  
  const handlePlaylistGeneration = () => {
    const data = {
      invitation_code: searchParam.get('invitation_code')
    }

    submit(data, {
      action: routes.PERSONALIZED_PLAYLIST,
      method: 'POST',
      encType: 'application/json',
    })
  }

  return (
    <>
      <section className="text-brand flex w-full flex-col py-12 px-4">
        <h2 className="text-xl font-bold mb-10">
          Your Tailored Playlist is Ready!
        </h2>
        <p className="text-lg leading-relaxed w-full max-w-prose">
          Congratulations on completing the questionnaire! We&apos;ve
          meticulously curated a custom playlist just for you, tailored to
          address your urogynecology-related concerns and educational needs.
        </p>

        <a
          target="_blank"
          rel="noreferrer"
          href="https://youtube.com"
          className="w-fit mt-8"
        >
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

      <section className="text-brand w-full px-4">
        <div className="flex flex-col lg:flex-row w-full gap-4">
          <div className="w-full lg:w-7/12">
            <div className="aspect-video lg:h-[400px] border-brand border-2 rounded-xl"></div>
          </div>

          <div className="w-full lg:w-5/12 flex flex-col h-[400px] relative">
            <div className="overflow-y-scroll pb-12">
              {Array(6)
                .fill(1)
                .map((_, i) => (
                  <div
                    key={i.toString()}
                    className="flex gap-4 cursor-pointer py-3 px-3 rounded-3xl hover:bg-white/50"
                  >
                    <div className="aspect-video h-20 border-brand border-2 rounded-xl"></div>
                    <div>
                      <p className="font-semibold text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      </p>
                      <span className="text-base">3.15</span>
                    </div>
                  </div>
                ))}
            </div>

            {/* Next/Prev button to control the videos easily */}
            <div className="absolute bottom-0 bg-red-300 w-full h-12">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m0 0l6.75-6.75M12 19.5l-6.75-6.75"
                />
              </svg> */}
            </div>
          </div>
        </div>

        <Alink to={routes.ADDITIONAL_RESOURCES} className="flex gap-4 text-brand underline text-base my-8">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
            />
          </svg>
          Checkout Additional Resources
        </Alink>
      </section>
    </>
  );
}

export default PlaylistPage;
PlaylistPage.loader = PlaylistLoader
PlaylistPage.error = PlaylistError
