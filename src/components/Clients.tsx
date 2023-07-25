import Text from './ui/Text'
import Image from './ui/Image'
import googleLogo from '../assets/Google Logo.svg'
import amazonLogo from '../assets/Amazon Logo.svg'
import airbnbLogo from '../assets/Airbnb Logo.svg'
import uberEatsLogo from '../assets/Uber Eats Logo.svg'

const Clients = () => {
    return (
        <div className="flex justify-between mb-16 px-[4.5rem] pt-20">
            <div className="flex flex-col justify-between gap-4 basis-[30%]">
                <Text as="h2">Our Client</Text>
                <Text as="p" className="text-lg">
                    Several selected clients, who already believe in our
                    service.
                </Text>
            </div>
            <div className="flex gap-[3.75rem] items-center justify-end mt-6 basis-3/4">
                <Image src={googleLogo} className="" />
                <Image src={airbnbLogo} className="" />
                <Image src={uberEatsLogo} className="" />
                <Image src={amazonLogo} className="mt-6" />
            </div>
        </div>
    )
}

export default Clients
