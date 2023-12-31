import InvitationFetcher from "@/fetchers/invitations";
import { StatusCodes } from "http-status-codes";
import { LoaderFunction, json } from "react-router";

const QuizLoader: LoaderFunction = async ({ request }) => {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const invitationCode = searchParams.get('invitation_code');

    if (!invitationCode) {
        throw json({
            message: "You need access to view this page"
        }, { status: StatusCodes.FORBIDDEN });
    }

    const invitation = await InvitationFetcher.getInvitation(invitationCode)

    return invitation
}

export default QuizLoader;