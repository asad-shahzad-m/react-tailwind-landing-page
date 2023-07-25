import Text from './ui/Text'
import Image from './ui/Image'
import Ornament from './ui/Ornament'
import showcase from '../assets/showcase.jpg'
import playBtn from '../assets/play-button.svg'

const Showcase = () => {
    return (
        <div className="flex flex-row-reverse items-center gap-[120px] px-[4.5rem] mb-44">
            <div className="relative">
                <Text as="h2">Great Digital Product Agency since 2016 </Text>
                <Text as="p" className="mt-10">
                    Our Business Plan is a written document describing a
                    company's core business activites, Objectives, and how it
                    plans to achieve its goals. Our goal is to provide our
                    client high quality Product with modern idea accordingly
                    their budgets and according thir reuirements.
                </Text>
                <Ornament className="absolute rounded-br-[100px] bg-indigo-100 w-44 h-44 -translate-x-[15%] -translate-y-[20%]" />
            </div>
            <div className="relative">
                <Ornament className="absolute rounded-full bg-orange-100 top-full left-full -translate-x-[70%] -translate-y-1/2" />
                <Image
                    src={showcase}
                    className="w-[550px] h-[372px] rounded-[32px] object-cover shadow-showcase"
                />
                <Image
                    src={playBtn}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                />
            </div>
        </div>
    )
}

export default Showcase
