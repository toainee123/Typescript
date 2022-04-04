import React from 'react'
import {NavLink} from 'react-router-dom'

type Props = {}

const Slider = (props: Props) => {
  return (
        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100" src="https://media.idownloadblog.com/wp-content/uploads/2016/09/Apple-This-is-iPhone-7-banner.png" alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="http://www.unitedgadgetstore.co.uk/image/catalog/Smartphone-pics/apple/iphone%207%20plus%20-%2032GB/category_banner_ip7_plus_copy_3.jpg" alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src="https://www.bechtle.com/dam/jcr:a0a76a52-6182-4496-b7f8-0d0553430049/cw42_mainbanner_apple_iphone12-eu.jpg" alt="Third slide" />
                </div>
            </div>
            <NavLink className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="sr-only">Previous</span>
            </NavLink>
            <NavLink className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="sr-only">Next</span>
            </NavLink>
        </div>

  )
}
export default Slider