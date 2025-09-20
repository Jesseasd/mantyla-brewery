import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from "@studio-freight/react-lenis"

const ScrollToTop = () => {
    const { pathname } = useLocation()
    const lenis = useLenis()

    useEffect(() => {
        if (lenis) {
            // If lenis is active -> jump instantly to top on every route change
            lenis.scrollTo(0, { immediate: true })
        } else {
            // Fallback if lenis is not mounted
            window.scrollTo(0, 0)
        }
    }, [pathname, lenis])   // Runs everytime pathname changes

    // This component doesn't render anything visible
    return null
}

export default ScrollToTop