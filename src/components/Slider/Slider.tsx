import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import './slider.scss'
type Props = {}
const Slider = (props: Props) => {
    return (
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
                <div className="slide">
                    <img src="/images/article-id1.jpg" alt="plant" />{' '}
                    <div className="slide-info">
                        <h4 className="slide-title">GREEN CORNER IN MY HOME</h4>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <img src="/images/article-id2.jpg" alt="plant" />
                    <div className="slide-info">
                        <h4 className="slide-title">MY BABY CACTUS</h4>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <img src="/images/article-id3.jpg" alt="plant" />
                    <div className="slide-info">
                        <h4 className="slide-title">
                            AMAZING NATURE OF IRELAND
                        </h4>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <img src="/images/article-id4.jpg" alt="plant" />
                    <div className="slide-info">
                        <h4 className="slide-title">
                            TWINKLE TWINKLE LITTLE STAR
                        </h4>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div className="slide">
                    <img src="/images/article-id5.jpg" alt="plant" />
                    <div className="slide-info">
                        <h4 className="slide-title">DAILY READING LISTS</h4>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    )
}
export default Slider
