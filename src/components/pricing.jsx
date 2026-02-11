import { Check, Star } from "lucide-react"

const plans = [{
    name: 'starter',
    price: "29.99",
    description: "perfect for individuals and small teams",
    Features: [
        "up to 5 team members",
        "10BG storage",
        "Basic analytics",
        "Email support",
        "API access",
        "Mobile App",
    ],
    mostpopular: false
},
{
    name: 'Proffession',
    price: "29.99",
    description: "perfect for individuals and small teams",
    Features: [
        "up to 5 team members",
        "10BG storage",
        "Basic analytics",
        "Email support",
        "API access",
        "Mobile App",
    ],
    mostpopular: true
},
{
    name: 'Enterprise',
    price: "29.99",
    description: "perfect for individuals and small teams",
    Features: [
        "up to 5 team members",
        "10GB storage",
        "Basic analytics",
        "Email support",
        "API access",
        "Mobile App",
    ],
    mostpopular: false
}
]

export default function Pricing() {
    return (
        <section id="pricing" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 lg-mb-20">
                    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-6">
                        <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">Simple, transparent </span>
                        <br />
                        <span className="bg-gradient-to-b from-blue-400 to-cyan-400 bg-clip-text text-transparent">Pricing plans</span>
                    </h2>
                    <p className="text-gray-400 taext-base text-xl sm:textlg max-w-2xl mx-auto">Choose the perfect plan for your needs. All plans include 14-day free trial.</p>



                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-6">
                    {plans.map((plan, key) => {
                        return (
                            <div key={key} className={`relative bg-slate-900/50 backdrop-blur-sm border rounded-xl sm:rounded-2xl p-6 sm:p-8 transition-all duration-300 ovarflow-visible group flex flex-col h-full 
                                ${plan.mostpopular ? 'border-blue-500 shadow-2xl shadow-blue-500/20 lg:scale-105'
                                    : 'border-slate-800 hover:border-slate-700'}`}>
                                {plan.mostpopular && (
                                    <div className="absolute -top-2 sm:-top-3 left-1/2 transform- -translate-x-1/2 z-10">
                                        <div className="flex items-center space-x-1 px-3 sm:px-4 py-1 sm:py-1.5 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                                            <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-white" />
                                            <span>Most popular</span>
                                        </div>
                                    </div>
                                )}
                                <div className="text-center mb-6 sm:mb-8">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-2">{plan.name}</h3>
                                    <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{plan.description}</p>
                                    <div className="flex items-baseline justify-center">
                                        <span className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-b from-blue-500 to-cyan-200 text-transparent bg-clip-text">${plan.price}</span>
                                        <span className="text-gray-400 ml-1 sm:ml-2 text-sm text-base"> /Month</span>
                                    </div>
                                </div>
                                <ul className="space-y-3 sm:pace-y-4 mb-6 sm:mb-8 flex-row">
                                    {plan.Features.map((features, featurekey) => {
                                        return (
                                            
                                                <li key={featurekey} className='flex items-start space-x-2 sm:space-x-3'>
                                                    <div className="flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-blue-500/20 flex items-center justify-center mt-0.5">
                                                    <Check className="text-blue-500 w-2.5 h-2.5 sm:w-3 sm:h-3"/>
                                                    </div>
                                                    <span className="text-gray-300 text-sm sm:text-base">{features}</span>
                                                </li>
                                            
                                        )
                                    })}
                                </ul>
                                <button  className={`w-full py-2.5 sm:py-3 cursor-pointer px-4 sm:px-6 rounded-lg font-semibold ${plan.mostpopular ? 'bg-gradient-to-b from-blue-700/90 to-cyan-600': 'bg-white/5 border border-white/10 hover:bg-white/10'}`}>Get started</button>
                            </div>
                        )
                    })

                    }
                </div>
                <div className="mt-8 sm:mt-12 text-center">
                    <p className="text-gray-400 text-base">Need a Custom plan ? <a href="#" className="text-blue-600 hover:text-blue-500">Contact our sales team</a></p>
                </div>
            </div>
        </section>
    )
}