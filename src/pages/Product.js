import { useState, useLayoutEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { products } from "../data/Products"
import "../style/Product.css"
import "../style/Loader.css"
import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ReactComponent as PillIcon } from "../assets/icons/pill.svg"
import { ReactComponent as SaunaIcon } from "../assets/icons/sauna.svg"
import { ReactComponent as DiningIcon } from "../assets/icons/dining.svg"
import { ReactComponent as SunsetIcon } from "../assets/icons/sunset.svg"
import { ReactComponent as CampfireIcon } from "../assets/icons/campfire.svg"
import { useCart } from "../contexts/CartContext"
import Loader from "../components/Loader"

// Register gsap
gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Product() {
    // Refs for connecting gsap animations to elements
    const component = useRef(null)
    const bottleRef = useRef(null)
    const infoRef = useRef(null)
    const amountRef = useRef(null)
    const bgRef = useRef(null)

    // Image loading state
    const [imagesLoaded, setImagesLoaded] = useState(false)
    const toLoadCount = 2       // Two images to load
    const loadedCountRef = useRef(0)    // How many images have finished loading

    // When all images have loaded -> setImagesLoaded(true)
    const markLoaded = () => {
        loadedCountRef.current += 1
        if (loadedCountRef.current >= toLoadCount) setImagesLoaded(true)
    }

    // Hook for adding items to cart (from cartContext)
    const { addToCart } = useCart()

    // Get product id from the url
    const { id } = useParams()
    // Find the product that matches the id
    const product = products.find(p => p.id === parseInt(id))

    // UI state for handling quantities
    const [showInput, setShowInput] = useState(false)       // Toggle custom input visibility
    const [customAmount, setCustomAmount] = useState(1)     // Custom quantity value
    const [selectedAmount, setSelectedAmount] = useState(1)

    // Maps product fits to icons
    const getIconsForFits = (fits) => {

        // Icon for each category
        const iconMap = [
            { keywords: ["Darran selättäjä"], icon: <PillIcon className='icon pill-icon' /> },
            { keywords: ["Nuotion äärelle"], icon: <CampfireIcon className='icon' /> },
            { keywords: ["Ruokapöytään"], icon: <DiningIcon className='icon' /> },
            { keywords: ["Saunajuoman kuningas"], icon: <SaunaIcon className='icon' /> },
            { keywords: ["Kesäpäivän pelastaja"], icon: <SunsetIcon className='icon' /> }
        ]

        // Looks through a list of possible icons and returns those that matches the situation
        return iconMap
            .filter(entry =>
                entry.keywords.some(kw =>
                    fits.some(fit => fit.includes(kw))
                )
            )
            .map((entry, i) => (
                <div
                    className='icon-wrapper'
                    key={i}
                    onClick={(e) => e.currentTarget.classList.toggle("active")}
                >
                    <span className="icon-label">{entry.keywords[0]}</span>
                    {entry.icon}
                </div>
            ))
    }

    // Handles selecting one of the preset amounts
    const handleAmountClick = (value) => {
        if (selectedAmount === value) {
            // If the same amount is clicked -> deselect and clear input
            setSelectedAmount(null)
            setCustomAmount("")
        } else {
            // Otherwise, select it
            setSelectedAmount(value)
            // If input is visible, also sync its value
            if (showInput) {
                setCustomAmount(String(value))
            }
        }
    }

    // Run gsap animations once on mount
    useLayoutEffect(() => {
        if (!imagesLoaded) return   // Wait for images to load
        let ctx = gsap.context(() => {
            // Place bottle in the center first
            gsap.set(bottleRef.current, {
                xPercent: -50,
                yPercent: -50,
                left: "50%",
                top: "53%"
            })

            // Bottle slide-in animation
            gsap.from(bottleRef.current, {
                y: 200,
                duration: 1.2,
                ease: "power3.out"
            })

            // Info section fade + pin when scrolling
            gsap.from(infoRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.4,
                ease: "power2.out",
                onComplete: () => {
                    ScrollTrigger.create({
                        trigger: ".product-page-container",
                        start: "top+=100 top",
                        end: () =>
                            window.innerHeight < 700
                                ? "bottom+=150 center"
                                : "bottom+=100 center",
                        pin: infoRef.current,
                        markers: false
                    })
                }
            })

            // Quantity section fade in
            gsap.from(amountRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.6,
                ease: "power2.out"
            })
        }, component)

        // Cleanup gsap on unmount
        return () => ctx.revert()
    }, [imagesLoaded])

    // If no product found for this id -> fallback
    if (!product) {
        return <div>Tuotetta ei löytynyt.</div>
    }

    return (
        <div className={`product-page ${!imagesLoaded ? "is-loading" : ""}`} ref={component}>
            {!imagesLoaded && (
                <Loader />
            )}
            
            <div className="product-page-container">
                <div className="product-page-info" ref={infoRef}>
                    <h1>
                        {(() => {
                            // If product name is long, break into two lines
                            const words = product.name.split(" ")
                            if (words.length > 2) {
                                return (
                                    <>
                                        {words[0]}
                                        <br />
                                        {words.slice(1).join(" ")}
                                    </>
                                )
                            }
                            return product.name
                        })()}
                    </h1>
                    <div className="vol-alc">
                        <p>{product.price.toFixed(2)}€ / {product.volume}L</p>
                        <p className="alcohol">{product.alcohol}%</p>
                    </div>
                </div>
                <div className="product-page-image-wrapper">
                    <picture>
                        <source srcSet={product.bg.avif} type="image/avif" />
                        <source srcSet={product.bg.webp} type="image/webp" />
                        <img
                            ref={bgRef}
                            className="product-page-bg-image" 
                            src={product.bg} 
                            alt={product.name} 
                            loading="eager"
                            fetchpriority="high"
                            decoding="async"
                            onLoad={markLoaded}
                            onError={markLoaded}
                        />
                    </picture>
                    <img 
                        className="product-page-bottle-image" 
                        src={product.bottle} 
                        alt={product.name} 
                        ref={bottleRef}
                        onLoad={markLoaded}
                        onError={markLoaded}
                    />
                </div>
                <div className="add-to-cart-section" ref={amountRef}>
                    <div className="amount-wrapper">
                        <div
                            className={`amount-section ${showInput ? "expanded" : ""}`}
                            onClick={() => {
                                // On small screen -> expand custom input
                                if (window.innerWidth <= 1000 && !showInput) setShowInput(true)
                            }}
                        >
                            {/* Presets */}
                            {[1, 2, 4, 6, 8, 12, 18, 24].map(num => (
                                <p
                                    key={num}
                                    // If the current num is the one user selected -> add "selected" classname
                                    className={`amount-option ${selectedAmount === num ? "selected" : ""}`}
                                    onClick={() => handleAmountClick(num)}
                                >
                                    {num}
                                </p>
                            ))}

                            <div className="input-container">
                                <div
                                    className="custom-input-wrapper"
                                >
                                    <button
                                        className="arrow-button"
                                        onClick={() => {
                                            // Take current customAmount or 0 if it's empty / null
                                            // Convert to number and subtract 1
                                            const value = Math.max(1, Number(customAmount || 0) - 1)
                                            setCustomAmount(value)
                                            setSelectedAmount(value)
                                        }}
                                        aria-label="decrease"
                                    >
                                        <p className="amount-minus">-</p>
                                    </button>
                                    <input
                                        id="custom-input"
                                        className={`custom-input ${showInput ? "visible" : ""}`}
                                        type="number"
                                        min="1"
                                        value={customAmount}
                                        onChange={(e) => {
                                            setCustomAmount(e.target.valueAsNumber)
                                            setSelectedAmount(e.target.valueAsNumber)
                                        }}
                                    />
                                    <button
                                        className="arrow-button"
                                        onClick={() => {
                                            // Take current customAmount or 0 if it's empty / null
                                            // Convert to number and add 1
                                            const value = Math.max(1, Number(customAmount || 0) + 1)
                                            setCustomAmount(value)
                                            setSelectedAmount(value)
                                        }}
                                        aria-label="increase"
                                    >
                                        <p className="amount-plus">+</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="plus-container">
                        <p
                            className="plus"
                            onClick={() => {
                                if (!showInput && selectedAmount) {
                                    setCustomAmount(selectedAmount)
                                }
                                setShowInput(!showInput)
                            }}
                        >
                            {showInput ? "-" : "+"}
                        </p>
                    </div>
                    <button
                        className="add-to-cart-button"
                        // If preset is not selected and there is no amount inside input -> disable button
                        disabled={!selectedAmount && customAmount < 1}
                        onClick={() => {
                            const quantity = showInput && customAmount
                                ? parseInt(customAmount)
                                : selectedAmount

                            if (!quantity || quantity < 1) return

                            addToCart(product, quantity)
                        }}
                    >
                        <div className="slide-container">
                            <span className="text-default">Maistuuko?</span>
                            <span className="text-hover">Maistuu!</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="product-page-details">
                <div className="product-page-details-info-wrapper">
                    <h1>{product.name}</h1>
                    <div className="vol-alc">
                        <p>{product.price.toFixed(2)}€ / {product.volume}L</p>
                        <p className="alcohol">{product.alcohol}%</p>
                    </div>
                </div>
                <div className="info-wrapper">
                    <p>{product.story}</p>
                    <div className='fits'>
                        {getIconsForFits(product.fits)}
                    </div>
                </div>
                <div className="product-page-details-image-wrapper">
                    <img className="prduct-page-details-bottle-image" src={product.bottle} alt={product.name} />
                </div>
            </div>
        </div>
    )
}
