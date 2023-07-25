import Text from './ui/Text'
import Image from './ui/Image'
import facebook from '../assets/Facebook.svg'
import twitter from '../assets/Twitter.svg'
import linkedin from '../assets/Linkedin.svg'

const Footer = () => {
    return (
        <div className="flex mx-[7.5rem] justify-between gap-48 border-t-[1px] pt-16 mb-12">
            <div className="flex flex-col flex-1">
                <Text
                    as="h1"
                    className="text-[24px] font-normal leading-none mb-7"
                >
                    <strong>A+</strong> Studio
                </Text>
                <Text as="p" className="mb-10">
                    Leading digital agency with solid design and development
                    expertise. We build readymade websites, mobile applications,
                    and elaborate online business services.
                </Text>
                <div className="flex gap-4">
                    <a href="#">
                        <Image src={facebook} className="w-9 h-9" />
                    </a>
                    <a href="#">
                        <Image src={twitter} className="w-9 h-9" />
                    </a>
                    <a href="#">
                        <Image src={linkedin} className="w-9 h-9" />
                    </a>
                </div>
            </div>
            <div className="flex gap-28 flex-1">
                <div className="flex flex-col gap-7">
                    <Text as="h3" className="w-max">
                        What We Do
                    </Text>
                    <div className="flex flex-col">
                        <Text as="p" className="text-sm leading-7">
                            Web Design
                        </Text>
                        <Text as="p" className="text-sm leading-7">
                            App Design
                        </Text>
                        <Text as="p" className="text-sm leading-7">
                            Social Media Manage
                        </Text>
                        <Text as="p" className="text-sm leading-7">
                            Market Analysis Project
                        </Text>
                    </div>
                </div>
                <div className="flex flex-col gap-7">
                    <Text as="h3">Company</Text>
                    <div>
                        <Text as="p" className="text-sm leading-7">
                            About Us
                        </Text>
                        <Text as="p" className="text-sm leading-7">
                            Career
                        </Text>
                        <Text as="p" className="text-sm leading-7">
                            Become Investor
                        </Text>
                    </div>
                </div>
                <div className="flex flex-col gap-7">
                    <Text as="h3">Support</Text>
                    <div>
                        <Text as="p" className="text-sm leading-7">
                            FAQ
                        </Text>
                        <Text as="p" className="text-sm leading-7">
                            Policy
                        </Text>
                        <Text as="p" className="text-sm leading-7">
                            Business
                        </Text>
                    </div>
                </div>
                <div className="flex flex-col gap-7">
                    <Text as="h3">Contact</Text>
                    <div>
                        <Text as="p" className="text-sm leading-7">
                            WhatsApp
                        </Text>
                        <Text as="p" className="text-sm leading-7">
                            Support 24
                        </Text>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
