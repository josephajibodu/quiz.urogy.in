import { StatusCodes } from "http-status-codes";
import { LoaderFunction, json } from "react-router";

const MainLoader: LoaderFunction = async ({ request }) => {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const invitationCode = searchParams.get('invitation_code');

    if (!invitationCode) {
        throw json({
            message: "You need access to view this page"
        }, { status: StatusCodes.FORBIDDEN });
    }

    const res = await fetch(
        `http://localhost:8000/invites/${invitationCode}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    const resData = await res.json() as { message: string, data?: unknown, response_code?: string, error?: unknown };

    if (!res.ok) {
        throw json(resData, { status: res.status });
    }

    // check if the questionnaire has already been taken
    // if yes, redirect to the playlist page

    return resData.data;
}

export default MainLoader;