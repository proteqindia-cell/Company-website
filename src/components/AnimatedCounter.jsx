import { useEffect, useRef, useState } from 'react'

function AnimatedCounter({ target, suffix = '', duration = 1500 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const steps = 50
          const increment = target / steps
          const interval = duration / steps
          let current = 0

          const timer = setInterval(() => {
            current = Math.min(current + increment, target)
            setCount(current >= target ? target : Math.floor(current))
            if (current >= target) clearInterval(timer)
          }, interval)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target, duration])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export default AnimatedCounter
