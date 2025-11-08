"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function WhyChooseUs() {
    const [activeTab, setActiveTab] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const tabs = [
        {
            id: 0,
            title: "Your Goals, Not Just Features",
            description: "We start with your business objectives—not tech specs. Whether you need to boost sales, streamline operations, or delight customers, we align every line of code to your real-world outcomes.",
            visualType: "goals"
        },
        {
            id: 1,
            title: "Fast, Flexible & Transparent",
            description: "Agile sprints, weekly demos, and real-time collaboration. See progress as it happens, pivot when needed, and stay in complete control of your project timeline.",
            visualType: "speed"
        },
        {
            id: 2,
            title: "Enterprise-Grade, Startup-Friendly",
            description: "Fortune 500 architecture meets startup agility. We build systems that scale to millions while keeping costs lean and deployment fast.",
            visualType: "scale"
        },
        {
            id: 3,
            title: "True Partnership, Not Just a Contract",
            description: "We're invested in your success beyond the project. Ongoing support, strategic advice, and a team that genuinely cares about your growth.",
            visualType: "partnership"
        },
        {
            id: 4,
            title: "Built for Scale. Backed by People.",
            description: "Cloud-native, API-first, and future-proof tech stack—but always with human-centered design and dedicated support that feels personal.",
            visualType: "people"
        }
    ];

    // Auto-rotation effect
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveTab((prev) => (prev + 1) % tabs.length);
        }, 4000); // Change every 4 seconds

        return () => clearInterval(interval);
    }, [isPaused, tabs.length]);

    const handleTabClick = (index) => {
        setActiveTab(index);
        setIsPaused(true);
        // Resume auto-rotation after 8 seconds of inactivity
        setTimeout(() => setIsPaused(false), 8000);
    };

    const renderVisual = () => {
        const visual = tabs[activeTab].visualType;

        switch (visual) {
            case "goals":
                return (
                    <div className="relative h-full min-h-[320px]">
                        {/* Fine Grid Overlay */}
                        <div className="absolute inset-0 opacity-15 pointer-events-none">
                            <div className="w-full h-full" style={{
                                backgroundImage: `linear-gradient(rgb(34, 211, 238) 1px, transparent 1px),
                                                 linear-gradient(90deg, rgb(34, 211, 238) 1px, transparent 1px)`,
                                backgroundSize: '25px 25px'
                            }}></div>
                        </div>

                        {/* Avatar 1 - Top Right */}
                        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg z-20">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                        </div>

                        {/* Green Sticky Note */}
                        <div className="absolute top-2 left-0 right-20 bg-emerald-300 rounded-xl p-3 shadow-md transform -rotate-1 z-10">
                            <p className="text-gray-900 text-xs font-semibold leading-snug">
                                Most tech vendors start with tools.<br/>
                                <span className="font-bold">We start with your business.</span>
                            </p>
                        </div>

                        {/* Avatar 2 - Middle Left */}
                        <div className="absolute top-20 left-0 w-16 h-16 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full flex items-center justify-center shadow-lg z-20">
                            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                            </svg>
                        </div>

                        {/* Yellow Sticky Note */}
                        <div className="absolute top-24 left-20 right-0 bg-yellow-300 rounded-xl p-3 shadow-md transform rotate-1 z-10">
                            <p className="text-gray-900 text-xs font-bold leading-snug">
                                Before writing a single line of code, we dive deep into your:
                            </p>
                        </div>

                        {/* Cyan List Card */}
                        <div className="absolute top-40 left-8 right-8 bg-cyan-100 rounded-xl p-3 shadow-md z-10">
                            <ul className="space-y-1">
                                <li className="flex items-center gap-2 text-gray-900 text-xs">
                                    <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                                    <span className="font-medium">Customer journey</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-900 text-xs">
                                    <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                                    <span className="font-medium">Operational bottlenecks</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-900 text-xs">
                                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                                    <span className="font-medium">Revenue goals</span>
                                </li>
                                <li className="flex items-center gap-2 text-gray-900 text-xs">
                                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full"></span>
                                    <span className="font-medium">Competitive challenges</span>
                                </li>
                            </ul>
                        </div>

                        {/* Red Arrow */}
                        <div className="absolute top-36 left-2 z-20">
                            <svg className="w-12 h-12 text-red-500" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4">
                                <path d="M20 40 Q 40 20, 70 50" strokeLinecap="round"/>
                                <path d="M70 50 L 60 45 M70 50 L 65 60" strokeLinecap="round"/>
                            </svg>
                        </div>
                    </div>
                );

            case "speed":
                return (
                    <div className="relative h-full p-4 overflow-hidden">
                        {/* Timeline Header */}
                        <div className="mb-4">
                            <h4 className="text-sm font-semibold text-gray-900 mb-1">Your Project Timeline</h4>
                            <p className="text-xs text-gray-600">Real-time visibility, every step of the way</p>
                        </div>

                        {/* Timeline Cards */}
                        <div className="space-y-3">
                            {/* Week 1 - Discovery */}
                            <div className="bg-indigo-50/80 rounded-lg p-3 border-l-2 border-indigo-600">
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 bg-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                                            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs font-semibold text-gray-900">Week 1: Discovery</span>
                                            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded-full">✓ Done</span>
                                        </div>
                                        <p className="text-xs text-gray-700">Requirements gathering & planning</p>
                                        <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                                            <div className="bg-indigo-600 h-1.5 rounded-full" style={{ width: '100%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Week 2-3 - Design */}
                            <div className="bg-blue-50/80 rounded-lg p-3 border-l-2 border-blue-600">
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs font-semibold text-gray-900">Week 2-3: Design</span>
                                            <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">⚡ Active</span>
                                        </div>
                                        <p className="text-xs text-gray-700">UI/UX mockups & prototypes</p>
                                        <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                                            <div className="bg-blue-600 h-1.5 rounded-full transition-all duration-500" style={{ width: '65%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Week 4-6 - Development */}
                            <div className="bg-cyan-50/80 rounded-lg p-3 border-l-2 border-cyan-600">
                                <div className="flex items-start gap-3">
                                    <div className="w-12 h-12 bg-cyan-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="text-xs font-semibold text-gray-900">Week 4-6: Development</span>
                                            <span className="text-xs bg-gray-400 text-white px-2 py-0.5 rounded-full">Upcoming</span>
                                        </div>
                                        <p className="text-xs text-gray-700">Agile sprints & weekly demos</p>
                                        <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
                                            <div className="bg-cyan-600 h-1.5 rounded-full" style={{ width: '0%' }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Communication Badge */}
                        <div className="absolute bottom-2 right-2 bg-green-500/90 backdrop-blur-sm rounded-full px-3 py-2 shadow-md flex items-center gap-2">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                            </svg>
                            <span className="text-xs font-semibold text-white">Daily Updates</span>
                        </div>
                    </div>
                );

            case "scale":
                return (
                    <div className="relative h-full p-4">
                        {/* Header */}
                        <div className="text-center mb-4">
                            <h4 className="text-sm font-semibold text-gray-900">Scales from 100 to 1M+ users</h4>
                        </div>

                        {/* Architecture Cards Grid */}
                        <div className="grid grid-cols-2 gap-3 mb-3">
                            {/* Microservices */}
                            <div className="bg-blue-50/80 rounded-lg p-3 border-l-2 border-blue-500">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-900">Microservices</span>
                                </div>
                            </div>

                            {/* Cloud Native */}
                            <div className="bg-indigo-50/80 rounded-lg p-3 border-l-2 border-indigo-600">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center mb-2">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z" />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-900">Cloud Native</span>
                                </div>
                            </div>

                            {/* Auto Scaling */}
                            <div className="bg-green-50/80 rounded-lg p-3 border-l-2 border-green-500">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-900">Auto Scaling</span>
                                </div>
                            </div>

                            {/* Global CDN */}
                            <div className="bg-teal-50/80 rounded-lg p-3 border-l-2 border-teal-600">
                                <div className="flex flex-col items-center text-center">
                                    <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center mb-2">
                                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-900">Global CDN</span>
                                </div>
                            </div>
                        </div>

                        {/* Cost Efficiency Strip */}
                        <div className="bg-blue-600/90 backdrop-blur-sm rounded-lg p-3 text-white shadow-md">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-xs font-semibold mb-1">Startup Budget</p>
                                    <p className="text-xs opacity-90">Enterprise Performance</p>
                                </div>
                                <div className="text-right">
                                    <p className="text-2xl font-bold">70%</p>
                                    <p className="text-xs">Cost Savings</p>
                                </div>
                            </div>
                        </div>

                        {/* Technologies Strip */}
                        <div className="mt-3 flex flex-wrap gap-2 justify-center">
                            <span className="px-2 py-1 bg-gray-800 text-white text-xs rounded-full font-semibold">AWS</span>
                            <span className="px-2 py-1 bg-blue-600 text-white text-xs rounded-full font-semibold">Azure</span>
                            <span className="px-2 py-1 bg-orange-500 text-white text-xs rounded-full font-semibold">GCP</span>
                            <span className="px-2 py-1 bg-cyan-600 text-white text-xs rounded-full font-semibold">Docker</span>
                            <span className="px-2 py-1 bg-indigo-600 text-white text-xs rounded-full font-semibold">K8s</span>
                        </div>
                    </div>
                );

            case "partnership":
                return (
                    <div className="relative h-full p-4">
                        {/* Partnership Journey */}
                        <div className="space-y-3">
                            {/* Phase 1 - Initial Project */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border-l-2 border-blue-500">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                                        1
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-xs font-semibold text-gray-900 mb-1">First Project</h5>
                                        <p className="text-xs text-gray-700 mb-2">Web app development</p>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs rounded-full font-semibold">Success</span>
                                            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs rounded-full">3 months</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="flex justify-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>

                            {/* Phase 2 - Expansion */}
                            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 border-l-2 border-indigo-600">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold">
                                        2
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-xs font-semibold text-gray-900 mb-1">Feature Expansion</h5>
                                        <p className="text-xs text-gray-700 mb-2">Mobile app + AI integration</p>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-0.5 bg-indigo-100 text-indigo-700 text-xs rounded-full font-semibold">Ongoing</span>
                                            <span className="px-2 py-0.5 bg-cyan-100 text-cyan-700 text-xs rounded-full">Year 2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Arrow */}
                            <div className="flex justify-center">
                                <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>

                            {/* Phase 3 - Long-term */}
                            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-lg p-3 text-white shadow-md">
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <h5 className="text-xs font-semibold mb-1">Strategic Partner</h5>
                                        <p className="text-xs mb-2 opacity-90">Dedicated team, roadmap planning, 24/7 support</p>
                                        <div className="flex gap-2">
                                            <span className="px-2 py-0.5 bg-white/20 text-white text-xs rounded-full font-semibold">🚀 Growing Together</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );

            case "people":
                return (
                    <div className="relative h-full p-3">
                        {/* Header with Badge */}
                        <div className="flex items-center justify-between mb-3">
                            <h4 className="text-sm font-semibold text-gray-900">Tech + Human Touch</h4>
                            <span className="px-2 py-1 bg-red-500 text-white text-xs rounded-full flex items-center gap-1">
                                <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></span>
                                Live
                            </span>
                        </div>

                        {/* Support Team Cards */}
                        <div className="grid grid-cols-3 gap-2 mb-3">
                            <div className="text-center">
                                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-1 shadow-md">
                                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-xs font-semibold text-gray-900">Sarah</p>
                                <p className="text-xs text-gray-600">PM</p>
                            </div>
                            <div className="text-center">
                                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center mb-1 shadow-md">
                                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-xs font-semibold text-gray-900">Alex</p>
                                <p className="text-xs text-gray-600">Lead Dev</p>
                            </div>
                            <div className="text-center">
                                <div className="w-14 h-14 mx-auto bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center mb-1 shadow-md">
                                    <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-xs font-semibold text-gray-900">Jamie</p>
                                <p className="text-xs text-gray-600">Designer</p>
                            </div>
                        </div>

                        {/* Support Channels */}
                        <div className="space-y-2 mb-3">
                            <div className="bg-green-50/80 backdrop-blur-sm rounded-lg p-2 border-l-2 border-green-500 flex items-center gap-2">
                                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                </svg>
                                <div className="flex-1">
                                    <p className="text-xs font-semibold text-gray-900">Phone Support</p>
                                    <p className="text-xs text-gray-600">Call anytime</p>
                                </div>
                            </div>

                            <div className="bg-blue-50/80 backdrop-blur-sm rounded-lg p-2 border-l-2 border-blue-500 flex items-center gap-2">
                                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                    <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                                </svg>
                                <div className="flex-1">
                                    <p className="text-xs font-semibold text-gray-900">Live Chat</p>
                                    <p className="text-xs text-gray-600">&lt; 2 min response</p>
                                </div>
                            </div>

                            <div className="bg-indigo-50/80 backdrop-blur-sm rounded-lg p-2 border-l-2 border-indigo-600 flex items-center gap-2">
                                <svg className="w-5 h-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
                                </svg>
                                <div className="flex-1">
                                    <p className="text-xs font-semibold text-gray-900">Slack Channel</p>
                                    <p className="text-xs text-gray-600">Direct team access</p>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Badge */}
                        <div className="bg-green-500/90 backdrop-blur-sm rounded-lg p-2 text-center shadow-md">
                            <p className="text-xs font-semibold text-white">Average Response Time</p>
                            <p className="text-2xl font-bold text-white">15 min</p>
                        </div>
                    </div>
                );

            default:
                return null;
        }
    };

    return (
        <section className="relative py-12 px-6 lg:px-12 bg-gray-50 overflow-hidden">
            {/* Background Cyan Grid Pattern */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute inset-0" style={{
                    backgroundImage: `linear-gradient(rgb(34, 211, 238) 2px, transparent 2px),
                                     linear-gradient(90deg, rgb(34, 211, 238) 2px, transparent 2px)`,
                    backgroundSize: '50px 50px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Section Header */}
                <div className="mb-8">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-8 h-0.5 bg-blue-500"></div>
                        <h2 className="text-blue-600 text-lg font-semibold">WHY CHOOSE US</h2>
                    </div>

                    <div className="max-w-2xl">
                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                            We don't just write code—we solve your business problems.
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                            In a world of generic developers and cookie-cutter solutions, we stand out by 
                            <span className="text-gray-900 font-semibold"> listening first, building second</span>. 
                            Here's what makes us different:
                        </p>
                    </div>
                </div>

                {/* Two Column Layout */}
                <div className="grid lg:grid-cols-2 gap-10 mb-12 items-start">
                    {/* Left Column - Interactive Tabs */}
                    <div className="space-y-2.5">
                        {tabs.map((tab, index) => (
                            <div
                                key={tab.id}
                                onClick={() => handleTabClick(index)}
                                className={`cursor-pointer transition-all duration-300 rounded-lg p-3 border-l-2 ${
                                    activeTab === index
                                        ? 'bg-blue-50/50 border-blue-500'
                                        : 'bg-white/50 border-gray-300 hover:border-blue-400 hover:bg-blue-50/30'
                                }`}
                            >
                                <div className="flex items-center justify-between mb-1.5">
                                    <h3 className={`text-sm font-semibold transition-colors ${
                                        activeTab === index ? 'text-blue-600' : 'text-gray-900'
                                    }`}>
                                        {index + 1}. {tab.title}
                                    </h3>
                                    {activeTab === index && (
                                        <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                                    )}
                                </div>

                                {/* Expanded Description */}
                                <div className={`overflow-hidden transition-all duration-500 ${
                                    activeTab === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                                }`}>
                                    <p className="text-gray-700 text-xs leading-relaxed pt-1.5">
                                        {tab.description}
                                    </p>
                                </div>

                                {/* Loading State Indicator */}
                                {activeTab === index && (
                                    <div className="mt-2 flex items-center gap-2">
                                        <div className="flex-1 h-1 bg-gray-200 rounded-full overflow-hidden">
                                            <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-loading-bar" style={{ width: '100%' }}></div>
                                        </div>
                                        <span className="text-xs text-gray-500">{(index + 1) * 20}%</span>
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Progress Indicator */}
                        <div className="flex gap-2 pt-1.5">
                            {tabs.map((_, index) => (
                                <div
                                    key={index}
                                    className={`h-1 flex-1 rounded-full transition-all duration-500 ${
                                        activeTab === index ? 'bg-gradient-to-r from-blue-500 to-cyan-500' : 'bg-gray-300'
                                    }`}
                                ></div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Dynamic Visual Content */}
                    <div className="relative min-h-[280px] rounded-2xl -mt-4">
                        {/* Subtle Grid Overlay */}
                        <div className="absolute inset-0 opacity-5 pointer-events-none rounded-2xl overflow-hidden">
                            <div className="w-full h-full" style={{
                                backgroundImage: `linear-gradient(rgb(59, 130, 246) 1px, transparent 1px),
                                                 linear-gradient(90deg, rgb(59, 130, 246) 1px, transparent 1px)`,
                                backgroundSize: '20px 20px'
                            }}></div>
                        </div>

                        {/* Animated Content */}
                        <div className="relative z-10 h-full animate-fadeIn" key={activeTab}>
                            {renderVisual()}
                        </div>
                    </div>
                </div>

                {/* Bottom Section - Trust Statement */}
                <div className="grid lg:grid-cols-2 gap-8 items-center pt-8 border-t border-gray-200 -mt-4">
                    {/* Team Image */}
                    <div className="flex justify-center lg:justify-start">
                        <Image src="/circularimage3.png" width={400} height={400} alt="Team" className="rounded-lg" />
                    </div>

                    {/* Text Content */}
                    <div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 leading-tight">
                            95% of our clients stay with us for 2+ years—because we invest in your success, not just the project.
                        </h3>
                        <p className="text-gray-700 text-sm mb-1.5">
                            Need AI integration next year? A mobile app? A system overhaul?
                        </p>
                        <p className="text-base font-semibold text-blue-600">
                            We've got your back.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}