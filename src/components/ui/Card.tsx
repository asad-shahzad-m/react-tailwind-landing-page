import Image from './Image'
import Ornament from './Ornament'
import Text from './Text'
import clsx from 'clsx'

interface CardProps {
    heading: string
    text: string
    ornamentBG: string
    image: string
    className?: string
}

const Card = (props: CardProps) => {
    const { heading, text, ornamentBG, image, className } = props
    return (
        <div
            className={clsx(
                'flex flex-col gap-7 p-8 w-[308px] h-[380px] bg-white shadow-card border-[1px] border-zinc-100 rounded-[40px]',
                className
            )}
        >
            <div className="flex items-center justify-center relative mb-1">
                <Ornament
                    className={clsx(
                        'w-[120px] h-[120px] rounded-[20px] relative z-10',
                        ornamentBG
                    )}
                />
                <Image
                    src={image}
                    className="w-[74px] h-[74px] absolute z-20"
                />
            </div>
            <Text
                as="h4"
                className="text-2xl leading-none text-center font-bold"
            >
                {heading}
            </Text>
            <Text as="p" className="text-neutral-500 text-center">
                {text}
            </Text>
        </div>
    )
}

export default Card
