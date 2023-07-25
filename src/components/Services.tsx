import Card from './ui/Card'
import Text from './ui/Text'
import Image from './ui/Image'
import dots from '../assets/Dot.svg'

import boxSearch from '../assets/box-search.svg'
import wallet from '../assets/wallet.svg'
import code from '../assets/code.svg'
import chart from '../assets/chart.svg'
import Ornament from './ui/Ornament'

const Services = () => {
    return (
        <div className="flex items-center gap-24 mr-28 mb-36">
            <div className="flex flex-col gap-8 pl-[4.5rem] relative">
                <Ornament className="w-44 h-44 rounded-tl-[100px] bg-orange-100 absolute translate-x-[20%] -translate-y-[35%]" />
                <Text as="h2" className="leading-tight">
                    How can we help your Business ?
                </Text>
                <Text as="p">
                    We build readymade websites, mobile applications, and
                    elaborate online business services.
                </Text>
                <div className="absolute flex justify-start gap-1 -ml-4 -z-20 top-full translate-x-[4%] translate-y-[88%]">
                    <Image src={dots} className="w-[200px] h-[150px]" />
                    <Image src={dots} className="w-[200px] h-[150px]" />
                </div>
            </div>
            <div className="grid grid-cols-9 grid-rows-9 relative min-w-[720px]">
                <Ornament className="w-[1048px] h-[620px] bg-blue-50 rounded-tl-[150px] absolute -translate-x-[21%] translate-y-1/4" />
                <Ornament className="absolute w-28 h-28 bg-white border-8 border-pink-600 rounded-full -z-30 -translate-x-full -translate-y-full top-[94%] left-[98%]" />
                <Card
                    heading="Business Idea Planning"
                    text="We present you a proposal and discuss niffty-gritty like"
                    image={boxSearch}
                    ornamentBG="bg-blue-100"
                    className="row-start-2 row-span-5 col-start-1 col-span-5 pt-10"
                />
                <Card
                    heading="Development Website and App"
                    text="Communication protocols apart from engagement models"
                    image={code}
                    ornamentBG="bg-pink-100"
                    className="pt-10 row-start-6 row-span-4 col-start-1 col-span-5 self-center"
                />
                <Card
                    heading="Financial Planning System"
                    text="Protocols apart from aengage models, pricing billing"
                    image={wallet}
                    ornamentBG="bg-yellow-100"
                    className="row-start-1 row-span-5 col-start-5 col-span-5 pt-10 justify-self-start ml-7 mt-4"
                />
                <Card
                    heading="Market Analysis Project"
                    text="Protocols apart from aengage models, pricing billing"
                    image={chart}
                    ornamentBG="bg-green-100"
                    className="pt-10 row-start-5 row-span-4 col-start-5 col-span-5 self-center justify-self-start ml-7 mt-8"
                />
            </div>
        </div>
    )
}

export default Services
