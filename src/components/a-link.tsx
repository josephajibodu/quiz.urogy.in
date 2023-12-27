import { Link, LinkProps, useSearchParams } from "react-router-dom"

type AlinkProps = LinkProps

function Alink({ to, children, ...props } : AlinkProps) {
    const [searchParams] = useSearchParams()
    const toObject = typeof(to) === 'string' ? { pathname: to } : to;

    return <Link to={{ ...toObject, search: searchParams.toString()  }} {...props}>{children}</Link>
}

export default Alink