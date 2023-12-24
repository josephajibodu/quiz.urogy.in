import routes from "@/utils/routes";
import { ActionFunction, json, redirect } from "react-router"

export interface ActionData { action: 'submit-quiz' | 'generate-playlist', responses?: number[], invitation_code: string }

function promiseTimeout(milliseconds: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Timeout finished!');
        }, milliseconds);
    });
}


const QuizAction: ActionFunction = async ({ request }) => {
    const data = await request.json() as ActionData

    await promiseTimeout(10_000);

    if (data.action == 'submit-quiz') {
        return await submitQuiz(data)
    }

    return await generatePlaylist(data)
}

const submitQuiz = async (data: Omit<ActionData, 'action'>) => {
    const res = await fetch(
        'http://localhost:8000/questionnaire',
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
    const res = await fetch(
        'http://localhost:8000/questionnaire/playlist',
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

    // redirect to the playlist generation page instead
    // with the invitation code
    return redirect(`${routes.PERSONALIZED_PLAYLIST}?invitation_code=${data.invitation_code}`)
}

export default QuizAction;