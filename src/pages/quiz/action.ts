import routes from "@/utils/routes";
import { ActionFunction, json, redirect } from "react-router"

function promiseTimeout(milliseconds: number) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Timeout finished!');
        }, milliseconds);
    });
}


const QuizAction: ActionFunction = async ({ request }) => {
    const data = await request.json() as { responses: string, invitation_code: string }

    await promiseTimeout(10_000);

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

    // redirect to the playlist generation page instead
    // with the invitation code
    return redirect(routes.PERSONALIZED_PLAYLIST)
}

export default QuizAction;