import Alink from "@/components/a-link";
import Button from "@/components/button";
import routes from "@/utils/routes";
import { useState } from "react";
import YouTube, { YouTubeProps, YouTubePlayer } from "react-youtube";
import MainLoader from "./loader";
import { useLoaderData } from "react-router";
import { InvitationData } from "@/types";

function HomePage() {
  const {invitation} = useLoaderData() as { invitation: InvitationData };

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const [youtubePlayer, setYoutubePlayer] = useState<YouTubePlayer>();
  const [showPlayBtn, setShowPlayBtn] = useState<boolean>(true);

  const options: YouTubeProps["opts"] = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 1,
      rel: 0,
    },
  };

  const onEnd: YouTubeProps["onEnd"] = (event) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    void event.target.seekTo(0, true) 
    void event.target.pauseVideo();
  };

  const onReady: YouTubeProps["onReady"] = (event) => {
    setYoutubePlayer(event.target);
    setShowPlayBtn(true);

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    void event.target.pauseVideo()
  };

  const onPause: YouTubeProps["onPause"] = (event) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    void event.target.pauseVideo();
    setShowPlayBtn(true);
  };

  const onPlay: YouTubeProps["onPlay"] = (event) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    void event.target.playVideo();
    setShowPlayBtn(false);
  };

  const handlePlayButton = () => {
    if (!youtubePlayer) return;

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
    void youtubePlayer.playVideo();
    setShowPlayBtn(false);
  };

  return (
    <div className="px-4 gap-8 flex flex-col items-center">
      <h1 className="text-center text-[1.5rem] min-[350px]:text-[2.5rem] min-[430px]:text-5xl xs:text-5xl lg:text-8xl mt-20 lg:mt-40 flex flex-col items-center">
        <div className="max-[300px]:leading-[2rem] leading-[4rem] lg:leading-[6.4rem]">Urogynecology</div>
        <div className="w-fit flex items-center gap-4 lg:gap-14 max-[300px]:leading-[2rem] leading-[4rem] lg:leading-[6.4rem]">
          Patient
          <span className="block lg:hidden border-4 border-accent rounded-full w-[120px] lg:w-[200px] h-10"></span>
          <span className="hidden lg:block border-8 border-accent rounded-full w-[500px] h-20"></span>
        </div>
        <div className="w-fit flex items-center gap-4 lg:gap-8 relative">
          <span className="hidden lg:block border-8 bg-accent border-accent rounded-full w-[150px] h-20"></span>
          <span className="block lg:hidden border-8 bg-accent border-accent rounded-full w-[50px] h-10 absolute top-[100%]"></span>
          <span className="max-[300px]:leading-[2rem] leading-[4rem] lg:leading-[6.4rem]">Education App</span>
        </div>
      </h1>

      {/* handled very small screen size first (like the half screen of flip phones), then normal small phone size, then common phone size, then tablets and then others (latptop etc) */}
      <div className="aspect-video border-brand border-2 w-[250px] min-[350px]:w-[330px] min-[361px]:w-[350px] min-[500px]:w-[400px] sm:w-[600px] lg:w-[800px]  rounded-3xl mt-20 lg:mt-28 relative overflow-hidden">
        {/* eslint-disable-next-line @typescript-eslint/no-unsafe-assignment */}
        <YouTube
          className="w-full h-full"
          iframeClassName="w-full h-full"
          videoId="JkRXhe3KaPE"
          opts={options}
          onEnd={onEnd}
          onReady={onReady}
          onPlay={onPlay}
          onPause={onPause}
        />

        {showPlayBtn && (
          <div
            onClick={handlePlayButton}
            className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] cursor-pointer"
          >
            <div className="bg-white/50 rounded-full flex justify-center items-center animate-ping absolute top-0 w-10 h-10 lg:w-24 lg:h-24"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10 lg:w-24 lg:h-24 text-brand pl-1 lg:pl-2 flex justify-center items-center cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
              />
            </svg>
          </div>
        )}
      </div>

      {invitation.questionnaire === null && (
        <Alink to={routes.QUIZ}>
          <Button>Start the Questionnaire</Button>
        </Alink>
      )}

      {invitation.questionnaire !== null && (
        <Alink to={routes.PERSONALIZED_PLAYLIST}>
          <Button>View Personalized Playlist</Button>
        </Alink>
      )}
    </div>
  );
}

export default HomePage;
HomePage.loader = MainLoader;
