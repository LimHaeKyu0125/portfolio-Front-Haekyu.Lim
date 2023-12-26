import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import StackJS from '../../../assets/images/js_image.png';
import StackHtml from '../../../assets/images/html_image.png';
import StackCss from '../../../assets/images/css_image.png';
import StackJava from '../../../assets/images/java_image.png';
import StackSql from '../../../assets/images/sql_image.png';

//! require -> import 변경 (Webpack - tree shaking에 인해 빌드시 제거되는 이슈)

export default function FrontStackCoverFlow() {
  const stackItem = [
    {
      src: StackJS,
      alt: 'stack-js',
      title: 'JAVASCRIPT',
    },
    {
      src: StackHtml,
      alt: 'stack-html',
      title: 'HTML',
    },
    {
      src: StackCss,
      alt: 'stack-css',
      title: 'CSS',
    },
    {
      src: StackJava,
      alt: 'stack-java',
      title: 'JAVA',
    },
    {
      src: StackSql,
      alt: 'stack-sql',
      title: 'SQL',
    },
  ];
  return (
    <section className="stack-container">
      <Swiper
        className="stack-swiper"
        grabCursor={true}
        effect={'coverflow'}
        loop={true}
        centeredSlides={true}
        slidesPerView={2}
        modules={[EffectCoverflow]}
        coverflowEffect={{
          rotate: 60,
          slideShadows: false,
        }}
      >
        {stackItem.map((item, idx) => {
          return (
            <SwiperSlide key={idx} className="swiper-slide">
              <img src={item.src} alt={item.alt} />
              <span className="blind">{item.title}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="stack-description">
        <div className="stack-title">
          <p>FRONT-STACK</p>
        </div>
        <ul className="stack-content">
          <li>HTML</li>
          <li>CSS/SCSS</li>
          <li>JQUERY</li>
          <li>JAVASCRIPT</li>
        </ul>
      </div>
    </section>
  );
}
