import { Card, CardContent } from '@/components/ui/card'
import { DataContext } from '@/context/DataContext'
import { Star } from 'lucide-react'
import React, { useContext } from 'react'

const Testimonials = () => {
    const {testimonials} = useContext(DataContext)

    return (
        <section className="py-20 px-12 font-mont bg-primary-400">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-second-100 mb-12">
                    O que os alunos da <span className='text-[#7bd13c]'>Move Yourself</span> dizem...
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index} className="bg-primary-200  h-60 border-[#7bd13c]">
                            <CardContent className="p-6 flex flex-col justify-between h-full">
                                <div className="flex mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                                    ))}
                                </div>
                                <p className="text-second-200 mb-4">"{testimonial.text}"</p>
                                <div>
                                    <p className="font-bold text-second-300">{testimonial.name}</p>
                                    <p className="text-sm text-second-500">{testimonial.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Testimonials