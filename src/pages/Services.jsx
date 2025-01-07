import { Card, CardContent } from '@/components/ui/card'
import { DataContext } from '@/context/DataContext'
import React, { useContext } from 'react'

const Services = () => {
    const { services } = useContext(DataContext)

    return (
        <section className="py-20 px-12 font-mont bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Por que escolher a <span className="text-[#7bd13c]">Move Yourself</span>?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="border-2 hover:border-[#7bd13c] transition-all duration-300">
                            <CardContent className="p-6 text-center">
                                {service.icon}
                                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                                <p className="text-gray-600">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services