import { InvitationService } from "@/libs/invitation-service";
import { StatusCodes } from "http-status-codes";
import { LoaderFunction, json } from "react-router";

const RootLoader: LoaderFunction = async ({ request }) => {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const invitationCode = searchParams.get('code');

    if (!invitationCode) {
        throw json({
            message: "You need access to view this page"
        }, { status: StatusCodes.FORBIDDEN });
    }

    // Log the visit
    // we don't need the success or failed response
    await InvitationService.logVisit(invitationCode);

    return invitationCode
}

export default RootLoader;