import { ActionFunction, json } from "react-router"

const QuizAction: ActionFunction = async ({ request }) => {
    const data = await request.json() as { responses: string, invitation_code: string }

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

export default QuizAction;