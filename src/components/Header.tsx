import clsx from 'clsx'
import Text from './ui/Text'
import Link from './ui/Link'

const Header = (props: any) => {
    const { className } = props
    return (
        <div
            className={clsx(
                'flex justify-between py-12 px-[4.5rem]',
                className
            )}
        >
            <Text as="h1" className="text-title font-normal leading-none">
                <strong>A+</strong> Studio
            </Text>
            <ul className="flex gap-9">
                <Link href="#">Home</Link>
                <Link href="#">What we do</Link>
                <Link href="#">Service</Link>
                <Link href="#">Project</Link>
                <Link href="#">Blog</Link>
                <Link href="#" className="pr-0">
                    Contact
                </Link>
            </ul>
        </div>
    )
}

export default Header
