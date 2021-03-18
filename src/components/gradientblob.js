import React from "react"
import DrawBlob from 'blob-animated';

// import { spline } from "@georgedoescode/spline";

const GradientBlob = () => {

      

  React.useEffect(() => {
    new DrawBlob({
      canvas: document.getElementById('blob'),
      speed: 900,
      scramble: 0.9,
      colorFunction: (ctx) => {
        const gradient = ctx.createLinearGradient(0, 6, 7, 0);
        gradient.addColorStop(0, 'rgba(275,110,0,1)');
        gradient.addColorStop(0.5, 'rgba(101,9,159,1)');
        gradient.addColorStop(1, 'rgba(20,38,114,1)');
        return gradient
      },
    });
  }, [])


  

  return (
    <>
    <canvas id="blob" />
    </>
  )
}

export default GradientBlob
