import { LoaderFunction, json } from "react-router";

const PlaylistLoader: LoaderFunction = async ({ request }) => {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const invitationCode = searchParams.get('invitation_code');

    const res = await fetch(
        `http://localhost:8000/questionnaire/playlist?invitation_code=${invitationCode}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    const resData = await res.json() as { message: string };

    if (!res.ok) {
        throw json(resData, { status: res.status });
    }

    return resData;
}

export default PlaylistLoader;