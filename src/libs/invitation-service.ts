export class InvitationService {
    static async logVisit(invitationCode: string): Promise<Response> {
        return fetch(
            `${import.meta.env.VITE_API_URL}/questionnaire/log-visit?invitation_code=${invitationCode}`,
            {
                headers: {
                    "Content-Type": "application/json",
                },
            });
    }
}