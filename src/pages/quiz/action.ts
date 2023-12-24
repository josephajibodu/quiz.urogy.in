import { ActionFunction } from "react-router"

const QuizAction: ActionFunction = async ({ request }) => {
    const data = await request.json() as { responses: string, invitation_code: string }

    return await fetch(
        'http://localhost:8000/questionnaire',
        {
            method: 'post',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        }
    )
}

export default QuizAction;