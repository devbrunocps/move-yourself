import { Clock, Dumbbell, Trophy, Users } from "lucide-react";
import { createContext } from "react";

export const DataContext = createContext({})

export const DataProvider = ({ children }) => {
    const services = [
        { icon: <Dumbbell className="h-8 w-8 mb-4 text-[#7bd13c]" />, title: 'Musculação', description: 'Equipamentos modernos e treinos personalizados' },
        { icon: <Users className="h-8 w-8 mb-4 text-[#7bd13c]" />, title: 'Aulas em Grupo', description: 'Diversas modalidades para todos os níveis' },
        { icon: <Clock className="h-8 w-8 mb-4 text-[#7bd13c]" />, title: 'Horário Flexível', description: 'Academia aberta todos os dias' },
        { icon: <Trophy className="h-8 w-8 mb-4 text-[#7bd13c]" />, title: 'Personal Trainer', description: 'Acompanhamento individualizado' },
    ]

    const testimonials = [
        { name: 'João Silva', role: 'Membro há 2 anos', text: 'A melhor decisão que tomei para minha saúde. Resultados incríveis!', rating: 5 },
        { name: 'Maria Santos', role: 'Membro há 1 ano', text: 'Ambiente acolhedor e profissionais excelentes.', rating: 5 },
        { name: 'Pedro Costa', role: 'Membro há 6 meses', text: 'Estrutura completa e preço justo. Super recomendo!', rating: 5 },
    ]

    const plans = [
        {
            name: 'Básico',
            price: 'R$ 99,90',
            period: '/mês',
            features: ['Acesso à musculação', 'Aulas em grupo', 'Vestiários com armários'],
            highlight: false
        },
        {
            name: 'Premium',
            price: 'R$ 149,90',
            period: '/mês',
            features: ['Tudo do plano Básico', 'Personal Trainer', 'Avaliação mensal', 'Acesso a todas as unidades'],
            highlight: true
        },
        {
            name: 'Família',
            price: 'R$ 249,90',
            period: '/mês',
            features: ['Até 3 pessoas', 'Todos os benefícios Premium', 'Desconto em produtos', 'Horários exclusivos'],
            highlight: false
        },
    ]


    const data = {
        services,
        testimonials,
        plans,
    }

    return (
        <DataContext.Provider value={data}>
            {children}
        </DataContext.Provider>
    )
}