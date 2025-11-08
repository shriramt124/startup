export default function WhoWeAre() {
    return (
        <section className="py-12 px-6 lg:px-12 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="flex items-center gap-3 mb-8">
                    <div className="w-8 h-0.5 bg-blue-500"></div>
                    <h2 className="text-blue-600 text-lg font-semibold">WHO WE ARE</h2>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div>
                        {/* Main Heading */}
                        <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                           More than developers. We’re your innovation partners.
                        </h1>

                        {/* Eficsy Description */}
                        <p className="text-gray-700 text-sm mb-6 leading-relaxed italic border-l-4 border-blue-500 pl-4">
                            At <span style={{ fontFamily: "'Brandon Grotesque', sans-serif" }}>EFICSY</span>, we believe technology should feel human-centered—intuitive, beautiful, and powerful. We're not a faceless agency or a code factory. We're a passionate team of creators, problem-solvers, and tech visionaries who thrive on turning complex challenges into elegant digital experiences.</p>
                        </p>

                        {/* Description */}
                        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                           We won’t just build what you ask for—we’ll help you discover what you truly need.
                        </p>

                        {/* Feature Items */}
                        <div className="grid md:grid-cols-2 gap-4 mb-6">
                            {/* Feature 1 */}
                            <div className="flex gap-3">
                                <div className="flex-shrink-0">
                                    <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2L3 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-9-5z"/>
                                        <path d="M12 2v20"/>
                                        <path d="M12 7l-9 5"/>
                                        <ellipse cx="12" cy="12" rx="3" ry="8" transform="rotate(-45 12 12)"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-base mb-1">Secure & Scalable</h3>
                                    <p className="text-gray-600 text-xs">Enterprise-grade security with cloud-native architecture that grows with your business needs.</p>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="flex gap-3">
                                <div className="flex-shrink-0">
                                    <svg className="w-10 h-10 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                                        <circle cx="12" cy="12" r="1"/>
                                        <path d="M14 3l-2-1-2 1M14 21l-2 1-2-1"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-900 text-base mb-1">Cost-Effective Solutions</h3>
                                    <p className="text-gray-600 text-xs">Maximum value for your investment with transparent pricing and efficient development cycles.</p>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="relative px-6 py-2 bg-blue-600 text-white font-bold text-sm rounded-lg overflow-hidden group transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:scale-105">
                            <span className="absolute inset-0 bg-black transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></span>
                            <span className="relative z-10">OUR TEAM</span>
                        </button>
                    </div>

                    {/* Right Image Section */}
                    <div className="relative h-96 md:h-[500px]">
                        {/* Main Image */}
                        <div className="relative z-10 h-full">
                            <img 
                                src="/choose-use1.png" 
                                alt="Team collaboration" 
                                className="w-full h-full object-contain"
                            />
                        </div>

                        {/* Floating Card - Top Left */}
                        <div className="absolute top-8 -left-4 md:left-0 bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-4 z-20 hover:scale-105 transition-transform duration-300 border border-blue-100">
                            <div className="flex items-center gap-3">
                                <div className="bg-blue-500 rounded-full p-2">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-lg">10+</h4>
                                    <p className="text-xs text-gray-600">Years Experience</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card - Top Right */}
                        <div className="absolute top-4 -right-4 md:right-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-xl p-4 z-20 hover:scale-105 transition-transform duration-300">
                            <div className="flex items-center gap-3">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-2">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white text-lg">500+</h4>
                                    <p className="text-xs text-blue-100">Projects Delivered</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Badge - Center Right */}
                        <div className="absolute top-1/3 -right-6 md:-right-8 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full p-6 z-20 hover:rotate-12 transition-transform duration-300 shadow-2xl">
                            <div className="text-center">
                                <svg className="w-8 h-8 text-yellow-300 mx-auto mb-1" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <p className="text-xs font-bold text-white whitespace-nowrap">Human-Centered<br/>Innovation</p>
                            </div>
                        </div>

                        {/* Floating Card - Bottom Left */}
                        <div className="absolute bottom-12 -left-4 md:left-0 bg-white/90 backdrop-blur-md rounded-xl shadow-xl p-4 z-20 hover:scale-105 transition-transform duration-300 border border-blue-100">
                            <div className="flex items-center gap-3">
                                <div className="bg-green-500 rounded-full p-2">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-gray-900 text-base">24/7</h4>
                                    <p className="text-xs text-gray-600">Support</p>
                                </div>
                            </div>
                        </div>

                        {/* Floating Card - Bottom Center */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-md rounded-full px-6 py-3 shadow-lg z-20 hover:shadow-2xl transition-all duration-300 border border-blue-200">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                                <p className="text-sm font-semibold text-gray-900">100+ Happy Clients</p>
                            </div>
                        </div>

                        {/* Curved Arrow */}
                        <div className="absolute top-1/4 left-0 transform -translate-x-1/2">
                            <svg className="w-20 h-20 text-blue-400 opacity-50" viewBox="0 0 100 100" fill="none">
                                <path 
                                    d="M10 50 Q 30 20, 70 30" 
                                    stroke="currentColor" 
                                    strokeWidth="3" 
                                    fill="none"
                                    markerEnd="url(#arrowhead)"
                                />
                                <defs>
                                    <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                                        <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                                    </marker>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
