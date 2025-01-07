import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

const Hero = () => {
    return (
        <section className="font-mont relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
            <img
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48"
                alt="Academia Move Yourself"
                className="opacity-50 object-cover w-full h-full absolute"
            />
            <div className="relative z-10 text-white text-center px-4 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tighter">
                    Transforme seu corpo.
                    <br />
                    <span className="text-[#7bd13c]">Transforme sua vida.</span>
                </h1>
                <p className="text-xl md:text-2xl mb-10 text-gray-300 max-w-2xl mx-auto">
                    Comece sua jornada fitness com a Move Yourself e descubra seu verdadeiro potencial.
                </p>
                <Button
                    size="lg"
                    className="uppercase bg-[#7bd13c] hover:bg-[#7bd13c]/90 text-black font-bold text-md px-8 py-6 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105"
                >
                    Agende sua Aula Grátis
                    <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
            </div>
            <div className="absolute w-full h-full bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent"></div>
        </section>
    )
}

export default Hero