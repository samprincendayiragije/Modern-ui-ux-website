import { Menu, Octagon, X } from "lucide-react";
import { useState } from "react";

export default function Navbar({scrolled}) {
    const [openMenu, setopenMenu] = useState(false)
    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/80  backdrop-blur-lg border-b border-slate-800' :'bg-slate-950/20 backdrop-blur-sm'}`}>
            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto ">
                <div className="flex justify-between items-center h-14 sm:h-16 md:h-20">
                    <div className="flex items-center space-x-1 group cursor-pointer">
                        <div>
                            <Octagon className="text-blue-400 fill-blue-500/30" />
                        </div>
                        <span className="text-lg sm:text-xl md:text-2xl font-medium">
                            <span className="text-white">Code</span>
                            <span className="text-blue-400">Flow</span>
                        </span>
                    </div>

                    {/* navlinks */}
                    <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
                        <a href="#features" className="text-gray-300 hover:text-white text-sm lg:text-base ">Features</a>
                        <a href="#pricing" className="text-gray-300 hover:text-white text-sm lg:text-base ">Pricing</a>
                        <a href="#testmonials" className="text-gray-300 hover:text-white text-sm lg:text-base ">Testimonials</a>
                    </div>
                    <button className="md:hidden p-2 text-gray-300 hover:text-white" onClick={() => { setopenMenu((prev) => !prev) }}>

                        {openMenu ? (<X className="w-5 h-5 sm:h-6 sm:w-6" />) : (<Menu className="w-5 h-5 sm:h-6 sm:w-6" />)}
                    </button>
                </div>
            </div>
                    {openMenu && <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-slate-800 slide-in-from-top duration-300 animate-in">
                        <div className="px-4 py-4 sm:py-6 space-y-3 sm:space-y-4">
                            <a href="#features" onClick={()=>{setopenMenu(false)}} className="block text-gray-300 hover:text-white text-sm lg:text-base ">Features</a>
                            <a href="#pricing" onClick={()=>{setopenMenu(false)}} className="block text-gray-300 hover:text-white text-sm lg:text-base ">Pricing</a>
                            <a href="#testimonials" onClick={()=>{setopenMenu(false)}} className="block text-gray-300 hover:text-white text-sm lg:text-base ">Testimonials</a>
                        </div>
                    </div>}
        </nav>
    )
}