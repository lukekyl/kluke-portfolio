import React from "react"
import DrawBlob from 'blob-animated';

// import { spline } from "@georgedoescode/spline";

const GradientBlob = () => {

      

  React.useEffect(() => {
    const blob = new DrawBlob({
      canvas: document.getElementById('blob'),
      speed: 200,
      scramble: 0.1,
      colorFunction: (ctx) => {
        const gradient = ctx.createLinearGradient(25, 45, 30, 40);
        gradient.addColorStop(0, 'rgba(254,121,0,1)');
        gradient.addColorStop(0.5, 'rgba(101,9,159,1)');
        gradient.addColorStop(1, 'rgba(39,2,126,1)');
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
