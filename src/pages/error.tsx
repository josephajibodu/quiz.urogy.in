import Alink from "@/components/a-link";
import Button from "@/components/button";
import NotFoundIcon from "@/components/not-found-icon";
import routes from "@/utils/routes";
import { getReasonPhrase } from "http-status-codes";
import { ReactElement } from "react";
import { ErrorResponse, isRouteErrorResponse, useRouteError } from "react-router";

function Error() {
    const error = useRouteError() as ErrorResponse;
    const isResponseError = isRouteErrorResponse(error)

    return (
        <ErrorLayout>
            <div className="w-full h-screen flex flex-col lg:flex-row items-center justify-center space-y-16 lg:space-y-0 space-x-8 2xl:space-x-0 px-4 lg:px-12">
                <div className="w-full lg:w-1/2 flex flex-col items-center justify-center lg:px-2 xl:px-0 text-center">
                {isResponseError && 
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
                </>}

                {!isResponseError && 
                <>
                    <p className="text-7xl md:text-8xl lg:text-9xl font-bold tracking-wider text-brand/80">
                        500
                    </p>
                    <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-brand/20 mt-2">
                        Unexpected Error
                    </p>
                    <p className="text-lg md:text-xl lg:text-2xl text-brand my-12">
                        {error.data?.message ?? error.message}
                    </p>
                </>}

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
        </ErrorLayout>
    );
}

function ErrorLayout({ children }: { children: ReactElement }) {
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
        <main className="flex flex-col items-center pb-16 h-full">
            <header className="h-24 w-full border-b-brand border flex justify-center items-center">
            <a href={routes.LANDING_PAGE}>
                <div className="font-bold text-xl text-brand">urogy.in</div>
            </a>
            </header>

            <div className="max-w-7xl w-full h-full flex flex-col items-center">
            {children}
            </div>
        </main>
        </div>
    );
}

export default Error;
