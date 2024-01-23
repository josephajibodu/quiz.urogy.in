import Alink from "@/components/a-link";
import Button from "@/components/button";
import NotFoundIcon from "@/components/not-found-icon";
import routes from "@/utils/routes";
import { getReasonPhrase } from "http-status-codes";
import {
  ErrorResponse,
  isRouteErrorResponse,
  useRouteError,
} from "react-router";

function PlaylistError() {
  const error = useRouteError() as ErrorResponse;
  const isResponseError = isRouteErrorResponse(error);

  if (!isResponseError) {
    throw error;
  }

  return (
    <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0 px-4 lg:px-12">
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
        {isResponseError && (
          <>
            <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-brand/80">
              {error.status}
            </p>
            <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-brand/20 mt-2">
              {getReasonPhrase(error.status)}
            </p>
            <p className="text-lg md:text-xl lg:text-2xl text-brand my-12">
              {error.data.message}
            </p>
          </>
        )}

        {/* <Button onClick={handlePlaylistGeneration} className="flex justify-center items-center gap-2" variant="solid">
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
              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
          Generate Playlist
        </Button> */}


        <Alink to={routes.LANDING_PAGE} className="mt-16">
          <Button className="flex justify-center items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span>Return Home</span>
          </Button>
        </Alink>
      </div>
      <div className="w-1/2 lg:h-full flex lg:items-end justify-center p-4">
        <NotFoundIcon />
      </div>
    </div>
  );
}

export default PlaylistError;
