import './App.css'
import Text from './components/ui/Text'
import Header from './components/Header'
import Hero from './components/Hero'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import Testimonial from './components/Testimonial'
import Services from './components/Services'
import Clients from './components/Clients'
import Showcase from './components/Showcase'

function App() {
    return (
        <>
            <Header />
            <Hero />
            <Clients />
            <Services />
            <Showcase />
            <Testimonial />
            <Newsletter />
            <Footer />
            <div className="border-t-[1px] pt-4 mx-[7.5rem] flex justify-center text-sm leading-6 text-neutral-200 mb-6">
                <Text as="p">Copyright © 2022 Avi Yansah</Text>
            </div>
        </>
    )
}

export default App
