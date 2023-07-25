import clsx from 'clsx'
import { ReactNode } from 'react'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    children: ReactNode
}

const Link = (props: LinkProps) => {
    const { children, className, ...rest } = props
    return (
        <a
            className={clsx(
                'text-base tracking-wide capitalize px-3 font-bold',
                // hover
                'hover:underline',
                className
            )}
            {...rest}
        >
            {children}
        </a>
    )
}

export default Link
