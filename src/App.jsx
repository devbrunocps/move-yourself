import React, { useState, useEffect } from 'react';
import {
  Play,
  CheckCircle,
  Clock,
  Users,
  ShieldCheck,
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
  Star,
  Award,
  Target,
  Zap,
  Heart,
  Brain,
  Dumbbell,
  Salad,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Calendar,
  ArrowUpRight,
} from 'lucide-react';

function App() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 15,
    seconds: 47
  });

  const [activeModule, setActiveModule] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    { icon: Play, text: '21 vídeo-aulas práticas exclusivas', description: 'Conteúdo detalhado e passo a passo para cada dia do programa' },
    { icon: CheckCircle, text: 'Método 100% natural e seguro', description: 'Sem uso de remédios, cirurgias ou fórmulas mágicas' },
    { icon: Clock, text: 'Acesso vitalício ao conteúdo', description: 'Estude no seu ritmo e reveja as aulas quando quiser' },
    { icon: Users, text: 'Suporte nutricional especializado', description: 'Tire suas dúvidas diretamente com nossa equipe de nutricionistas' },
    { icon: ShieldCheck, text: 'Resultados comprovados', description: 'Mais de 1.000 alunos transformaram suas vidas com nosso método' },
    { icon: Calendar, text: 'Planejamento semanal completo', description: 'Receba cronogramas detalhados de alimentação e exercícios' }
  ];

  const testimonials = [
    {
      name: 'Ana Silva',
      age: 32,
      text: 'O Método 21 Dias mudou completamente minha vida! Perdi 8kg seguindo o programa e, o melhor de tudo, consegui manter o peso. As video-aulas são super detalhadas e o suporte da equipe faz toda diferença.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150',
      stars: 5,
      location: 'São Paulo, SP'
    },
    {
      name: 'Carlos Santos',
      age: 45,
      text: 'Depois de tentar várias dietas sem sucesso, finalmente encontrei um método que realmente funciona. Perdi 12kg em 2 meses e recuperei minha autoestima. O programa é completo e muito bem estruturado.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150',
      stars: 5,
      location: 'Rio de Janeiro, RJ'
    },
    {
      name: 'Mariana Costa',
      age: 28,
      text: 'Incrível como o programa é completo! Além de perder peso, aprendi muito sobre nutrição e hábitos saudáveis. As receitas são deliciosas e práticas. Recomendo para todos que querem uma mudança real.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150',
      stars: 5,
      location: 'Curitiba, PR'
    }
  ];

  const modules = [
    {
      number: 1,
      title: 'Fundamentos do Emagrecimento',
      lessons: [
        'Introdução ao Método 21 Dias',
        'Entendendo seu metabolismo',
        'Calculando suas necessidades calóricas',
        'Organizando sua rotina'
      ]
    },
    {
      number: 2,
      title: 'Nutrição Estratégica',
      lessons: [
        'Alimentos termogênicos',
        'Montando pratos equilibrados',
        'Lanches inteligentes',
        'Hidratação correta'
      ]
    },
    {
      number: 3,
      title: 'Exercícios Eficientes',
      lessons: [
        'Treinos de alta intensidade',
        'Exercícios para iniciantes',
        'Alongamento essencial',
        'Recuperação muscular'
      ]
    }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Mindset Transformador',
      description: 'Desenvolva uma mentalidade positiva e foco nos seus objetivos'
    },
    {
      icon: Dumbbell,
      title: 'Exercícios Adaptados',
      description: 'Treinos para todos os níveis de condicionamento físico'
    },
    {
      icon: Salad,
      title: 'Nutrição Inteligente',
      description: 'Cardápios práticos e deliciosos para seu dia a dia'
    },
    {
      icon: Heart,
      title: 'Saúde Integral',
      description: 'Foco no bem-estar físico e emocional'
    }
  ];

  const stats = [
    { number: '1000+', text: 'Alunos Satisfeitos' },
    { number: '21', text: 'Dias de Programa' },
    { number: '95%', text: 'Taxa de Sucesso' },
    { number: '15kg', text: 'Média de Perda' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="relative min-h-screen bg-neutral-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-800/80 to-neutral-800/95"></div>
        
        <nav className="relative z-10 border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-between py-6">
              <div className="text-2xl font-bold gradient-text">Método 21 Dias</div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="#beneficios" className="hover:text-primary transition-colors">Benefícios</a>
                <a href="#modulos" className="hover:text-primary transition-colors">Módulos</a>
                <a href="#depoimentos" className="hover:text-primary transition-colors">Depoimentos</a>
                <a href="#preco" className="hover:text-primary transition-colors">Preço</a>
              </div>
              <button className="bg-primary hover:bg-primary-dark text-neutral-800 font-semibold px-6 py-2 rounded-full transition-colors">
                Começar Agora
              </button>
            </div>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Transforme Seu Corpo em
              <span className="gradient-text"> 21 Dias</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Descubra o método científico que já ajudou mais de 1.000 pessoas a perderem peso de forma saudável e definitiva, sem dietas restritivas ou exercícios exaustivos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-primary hover:bg-primary-dark text-neutral-800 text-xl px-8 py-4 rounded-full font-bold transition-colors flex items-center justify-center hover-scale">
                Quero Transformar Meu Corpo <ArrowRight className="ml-2" />
              </button>
              <button className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary/10 text-xl px-8 py-4 rounded-full font-bold transition-colors flex items-center justify-center">
                Conhecer o Método
              </button>
            </div>
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1 rotate-180">
          <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 180" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </header>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold gradient-text mb-2">{stat.number}</h3>
                <p className="text-neutral-800/80">{stat.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Por Que Escolher o <span className="gradient-text">Método 21 Dias</span>?</h2>
            <p className="text-xl text-neutral-800/60 max-w-3xl mx-auto">
              Nosso programa foi desenvolvido por especialistas para garantir resultados reais e duradouros
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl card-shadow hover-scale">
                <feature.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-neutral-800/60">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="beneficios" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Benefícios <span className="gradient-text">Exclusivos</span></h2>
            <p className="text-xl text-neutral-800/60 max-w-3xl mx-auto">
              Tudo que você precisa para alcançar seus objetivos de forma segura e eficiente
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl card-shadow hover-scale">
                <benefit.icon className="w-12 h-12 text-primary mb-6" />
                <h3 className="text-xl font-bold mb-4">{benefit.text}</h3>
                <p className="text-neutral-800/60">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Modules */}
      <section id="modulos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Conteúdo do <span className="gradient-text">Programa</span></h2>
            <p className="text-xl text-neutral-800/60 max-w-3xl mx-auto">
              21 dias de conteúdo prático e objetivo para sua transformação
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            {modules.map((module) => (
              <div key={module.number} className="mb-6">
                <button
                  onClick={() => setActiveModule(module.number)}
                  className={`w-full bg-white p-6 rounded-2xl card-shadow flex items-center justify-between ${
                    activeModule === module.number ? 'border-2 border-primary' : ''
                  }`}
                >
                  <div className="flex items-center">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold ${
                      activeModule === module.number ? 'bg-primary text-white' : 'bg-gray-100 text-neutral-800'
                    }`}>
                      {module.number}
                    </div>
                    <h3 className="text-xl font-bold ml-4">{module.title}</h3>
                  </div>
                  <ChevronDown className={`w-6 h-6 transition-transform ${
                    activeModule === module.number ? 'rotate-180' : ''
                  }`} />
                </button>
                {activeModule === module.number && (
                  <div className="bg-white mt-2 p-6 rounded-2xl">
                    <ul className="space-y-4">
                      {module.lessons.map((lesson, index) => (
                        <li key={index} className="flex items-center text-neutral-800/80">
                          <Play className="w-5 h-5 text-primary mr-3" />
                          {lesson}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="depoimentos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Histórias de <span className="gradient-text">Sucesso</span></h2>
            <p className="text-xl text-neutral-800/60 max-w-3xl mx-auto">
              Veja o que nossos alunos dizem sobre sua transformação
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-2xl card-shadow hover-scale">
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg">{testimonial.name}</h3>
                    <p className="text-neutral-800/60">{testimonial.age} anos</p>
                    <p className="text-neutral-800/60 text-sm">{testimonial.location}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-primary fill-primary" />
                  ))}
                </div>
                <p className="text-neutral-800/80 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="preco" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-3xl card-shadow overflow-hidden">
            <div className="bg-neutral-800 p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Oferta Especial por Tempo Limitado</h2>
              <p className="text-xl text-gray-300 mb-8">
                Comece sua transformação hoje mesmo com condições exclusivas
              </p>
              <div className="inline-block bg-primary/20 rounded-full px-6 py-2 text-primary font-semibold">
                Oferta termina em: 
                <span className="font-mono ml-2">
                  {String(timeLeft.hours).padStart(2, '0')}:
                  {String(timeLeft.minutes).padStart(2, '0')}:
                  {String(timeLeft.seconds).padStart(2, '0')}
                </span>
              </div>
            </div>
            <div className="p-12">
              <div className="text-center mb-8">
                <p className="text-neutral-800/60 text-xl mb-2">
                  De <span className="line-through">R$ 497</span> por apenas
                </p>
                <div className="text-6xl font-bold gradient-text mb-4">R$ 197</div>
                <p className="text-neutral-800/60">ou 12x de R$ 19,70</p>
              </div>
              <div className="max-w-xl mx-auto">
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    <span>Acesso vitalício a todo o conteúdo</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    <span>21 vídeo-aulas exclusivas</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    <span>Suporte nutricional especializado</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    <span>Bônus: E-book com 50 receitas fitness</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-primary mr-3" />
                    <span>Bônus: Planilha de acompanhamento</span>
                  </div>
                </div>
                <button className="w-full bg-primary hover:bg-primary-dark text-neutral-800 text-xl px-8 py-4 rounded-full font-bold transition-colors flex items-center justify-center hover-scale mb-6">
                  Quero Começar Agora <ArrowUpRight className="ml-2" />
                </button>
                <p className="text-neutral-800/60 text-center flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 mr-2" />
                  7 dias de garantia incondicional
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Ainda tem <span className="gradient-text">Dúvidas</span>?</h2>
            <p className="text-xl text-neutral-800/60 max-w-3xl mx-auto">
              Nossa equipe está pronta para te ajudar
            </p>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
            <a href="mailto:contato@metodo21dias.com" className="bg-gray-50 p-8 rounded-2xl card-shadow hover-scale text-center">
              <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">E-mail</h3>
              <p className="text-neutral-800/60">contato@metodo21dias.com</p>
            </a>
            <a href="tel:+551199999999" className="bg-gray-50 p-8 rounded-2xl card-shadow hover-scale text-center">
              <Phone className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Telefone</h3>
              <p className="text-neutral-800/60">(11) 9999-9999</p>
            </a>
            <div className="bg-gray-50 p-8 rounded-2xl card-shadow hover-scale text-center">
              <MapPin className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-bold mb-2">Endereço</h3>
              <p className="text-neutral-800/60">São Paulo, SP</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-bold gradient-text mb-6">Método 21 Dias</h3>
              <p className="text-gray-400">
                Transformando vidas através de um método comprovado de emagrecimento saudável.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-6">Links Rápidos</h4>
              <ul className="space-y-4">
                <li><a href="#beneficios" className="text-gray-400 hover:text-primary transition-colors">Benefícios</a></li>
                <li><a href="#modulos" className="text-gray-400 hover:text-primary transition-colors">Módulos</a></li>
                <li><a href="#depoimentos" className="text-gray-400 hover:text-primary transition-colors">Depoimentos</a></li>
                <li><a href="#preco" className="text-gray-400 hover:text-primary transition-colors">Preço</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Legal</h4>
              <ul className="space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Política de Privacidade</a></li>
                <li><a href="#" className="text-gray-400 hover:text-primary transition-colors">Política de Cookies</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-6">Redes Sociais</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <Youtube className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 mt-12 pt-8 text-center">
            <p className="text-gray-400">© 2024 Método 21 Dias. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;