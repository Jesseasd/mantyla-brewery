import "../style/Loader.css"
import { ReactComponent as ConeSvg } from "../images/pine-cone/cone.svg"

export default function Loader({ hidden = false }) {
  return (
    <div 
        // If hidden = true -> trigger .hidden fade-out
        className={`loader ${hidden ? "hidden" : ""}`} 
        role="status" 
    >
        <ConeSvg aria-hidden="true" className="loaderSvg" />
    </div>
  )
}
