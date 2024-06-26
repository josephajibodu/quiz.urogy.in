import { LoaderFunction, json } from "react-router";

const PlaylistLoader: LoaderFunction = async ({ request }) => {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const invitationCode = searchParams.get('code');

    const inviteRes = await fetch(
        `${import.meta.env.VITE_API_URL}/invites/${invitationCode}`,
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
        `${import.meta.env.VITE_API_URL}/questionnaire/playlist?invitation_code=${invitationCode}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    const playlistData = await playlistRes.json() as { message: string, data?: unknown, response_code?: string, error?: unknown };

    if (!playlistRes.ok && playlistData.response_code != "PLAYLIST_NOT_GENERATED") {
        throw json(playlistData, { status: playlistRes.status });
    }

    return {
        invitation: inviteData.data,
        playlist: playlistRes.ok ? playlistData.data : null
    };
}

export default PlaylistLoader;