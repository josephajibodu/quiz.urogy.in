import { json } from "react-router";

export interface ActionData { action: 'submit-quiz' | 'generate-playlist', responses?: number[], invitation_code: string }

const getInvitation = async (invitationCode: string) => {
    const res = await fetch(
        `http://localhost:8000/invites/${invitationCode}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    const resData = await res.json() as { message: string, data?: unknown, response_code?: string, error?: unknown };

    if (!res.ok) {
        throw json(resData, { status: res.status });
    }

    return resData.data;
}

const InvitationAction = {
    get: getInvitation
}

export default InvitationAction