import clsx from 'clsx'
import { ReactNode } from 'react'

const styleMap = {
    h1: 'text-4xl font-bold',
    h2: 'text-heading leading-none font-bold',
    h3: 'text-xl font-bold leading-none',
    h4: '',
    h5: '',
    h6: '',
    p: 'text-base',
}

interface TextProps extends React.HTMLAttributes<HTMLHeadingElement> {
    children: ReactNode
    as: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}

const Text = (props: TextProps) => {
    const { as, children, className, ...rest } = props
    const TextElement = as
    return (
        <TextElement className={clsx(styleMap[as], className)} {...rest}>
            {children}
        </TextElement>
    )
}

export default Text
