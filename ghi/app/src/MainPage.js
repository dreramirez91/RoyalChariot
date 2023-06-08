import * as Icons from "react-icons/fa"
import { useState, useEffect } from "react"

function MainPage() {
  const images = ["https://images.pistonheads.com/nimg/47147/mceu_53280024311682692120552.jpg", "https://www.speednik.com/files/2022/03/diesel-swapped-49-dodge-power-wagon-sold-for-405000-at-auction-2022-03-03_21-41-39_166388.jpeg", "https://www.supercars.net/blog/wp-content/uploads/2019/12/carpixel.net-2002-lotus-esprit-v8-us-42153-wide.jpg",]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="px-4 py-5 my-5 text-center">
      <h1 className="display-5 fw-bold">CarCar<Icons.FaCar style={{ marginLeft: '2px' }} /></h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          The premiere solution for automobile dealership
          management!
        </p>
      </div>
      <div>
        <img className="img-fluid max-width-100 height-auto" src={images[currentImageIndex]} />
      </div>
    </div>
  );
}

export default MainPage;
