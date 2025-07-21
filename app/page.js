'use client'

import React from 'react'
import dynamic from 'next/dynamic'

// Dynamically import the 3D model component (client-only)
const Abstract = dynamic(() => import('./components/Abstract'), {
  ssr: false,
})

const Page = () => {
  return (
    <section className="h-screen w-full relative overflow-hidden bg-gradient-to-br from-[#0d0c13] via-[#1a0b24] to-[#2d0b3a]">
      {/* Cosmic background elements */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InRyYW5zcGFyZW50Ii8+PGNpcmNsZSBjeD0iMTAlIiBjeT0iMTUlIiByPSIxIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjgiLz48Y2lyY2xlIGN4PSIzMCUiIGN5PSIyMCUiIHI9IjAuNSIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC42Ii8+PGNpcmNsZSBjeD0iNzAlIiBjeT0iMzAlIiByPSIxLjIiIGZpbGw9IiNmZmYiIG9wYWNpdHk9IjAuNyIvPjxjaXJjbGUgY3g9Ijg1JSIgY3k9IjYwJSIgcj0iMC44IiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjUiLz48Y2lyY2xlIGN4PSI5MCUiIGN5PSIxNSUiIHI9IjAuMyIgZmlsbD0iI2ZmZiIgb3BhY2l0eT0iMC40Ii8+PC9zdmc+')] opacity-50"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,_#5a1a7a/20%,_transparent),_radial-gradient(circle_at_80%_70%,_#3a0d4e/15%,_transparent)]"></div>

      {/* Animated glowing elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>

      {/* Content container with relative positioning */}
      <div className="relative z-10">
        {/* Top nav */}
        <div className="flex justify-between items-center p-6 ">
          <h1 className="font-space text-[#fefeff] text-2xl">PulseAI</h1>
          <ul className="flex gap-12 text-[#fefeff] font-spacelight">
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>Our Work</li>
          </ul>
          <button className="bg-[#fdfdfd] text-[#1f1f1f] font-spacelight font-semibold py-2 px-4 rounded-xl hover:bg-opacity-90 transition-all">
            Join Waitlist
          </button>
        </div>

        {/* Hero content */}
        <div className="flex flex-wrap items-center justify-between px-[60px] pb-[40px] pt-[60px]">
          {/* Left column - Text */}
          <div className="max-w-[600px] relative z-10">
            <div className="mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-[#1a1323] border border-green-500/30 rounded-full -mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-[#fefeff] text-sm">
                  Now Live: PulseAI Creative 🚀
                </span>
              </div>
            </div>

            <h1 className="bg-gradient-to-r from-[#e2e2e4] to-[#a9a8af] bg-clip-text text-transparent font-spacelight text-6xl font-bold leading-tight mb-8 max-w-5xl">
              AI-Generated. <br />
              Strategy-Driven. <br />
              Performing content.
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl leading-relaxed">
              AI content for blogs, socials, and ads. SEO optimized. Data backed.
              Fast, smart, scalable, growth ready.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-2 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-purple-500/20">
                Join Waitlist
              </button>
              <button className="px-8 py-2 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800/50 transition-all duration-200 hover:scale-105 hover:border-purple-400/50">
                Let's Explore 👇
              </button>
            </div>
          </div>

          {/* Right column - 3D Model */}
          <div className="flex justify-center items-center w-full mt-4 mr-8 sm:max-w-[500px] relative z-10">
            <Abstract />
            {/* Glow effect around the 3D model */}
            <div className="absolute -inset-8 bg-purple-500/10 rounded-full blur-2xl -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
