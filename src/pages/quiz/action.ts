import PlaylistAction from "@/actions/playlist-action";
import routes from "@/utils/routes";
import { ActionFunction, json, redirect } from "react-router"

export interface ActionData { action: 'submit-quiz' | 'generate-playlist', responses?: number[], invitation_code: string }


const QuizAction: ActionFunction = async ({ request }) => {
    const data = await request.json() as ActionData

    if (data.action == 'submit-quiz') {
        return await submitQuiz(data)
    }

    return await generatePlaylist(data)
}

const submitQuiz = async (data: Omit<ActionData, 'action'>) => {
    const res = await fetch(
        `${import.meta.env.VITE_API_URL}/questionnaire`,
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

const generatePlaylist = async (data: Pick<ActionData, 'invitation_code'>) => {
    await PlaylistAction.generate(data) as { message: string };

    return redirect(`${routes.PERSONALIZED_PLAYLIST}?invitation_code=${data.invitation_code}`)
}

export default QuizAction;