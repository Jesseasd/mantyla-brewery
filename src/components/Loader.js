import "../style/Loader.css"
import imagesLoaded from "imagesloaded"
import { ReactComponent as ConeIcon } from "../assets/icons/cone.svg"
import { useEffect, useState, useRef } from "react"

export default function Loader({ children }) {
    const containerRef = useRef(null)

    // Track whether everything is loaded
    const [ready, setReady] = useState(false)

    useEffect(() => {
        // If ref is not attached, exit early
        if (!containerRef.current) return

        // Prevent scrolling
        document.documentElement.style.overflow = "hidden"
        document.body.style.overflow = "hidden"

        // IMAGES
        // ImagesLoaded library scans all <img> and CSS background images
        // inside the container and tells us when they're ready.
        let imagesDone = false
        const il = imagesLoaded(containerRef.current, { background: true })
        il.on("always", () => {
            imagesDone = true
            maybeFinish() // check if videos are also done
        })

        // VIDEOS
        // Find all <video> tags inside the container
        const videos = containerRef.current.querySelectorAll("video")
        let videosRemaining = videos.length

        // Mark video as loaded
        const markVideoLoaded = () => {
            videosRemaining -= 1
            maybeFinish() // Check if images are also done
        }

        // Attach listeners to each video
        videos.forEach((video) => {
            if (video.readyState >= 2) {
                // readyState >= 2 means it already has enough data to play
                markVideoLoaded()
            } else {
                // Wait until the video has loaded enough data
                video.addEventListener("loadeddata", markVideoLoaded, { once: true })
                // Or if loading fails, still count it as "done" so loader can finish
                video.addEventListener("error", markVideoLoaded, { once: true })
            }
        })

        // CHECK BOTH
        // Only finish when both images and videos are done
        function maybeFinish() {
            if (imagesDone && videosRemaining <= 0) finish()
        }

        // Called when everything is ready
        function finish() {
            setReady(true) // Hide loader
            // Restore scrolling
            document.documentElement.style.overflow = ""
            document.body.style.overflow = ""
        }

        // Cleanup when the component unmounts
        return () => {
            il.off("always")
            document.documentElement.style.overflow = ""
            document.body.style.overflow = ""
        }
    }, [])

    return (
        // This wrapper holds the content and the loader overlay
        <div ref={containerRef} className="page-wrapper">
            {/* Show loader until everything is loaded */}
            {!ready && (
                <div className="loader-overlay" role="status" aria-live="polite">
                    <ConeIcon className="loader-cone" />
                </div>
            )}
            {/* Always render children, but hidden behind loader until ready */}
            {children}
        </div>
    )
}
