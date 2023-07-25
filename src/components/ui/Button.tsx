import clsx from 'clsx'
import { ReactNode } from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

const Button = (props: ButtonProps) => {
    const { children, className, ...rest } = props
    console.log(className)

    return (
        <>
            <button
                className={clsx(
                    // base
                    'px-10 py-5 bg-blue-700 text-white transition ease-in duration-100 outline-none',
                    // hover
                    'hover:bg-blue-800 hover:scale-105 hover:shadow-md',
                    // disabled
                    'disabled:cursor-not-allowed disabled:hover:scale-100 disabled:hover:shadow-none disabled:opacity-75 disabled:hover:bg-blue-700',
                    // focused
                    'focus-visible:ring-offset-2 focus-visible:ring-2',
                    //active
                    'active:scale-100',
                    className
                )}
                {...rest}
            >
                {children}
            </button>
        </>
    )
}

export default Button
