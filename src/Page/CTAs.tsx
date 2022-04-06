import React from 'react'

type Props = {}

const CTAs = (props: Props) => {
  return (
    <div className="mx-auto container flex justify-center items-center py-12 px-4 sm:px-6 2xl:px-0">
            <div className="flex flex-col lg:flex-row justify-center items-center space-y-6 lg:space-y-0">
                <div className="w-80 sm:w-auto flex flex-col justify-start items-start">
                    <div>
                        <p className="text-3xl xl:text-4xl font-semibold leading-9 text-gray-800">Renovate your smartphone</p>
                    </div>
                    <div className="mt-4 lg:w-4/5 xl:w-3/5">
                        <p className="text-base leading-6 text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>
                    <div className="mt-16 w-full">
                        <button className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-72 h-14 text-white hover:bg-gray-700">
                            <p className="text-xl font-medium leading-5">See More</p>
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.66663 16H25.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 21.3333L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 10.6667L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row jusitfy-center items-center sm:space-x-5 xl:space-x-8 space-y-4 sm:space-y-0">
                    <div>
                        <img className="hidden lg:block w-90" src="https://cdnimg.vietnamplus.vn/uploaded/xtsqr/2021_09_15/iphone13promax1.jpeg" alt="sofa" />
                        <img className="w-80 sm:w-auto lg:hidden" src="https://i.ibb.co/QvxmJjB/olena-sergienko-gx-KL334b-UK4-unsplash-1-1.png" alt="sofa" />
                    </div>
                    <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-0 sm:space-y-5 lg:space-y-5 xl:space-y-8">
                        <div>
                            <img className="hidden lg:block" src="https://cdn.tgdd.vn/Files/2021/08/08/1373873/iphone13mauxanh_03-_1792x1280-800-resize.jpg" alt="chairs" />
                            <img className="w-80 sm:w-auto lg:hidden" src="https://i.ibb.co/r0rvcCh/behzad-ghaffarian-nh-Wg-ZNV85-LQ-unsplash-1-1-1.png" alt="chairs" />
                        </div>
                        <div>
                            <img className="hidden lg:block" src="https://images.fpt.shop/unsafe/filters:quality(90)/fptshop.com.vn/uploads/images/tin-tuc/143823/Originals/iphone-13-va-iphone-13-pro-bo-sung-tuy-chon-mau-xanh-luc-an-tuong-5.jpeg" alt="chairs" />
                            <img className="w-80 sm:w-auto lg:hidden" src="https://i.ibb.co/0BFt400/nirzar-pangarkar-Csw-Kf-D546-Z8-unsplash-2.png" alt="chairs" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default CTAs