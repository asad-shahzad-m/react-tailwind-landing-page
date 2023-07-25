import Text from './ui/Text'
import Image from './ui/Image'
import Button from './ui/Button'
import Ornament from './ui/Ornament'
import hero from '..//assets/hero.png'
import dots from '../assets/Dot.svg'

const Hero = () => {
    return (
        <div className="flex items-center mr-0 gap-24 pl-[4.5rem] mb-12">
            <div>
                <Text as="h2">A Digital Product Agency</Text>
                <Text as="p" className="mt-10">
                    Leading digital agency with solid design and development
                    expertise. We build readymade websites, mobile applications,
                    and elaborate online business services.
                </Text>
                <Button className="rounded-full my-8 text-xl">
                    Contact Now
                </Button>
                <div className="absolute flex justify-start gap-1 translate-x-[-10%] -translate-y-1/2 mt-2 -ml-4 -z-10">
                    <Image src={dots} className="w-[200px] h-[150px]" />
                    <Image src={dots} className="w-[200px] h-[150px]" />
                </div>
            </div>
            <div className="relative">
                <Ornament className="absolute rounded-full bg-blue-200 -translate-x-1/2" />
                <Image
                    src={hero}
                    className="w-[754px] h-[512px] rounded-bl-[200px] object-cover"
                />
                <Ornament className="absolute rounded-br-[100px] bg-orange-100 w-44 h-44 top-full left-1/2 translate-x-1/2 -translate-y-1/2" />
            </div>
        </div>
    )
}

export default Hero
