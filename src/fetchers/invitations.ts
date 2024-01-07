import { InvitationData } from "@/types";
import { json } from "react-router";

export interface ActionData { action: 'submit-quiz' | 'generate-playlist', responses?: number[], invitation_code: string }

const getInvitation = async (invitationCode: string): Promise<InvitationData> => {
    const res = await fetch(
        `${import.meta.env.VITE_API_URL}/invites/${invitationCode}`,
        {
            headers: {
                "Content-Type": "application/json",
            },
        }
    )

    const resData = await res.json() as { message: string, data: InvitationData, response_code?: string, error?: unknown };

    if (!res.ok) {
        throw json(resData, { status: res.status });
    }

    return resData.data;
}

const InvitationFetcher = {
    getInvitation
}

export default InvitationFetcher