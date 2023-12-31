import { PlaylistData } from "@/types";
import classNames from "classnames";
import { useState } from "react";
import YouTube, { YouTubeEvent, YouTubePlayer, YouTubeProps } from "react-youtube";
import PlaylistButton from "./playlist-button";

function YoutubePlaylist({ playlist }: { playlist: PlaylistData }) {
  const options: YouTubeProps["opts"] = {
    playerVars: {
      autoplay: 1,
      controls: 1,
      rel: 0,
      listType: 'playlist',
      list: `PLLmrRTflOA_ty8pbIHx8yZWKObWOni9NK`,
      // list: `PL${playlist.id}`,
    },
  };

  // youtube playlist player
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [youtubePlayer, setYoutubePlayer] = useState<YouTubePlayer>();

  const onReady = (event: YouTubeEvent) => {
    setYoutubePlayer(event.target);
  };

  const onPlay = (event: YouTubeEvent) => {
    const curIndex = event.target.getPlaylistIndex() as unknown as number

    if (curIndex != currentVideoIndex) {
      setCurrentVideoIndex(() => curIndex)
    }
  };

  const handleVideoSelection = (videoId: string) => {
    setCurrentVideoIndex(Number(videoId));
  };

  const handleNextVideo = () => {
    const curIndex = youtubePlayer?.getPlaylistIndex() as unknown as number
    
    if (curIndex < playlist.items.length - 1) {
      setCurrentVideoIndex(curIndex + 1)
      console.log("index now: ", curIndex + 1)
      void youtubePlayer?.nextVideo()
    }
  };

  const handlePrevVideo = () => {
    const curIndex = youtubePlayer?.getPlaylistIndex() as unknown as number
    
    if (curIndex > 0) {
      setCurrentVideoIndex(curIndex - 1)
      console.log("index now: ", curIndex - 1)
      void youtubePlayer?.previousVideo()
    }
  }

  return (
    <div className="flex flex-col lg:flex-row w-full gap-0">
      <div className="w-full lg:w-9/12">
        <div className="aspect-video lg:h-[500px] border-brand border-2 rounded-xl overflow-hidden">
          <YouTube
            className="w-full h-full"
            iframeClassName="w-full h-full"
            opts={options}
            onEnd={() => console.log("e don end")}
            onError={() => console.log("e don get error")}
            onPlay={onPlay}
            onReady={onReady}
          />
        </div>
      </div>

      <div className="w-full lg:w-3/12 flex flex-col h-[500px] relative">
        <div className="overflow-y-scroll pb-12 pt-4">
          {playlist.items.map((item, i) => (
            <div
              key={i.toString()}
              className={classNames(
                `flex gap-4 cursor-pointer py-3 px-3 rounded-3xl hover:bg-white/50`,
                {
                  "bg-white": i == currentVideoIndex,
                }
              )}
              onClick={() => handleVideoSelection(item.contentDetails.videoId)}
            >
              <div className="min-w-[120px] w-[120px] h-20 border-brand border-2 rounded-xl overflow-hidden">
                <img
                  src={`${item.snippet.thumbnails.standard.url}`}
                  className="w-full"
                />
              </div>
              <div className="flex flex-col flex-grow">
                <p className="lg:font-semibold text-base lg:text-xs overflow-ellipsis">
                  {item.snippet.title}
                </p>
                {/* <span className="text-xs">3.15</span> */}
              </div>
            </div>
          ))}
        </div>

        {/* Next/Prev button to control the videos easily */}
        <div
          className="absolute bottom-0 bg-brand w-full h-12 flex items-center px-4 gap-3"
        >
          <PlaylistButton onClick={handlePrevVideo} disabled={currentVideoIndex <= 0}>Prev</PlaylistButton>
          <PlaylistButton onClick={handleNextVideo} disabled={currentVideoIndex >= playlist.items.length - 1}>Next</PlaylistButton>
            <div className="flex-grow"></div>
          <PlaylistButton className="rounded-none border-brand border-[2px] ">
            <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25"
              />
            </svg>
            Sync
            </div>
          </PlaylistButton>
        </div>
      </div>
    </div>
  );
}

export default YoutubePlaylist;
