import React from 'react'
import {NavLink} from 'react-router-dom'

type Props = {}

const Slider = (props: Props) => {
  return (
            <div id="default-carousel" className="relative" data-carousel="static">
            {/* Carousel wrapper */}
            <div className="overflow-hidden relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
                {/* Item 1 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                    <span className="absolute top-1/2 left-1/2 text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                    <img src="https://www.bechtle.com/dam/jcr:a0a76a52-6182-4496-b7f8-0d0553430049/cw42_mainbanner_apple_iphone12-eu.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                </div>
                {/* Item 2 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="http://www.unitedgadgetstore.co.uk/image/catalog/Smartphone-pics/apple/iphone%207%20plus%20-%2032GB/category_banner_ip7_plus_copy_3.jpg" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                </div>
                {/* Item 3 */}
                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img src="https://media.idownloadblog.com/wp-content/uploads/2016/09/Apple-This-is-iPhone-7-banner.png" className="block absolute top-1/2 left-1/2 w-full -translate-x-1/2 -translate-y-1/2" alt="..." />
                </div>
            </div>
            {/* Slider indicators */}
            <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to={0} />
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to={1} />
                <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to={2} />
            </div>
            {/* Slider controls */}
            <button type="button" className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-prev>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                <span className="hidden">Previous</span>
                </span>
            </button>
            <button type="button" className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none" data-carousel-next>
                <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                <span className="hidden">Next</span>
                </span>
            </button>
            </div>


        // <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        //     <div className="carousel-inner">
        //         <div className="carousel-item active">
        //             <img className="d-block w-100" src="https://media.idownloadblog.com/wp-content/uploads/2016/09/Apple-This-is-iPhone-7-banner.png" alt="First slide" />
        //         </div>
        //         <div className="carousel-item">
        //             <img className="d-block w-100" src="http://www.unitedgadgetstore.co.uk/image/catalog/Smartphone-pics/apple/iphone%207%20plus%20-%2032GB/category_banner_ip7_plus_copy_3.jpg" alt="Second slide" />
        //         </div>
        //         <div className="carousel-item">
        //             <img className="d-block w-100" src="https://www.bechtle.com/dam/jcr:a0a76a52-6182-4496-b7f8-0d0553430049/cw42_mainbanner_apple_iphone12-eu.jpg" alt="Third slide" />
        //         </div>
        //     </div>
        //     <NavLink className="carousel-control-prev" to="#carouselExampleControls" role="button" data-slide="prev">
        //         <span className="carousel-control-prev-icon" aria-hidden="true" />
        //         <span className="sr-only">Previous</span>
        //     </NavLink>
        //     <NavLink className="carousel-control-next" to="#carouselExampleControls" role="button" data-slide="next">
        //         <span className="carousel-control-next-icon" aria-hidden="true" />
        //         <span className="sr-only">Next</span>
        //     </NavLink>
        // </div>

  )
}
export default Slider