import { useState, useEffect } from 'react'

export function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const windowHeight = window.innerHeight
      
      // Calculate how much of the section has been scrolled through
      // 0 when top of section enters bottom of viewport
      // 1 when bottom of section leaves top of viewport
      const totalDist = rect.height + windowHeight
      const currentPos = windowHeight - rect.top
      const p = Math.max(0, Math.min(1, currentPos / totalDist))
      
      setProgress(p)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref])

  return progress
}

export function useStickyScrollProgress(ref) {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const scrollHeight = rect.height - window.innerHeight
      // Progress from 0 to 1 while the section is sticky
      const p = Math.max(0, Math.min(1, -rect.top / scrollHeight))
      setProgress(p)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [ref])

  return progress
}
