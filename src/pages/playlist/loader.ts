import { LoaderFunction, json } from "react-router";

const PlaylistLoader: LoaderFunction = async ({ request }) => {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const invitationCode = searchParams.get('invitation_code');

    const inviteRes = await fetch(
        `http://localhost:8000/invites/${invitationCode}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    const inviteData = await inviteRes.json() as { message: string, data?: unknown, response_code?: string, error?: unknown };

    if (!inviteRes.ok) {
        throw json(inviteData, { status: inviteRes.status });
    }

    const playlistRes = await fetch(
        `http://localhost:8000/questionnaire/playlist?invitation_code=${invitationCode}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    const playlistData = await playlistRes.json() as { message: string, data?: unknown, response_code?: string, error?: unknown };

    if (!playlistRes.ok) {
        throw json(playlistData, { status: playlistRes.status });
    }

    return {
        invitation: inviteData.data,
        playlist: playlistData.data
    };
}

export default PlaylistLoader;