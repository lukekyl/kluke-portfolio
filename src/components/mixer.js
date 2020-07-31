import React from "react"
import mixitup from "mixitup"

const Mixer = () => {
    // MixItUp Settings
    const containerEl = document.querySelector(".project-grid")

    if (containerEl) {
    const mixer = mixitup(containerEl, {
        selectors: {
        target: ".project",
        },
        animation: {
        duration: 500,
        nudge: true,
        reverseOut: false,
        effects: "fade translateZ(-100px) ease",
        },
    })

    mixer.filter(".dev, .frontend, .backend, .js, .react, .rails, .design")
    } else {
        console.log('No containerEl!')
    }

    return <></>
}


export default Mixer
