import PlaylistAction from "@/actions/playlist-action";
import { ActionFunction } from "react-router"

export interface ActionData { action: 'submit-quiz' | 'generate-playlist', responses?: number[], invitation_code: string }

function promiseTimeout(milliseconds: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Timeout finished!');
        }, milliseconds);
    });
}


const PlaylistPageAction: ActionFunction = async ({ request }) => {
    const data = await request.json() as ActionData

    await promiseTimeout(10_000);

    return await generatePlaylist(data)
}

const generatePlaylist = async (data: Pick<ActionData, 'invitation_code'>) => {
    const playlist = await PlaylistAction.generate(data)

    return playlist;
}

export default PlaylistPageAction;