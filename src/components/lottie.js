import React from "react"
import lottie from "lottie-web"
import * as moodbubble from "../images/5283-mood-bubble.json"

const Lottie = () => {
  React.useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector(".lottie-container"),
      animationData: moodbubble,
      renderer: "svg", // "canvas", "html"
      loop: true, // boolean
      autoplay: true, // boolean
      speed:0.1,
    })
  }, [])

  return (
    <div className="lottie-container" style={{ width: 200, height: 200 }}>
      <h4>See My Work</h4>
    </div>
  )
}

export default Lottie
