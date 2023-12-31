import classNames from "classnames"
import { ButtonHTMLAttributes } from "react"

function PlaylistButton({ disabled, children, className, ...props} : ButtonHTMLAttributes<HTMLButtonElement>) {
    return <button disabled={disabled} {...props} className={classNames(
        className,
        'bg-white px-4 rounded-xl h-6 text-brand',
        {
            'bg-white/40 cursor-not-allowed': disabled,
            'active:bg-accent/60 active:text-white' : !disabled
        }
    )}>
    {children}
  </button>
}

export default PlaylistButton