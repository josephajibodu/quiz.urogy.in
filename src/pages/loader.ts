import { StatusCodes } from "http-status-codes";
import { LoaderFunction, json } from "react-router";

const RootLoader: LoaderFunction = ({ request }) => {
    const searchParams = new URLSearchParams(request.url.split('?')[1]);
    const invitationCode = searchParams.get('invitation_code');

    if (!invitationCode) {
        throw json({
            message: "You need access to view this page"
        }, { status: StatusCodes.FORBIDDEN });
    }

    return invitationCode
}

export default RootLoader;