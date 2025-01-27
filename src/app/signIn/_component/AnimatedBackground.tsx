"use client"

import { useEffect, useRef } from 'react'

const icons = [
    '🚗', '🚕', '🚙', '🚌', '🚎', '🏎️', '🚓', '🚑', '🚒', '🚐', '🛻', '🚚', '🚛', 
    '🚜', '🛵', '🏍️', '🛺', '🚲', '🛴', '🚂', '🚆', '🚊', '🚉', '🚝', '🚞', '🚋',
    '🚌', '🚍', '🚎', '🚐', '🚑', '🚒', '🚓', '🚔', '🚕', '🚖', '🚗', '🚘', '🚙',
    '✈️', '🛩️', '🛫', '🛬', '🚁', '🚀', '🛸', '⛵', '🚤', '🛥️', '🛳️', '⛴️', '🚢'
]

export default function AnimatedBackground() {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const container = containerRef.current
        if (!container) return

        const createIcon = () => {
            const icon = document.createElement('div')
            icon.className = 'absolute text-3xl opacity-20'
            icon.style.left = `${Math.random() * 100}%`
            icon.style.top = `${Math.random() * 100}%`
            icon.textContent = icons[Math.floor(Math.random() * icons.length)]
            container.appendChild(icon)

            const duration = 10 + Math.random() * 20
            const direction = Math.random() > 0.5 ? 1 : -1

            const animation = icon.animate(
                [
                    { transform: 'translateY(0) rotate(0deg)' },
                    { transform: `translateY(${100 * direction}vh) rotate(${360 * direction}deg)` }
                ],
                {
                    duration: duration * 1000,
                    iterations: Infinity,
                    easing: 'linear'
                }
            )

            setTimeout(() => {
                icon.remove()
                animation.cancel()
            }, duration * 1000)
        }

        const interval = setInterval(createIcon, 1000)

        return () => {
            clearInterval(interval)
            if (container) {
                container.innerHTML = ''
            }
        }
    }, [])

    return <div ref={containerRef} className="absolute inset-0 overflow-hidden" />
}
