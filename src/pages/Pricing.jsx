import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { DataContext } from '@/context/DataContext'
import { ChevronRight } from 'lucide-react'
import React, { useContext } from 'react'

const Pricing = () => {
    const {plans} = useContext(DataContext)

    return (
        <section className="py-20 px-12 font-mont bg-white">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">
                    Planos que cabem no seu bolso
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {plans.map((plan, index) => (
                        <Card
                            key={index}
                            className={`${plan.highlight
                                    ? 'border-[#7bd13c] shadow-lg scale-105'
                                    : 'border-gray-200'
                                } transition-all duration-300`}
                        >
                            <CardContent className="p-6">
                                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                <div className="mb-6">
                                    <span className="text-4xl font-bold">{plan.price}</span>
                                    <span className="text-gray-600">{plan.period}</span>
                                </div>
                                <ul className="mb-6 space-y-3">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-center text-gray-600">
                                            <ChevronRight className="h-5 w-5 text-[#7bd13c] mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <Button
                                    className={`w-full ${plan.highlight
                                            ? 'bg-[#7bd13c] hover:bg-[#7bd13c]/90 text-black'
                                            : 'bg-gray-900 hover:bg-gray-800'
                                        }`}
                                >
                                    Começar agora
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Pricing