import { json } from "react-router";

export interface ActionData { action: 'submit-quiz' | 'generate-playlist', responses?: number[], invitation_code: string }

const generatePlaylist = async (data: Pick<ActionData, 'invitation_code'>) => {
    const res = await fetch(
        `${import.meta.env.VITE_API_URL}/questionnaire/playlist`,
        {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    const resData = await res.json() as { message: string };

    if (!res.ok) {
        throw json(resData, { status: res.status });
    }

    return resData
}

const PlaylistAction = {
    generate: generatePlaylist
}

export default PlaylistAction