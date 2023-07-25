import Button from './ui/Button'
import Text from './ui/Text'
import Image from './ui/Image'
import Ornament from './ui/Ornament'
import dots from '../assets/Dot-Blue.svg'
import rectangle from '../assets/Rectangle.svg'

const Newsletter = () => {
    return (
        <div className="flex mx-[7.5rem] bg-blue-50 rounded-[75px] h-72 items-center relative mb-36">
            <Image
                src={dots}
                className="absolute top-0 right-0 translate-x-[21%] -translate-y-[37%]"
            />
            <Ornament className="absolute rounded-bl-[100px] bg-orange-100 w-44 h-44 top-full left-0 -translate-x-[20%] -translate-y-[80%]" />
            <div className="flex flex-col gap-4 flex-1 pl-24">
                <Text as="h2">Subscribe Newsletter</Text>
                <Text as="p" className="text-lg">
                    I will update good news and promotion service not spam
                </Text>
            </div>
            <div className="flex justify-end items-center flex-1 h-full relative">
                <Image src={rectangle} className="absolute h-full" />
                <input
                    type="email"
                    placeholder="Enter your email address.."
                    className="w-[480px] min-h-[80px] shadow-xl rounded-[60px] p-4 pl-8 z-10 mr-24 outline-none focus-visible:ring-2"
                />
                <Button className="rounded-full absolute m-2 z-10 mr-[6.5rem]">
                    Contact Now
                </Button>
            </div>
        </div>
    )
}

export default Newsletter
