import { useState, useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import { products } from "../data/Products"
import "../style/Product.css"
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactComponent as CottageIcon } from "../images/icons/cottage75.svg"
import { ReactComponent as PartyIcon } from "../images/icons/party75.svg"
import { ReactComponent as SaunaIcon } from "../images/icons/sauna75.svg"
import { ReactComponent as DiningIcon } from "../images/icons/dining75.svg"
import { ReactComponent as FireplaceIcon } from "../images/icons/fireplace75.svg"
import { ReactComponent as SunsetIcon } from "../images/icons/sunset75.svg"

// import juniperBg from "../images/beers/bg/juniper2.png"
// import juniperBottle from "../images/beers/no-bg/juniper1.png"

gsap.registerPlugin(useGSAP, ScrollTrigger)

export default function Product() {
    const component = useRef(null)
    const bottleRef = useRef(null)
    const infoRef = useRef(null)
    const amountRef = useRef(null)

    const { id } = useParams()
    const product = products.find(p => p.id === parseInt(id))
    const [showInput, setShowInput] = useState(false)
    const [customAmount, setCustomAmount] = useState("")

    const getIconsForFits = (fits) => {

        // Icon for each category
        const iconMap = [
            { keywords: ["Mökki ja metsä"], icon: <CottageIcon className='icon' /> },
            { keywords: ["Pimeät illat ja takkatuli"], icon: <FireplaceIcon className='icon' /> },
            { keywords: ["Ruokapöytään"], icon: <DiningIcon className='icon' /> },
            { keywords: ["Saunajuoman kuningas"], icon: <SaunaIcon className='icon' /> },
            { keywords: ["Kesäpäivän pelastaja"], icon: <SunsetIcon className='icon' /> },
            { keywords: ["Ystävien kanssa jaettavaksi"], icon: <PartyIcon className='icon' /> },
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
                    <div className='icon-slide-container'>
                        <div className='icon-slide icon-part'>{entry.icon}</div>
                        <div className='icon-slide text-part'>
                        <p className='icon-keyword'>{entry.keywords[0]}</p>
                        </div>
                    </div>
                </div>
            ))
    }

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(bottleRef.current, {
                y: 200,
                // opacity: 0,
                duration: 1.2,
                ease: "power3.out"
            })
            gsap.from(infoRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.4,
                ease: "power2.out",
                onComplete: () => {
                    // Creates scrolltrigger after animation completes
                    ScrollTrigger.create({
                        trigger: ".product-page",
                        start: "top+=100",
                        end: "center center",
                        pin: infoRef.current,
                        markers: true,
            })
                }
            })
            gsap.from(amountRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.6,
                ease: "power2.out"
            })

        }, component)

        return () => ctx.revert()
    }, [])


    if (!product) {
        return <div>Tuotetta ei löytynyt.</div>
    }

    return (
        <div className="product-page" ref={component}>
            <div className="product-page-container">
                <div className="product-page-info" ref={infoRef}>
                    <div className="product-page-info-wrapper">
                        <h1>{product.name}</h1>
                        <p>{product.price}€ / {product.volume}L</p>
                        <p className="alcohol">{product.alcohol}%</p>
                    </div>
                </div>
                <div className="product-page-image-wrapper">
                    {/* <img className="product-page-image" src={product.image2} alt={product.name} /> */}
                    <img className="product-page-bg-image" src={product.bg} alt={product.name} />
                    <img className="product-page-bottle-image" src={product.bottle} alt={product.name} ref={bottleRef} />
                </div>
                <div className="add-to-cart-section" ref={amountRef}>
                    <div className="amount-wrapper">
                        <p className="amount-label">Montako laitetaan?</p>
                        <div className={`amount-section ${showInput ? "expanded" : ""}`}>
                            <p className="amount-option" value={1}>1</p>
                            <p className="amount-option" value={2}>2</p>
                            <p className="amount-option" value={4}>4</p>
                            <p className="amount-option" value={6}>6</p>
                            <p className="amount-option" value={8}>8</p>
                            <p className="amount-option" value={12}>12</p>
                            <p className="amount-option" value={18}>18</p>
                            <p className="amount-option" value={24}>24</p>

                            <div className="input-container">
                                <p className="input-label">Valitte itte!</p>
                                <div className="custom-input-wrapper">
                                    <button className="arrow-button" onClick={() => setCustomAmount(prev => Math.max(1, Number(prev || 0) - 1))}>
                                        <p className="amount-minus">-</p>
                                    </button>
                                    <input
                                        className={`custom-input ${showInput ? "visible" : ""}`}
                                        type="number"
                                        min="1"
                                        value={customAmount}
                                        onChange={(e) => setCustomAmount(e.target.value)}
                                    />
                                    <button className="arrow-button" onClick={() => setCustomAmount(prev => Math.max(1, Number(prev || 0) + 1))}>
                                        <p className="amount-plus">+</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="plus-container">
                        <p className="plus" onClick={() => setShowInput(!showInput)}>
                            {showInput ? "-" : "+"}
                        </p>
                    </div>
                    <button className="add-to-cart-button">
                        <div className="slide-container">
                            <span className="text-default">Maistuuko?</span>
                            <span className="text-hover">Maistuu!</span>
                        </div>
                    </button>
                </div>
            </div>
            <div className="product-page-details">
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
