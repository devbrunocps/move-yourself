import { DataProvider } from './context/DataContext'
import Contact from './pages/Contact'
import Hero from './pages/Hero'
import Pricing from './pages/Pricing'
import Services from './pages/Services'
import Testimonials from './pages/Testimonials'

function App() {
    return (
        <DataProvider>
            <div className="flex flex-col min-h-screen w-screen">
                <Hero />
                <Services />
                <Testimonials />
                <Pricing />
                <Contact />
            </div>
        </DataProvider>
    )
}

export default App
