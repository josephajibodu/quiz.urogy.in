import PlaylistAction from "@/actions/playlist-action";
import { ActionFunction } from "react-router"

export interface ActionData { action: 'submit-quiz' | 'generate-playlist', responses?: number[], invitation_code: string }


const PlaylistPageAction: ActionFunction = async ({ request }) => {
    const data = await request.json() as ActionData

    return await generatePlaylist(data)
}

const generatePlaylist = async (data: Pick<ActionData, 'invitation_code'>) => {
    const playlist = await PlaylistAction.generate(data)

    return playlist;
}

export default PlaylistPageAction;