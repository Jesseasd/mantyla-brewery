import "../style/Loader.css"
import { ReactComponent as ConeIcon } from "../assets/icons/cone.svg"
import { useEffect } from "react"

export default function Loader() {
    useEffect(() => {
        document.documentElement.style.overflow = "hidden"
        document.body.style.overflow = "hidden"

        return () => {
            document.documentElement.style.overflow = ""
            document.body.style.overflow = ""
        }
    }, [])

    return (
        <div className="loader-overlay" role="status" aria-live="polite">
            <ConeIcon className="loader-cone" />
        </div>
    )
}
