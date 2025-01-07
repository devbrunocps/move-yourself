import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, MapPin, Phone, Send } from 'lucide-react'
import React from 'react'

const Contact = () => {
    return (
        <section className="py-20 px-12 font-mont bg-primary-400">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl text-second-100 font-bold text-center mb-12">
                    Entre em Contato
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="bg-primary-200 p-8 rounded-lg shadow-md">
                        <form className="space-y-6 dark" >
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-second-200">Nome</label>
                                <Input id="name" placeholder="Seu nome" className="mt-1" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-second-200">Email</label>
                                <Input id="email" type="email" placeholder="seu@email.com" className="mt-1" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-second-200">Mensagem</label>
                                <Textarea id="message" placeholder="Sua mensagem" className="mt-1" rows={4} />
                            </div>
                            <Button className="w-full bg-[#7bd13c] hover:bg-[#7bd13c]/90 text-black">
                                Enviar Mensagem
                                <Send className="ml-2 h-5 w-5" />
                            </Button>
                        </form>
                    </div>
                    <div className="space-y-6">
                        <div className="aspect-video rounded-lg overflow-hidden shadow-md">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d463.66364292342627!2d-48.3653643777633!3d-21.61287405141519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1731464512917!5m2!1spt-BR!2sbr"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <Card className="dark">
                            <CardContent className="p-6 space-y-4 bg-primary-400 text-second-200 border-neutral-700 border">
                                <div className="flex items-center">
                                    <MapPin className="h-6 w-6 text-[#7bd13c] mr-4" />
                                    <span>Rua da Academia, 123 - São Paulo, SP</span>
                                </div>
                                <div className="flex items-center">
                                    <Phone className="h-6 w-6 text-[#7bd13c] mr-4" />
                                    <span>(11) 1234-5678</span>
                                </div>
                                <div className="flex items-center">
                                    <Mail className="h-6 w-6 text-[#7bd13c] mr-4" />
                                    <span>contato@moveyourself.com</span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact