import Image from './ui/Image'
import Text from './ui/Text'
import clientMain from '../assets/Client-main.jpg'
import client1 from '../assets/client-1.jpg'
import client2 from '../assets/client-2.jpg'
import client3 from '../assets/client-3.jpg'
import client4 from '../assets/client-4.jpg'
import client5 from '../assets/client-5.jpg'
import client6 from '../assets/client-6.jpg'
import client7 from '../assets/client-7.jpg'
import client8 from '../assets/client-8.jpg'
import Ornament from './ui/Ornament'

const Testimonial = () => {
    return (
        <div className="flex flex-col gap-28 mb-36">
            <div className="flex flex-col items-center gap-4">
                <Text as="h2">What our happy client say</Text>
                <Text as="p" className="text-lg">
                    Several selected clients, who already believe in our
                    service.
                </Text>
            </div>
            <div className="flex gap-12 pl-[4.5rem]">
                <div className="flex gap-16 relative">
                    <Ornament className="absolute w-28 h-28 bg-white border-8 border-pink-600 rounded-full top-full -translate-y-[117%] -translate-x-[7%]" />
                    <Image
                        src={clientMain}
                        className="shadow-xl rounded-full rounded-tr-none min-w-[24rem] h-96"
                    />
                    <div className="flex flex-col gap-5 justify-center">
                        <Text as="h2">Matthew Paul</Text>
                        <Text as="p" className="mb-5">
                            Perfect, very good job! Thank you for the amazing
                            design and work. Really impressed with the high
                            quality and quick turnaround time. Highly recommend.
                        </Text>
                        <div className="flex gap-6 relative gap-4 justify-center mr-auto">
                            <Ornament className="w-4 h-4 bg-blue-700 rounded-full" />
                            <Ornament className="w-4 h-4 bg-sky-100 rounded-full" />
                            <Ornament className="w-4 h-4 bg-sky-100 rounded-full" />
                            <Ornament className="w-4 h-4 bg-sky-100 rounded-full" />
                            <Ornament className="w-4 h-4 bg-sky-100 rounded-full" />
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-12 grid-rows-12 min-w-fit relative">
                    <Ornament className="w-44 h-44 bg-orange-100 rounded-full absolute translate-x-[15%] translate-y-[70%]" />
                    <Image
                        src={client1}
                        className="h-24 w-24 rounded-full object-cover col-start-1 col-span-4 row-start-3 row-span-4 self-center"
                    />
                    <Image
                        src={client2}
                        className="h-16 w-16 rounded-full object-cover col-start-5 col-span-3 row-start-1 row-span-3 self-center justify-self-center mb-2"
                    />
                    <Image
                        src={client3}
                        className="h-14 w-14 rounded-full object-cover col-start-9 col-span-2 row-start-3 row-span-3 self-center"
                    />
                    <Image
                        src={client4}
                        className="h-14 w-14 rounded-full object-cover col-start-10 col-span-3 row-start-6 row-span-3 self-center justify-self-center"
                    />
                    <Image
                        src={client5}
                        className="h-16 w-16 rounded-full object-cover col-start-8 col-span-3 row-start-9 row-span-2 justify-self-center"
                    />
                    <Image
                        src={client6}
                        className="h-24 w-24 rounded-full object-cover col-start-4 col-span-4 row-start-9 row-span-4 self-end"
                    />
                    <Image
                        src={client7}
                        className="h-16 w-16 rounded-full object-cover row-start-8 row-span-3 self-center mb-3"
                    />
                    <Image
                        src={client8}
                        className="h-28 w-28 rounded-full object-cover col-start-5 col-end-9 row-start-5 row-span-4 m-auto"
                    />
                </div>
            </div>
        </div>
    )
}

export default Testimonial
