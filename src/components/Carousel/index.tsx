import React, { useCallback, useRef } from 'react';
import LeftArrowIcon from '../../assets/img/svg/carousel/leftArrow.svg';
import RightArrowIcon from '../../assets/img/svg/carousel/rightArrow.svg';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/pagination';
import './style.scss';

const CustomNavigation = ({ children }: any) => {
  const swiper = useSwiper();
  return (
    <div className="carousel__right">
      <div onClick={() => swiper.slidePrev()} className="carousel__left-icon">
        <LeftArrowIcon />
      </div>
      {children}
      <div onClick={() => swiper.slideNext()} className="carousel__right-icon">
        <RightArrowIcon />
      </div>
    </div>
  );
};

const Carousel = () => {
  // const swiper = useSwiper();

  const pagination = {
    clickable: true,
    renderBullet: function (index: any, className: any) {
      return '<span class="' + className + '">' + '</span>';
    },
  };

  return (
    <div className="carousel">
      <div className="container">
        <div className="carousel__inner">
          <Swiper
            slidesPerView={1}
            pagination={pagination}
            modules={[Pagination]}
            className="carouserSwiper"
          >
            <SwiperSlide className="carousel__elem">
              <div className="carousel__left">
                <div className="carousel__title">Мы - FoodTech компания</div>
                <div className="carousel__title-second">
                  Мобильное приложение
                </div>
                <div className="carousel__elem-subtitle">
                  Нашим гостям удобно
                  <br /> заказывать любимые блины.
                </div>
                <button className="carousel__button">
                  <span>Скачать мобильное приложение</span>
                </button>
              </div>
              <CustomNavigation>
                <img
                  src="./carousel/1.png"
                  alt=""
                  className="carousel__image"
                />
              </CustomNavigation>
              <button className="carousel__button-mobile">
                <span>Скачать приложение</span>
              </button>
            </SwiperSlide>
            <SwiperSlide className="carousel__elem">
              <div className="carousel__left">
                <div className="carousel__title">Мы - FoodTech компания</div>
                <div className="carousel__title-second">SMM</div>
                <div className="carousel__elem-subtitle">
                  Аккаунты в социальных сетях с общим количеством
                  <br /> подписок более 200 тыс. человек.
                </div>
                <button className="carousel__button">
                  <span>Подпишись на наши новости</span>
                </button>
              </div>
              <CustomNavigation>
                <img
                  src="./carousel/2.png"
                  alt=""
                  className="carousel__image"
                />
              </CustomNavigation>
              <button className="carousel__button-mobile">
                <span>Подписаться на новости</span>
              </button>
            </SwiperSlide>
            <SwiperSlide className="carousel__elem">
              <div className="carousel__left">
                <div className="carousel__title">Мы - FoodTech компания</div>
                <div className="carousel__title-second">Приложение курьера</div>
                <div className="carousel__elem-subtitle">
                  Наши курьеры приедут без опозданий.
                </div>
                <button className="carousel__button">
                  <span>Подпишись на наши новости</span>
                </button>
              </div>
              <CustomNavigation>
                <img
                  src="./carousel/3.png"
                  alt=""
                  className="carousel__image"
                />
              </CustomNavigation>
              <button className="carousel__button-mobile">
                <span>Подписаться на новости</span>
              </button>
            </SwiperSlide>
            <SwiperSlide className="carousel__elem">
              <div className="carousel__left">
                <div className="carousel__title">Мы - FoodTech компания</div>
                <div className="carousel__title-second">Блинбери Академия</div>
                <div className="carousel__elem-subtitle">
                  Наши сотрудники точно знают
                  <br /> и соблюдают стандарты.
                </div>
                <button className="carousel__button">
                  <span>Подпишись на наши новости</span>
                </button>
              </div>
              <CustomNavigation>
                <img
                  src="./carousel/4.png"
                  alt=""
                  className="carousel__image"
                />
              </CustomNavigation>
              <button className="carousel__button-mobile">
                <span>Подписаться на новости</span>
              </button>
            </SwiperSlide>
            <SwiperSlide className="carousel__elem">
              <div className="carousel__left">
                <div className="carousel__title">Мы - FoodTech компания</div>
                <div className="carousel__title-second">
                  Аналитика для ресторана
                </div>
                <div className="carousel__elem-subtitle">
                  Наши партнеры знают все о своем бизнесе.
                </div>
                <button className="carousel__button">
                  <span>Подпишись на наши новости</span>
                </button>
              </div>
              <CustomNavigation>
                <img
                  src="./carousel/5.png"
                  alt=""
                  className="carousel__image"
                />
              </CustomNavigation>
              <button className="carousel__button-mobile">
                <span>Подписаться на новости</span>
              </button>
            </SwiperSlide>
            <SwiperSlide className="carousel__elem">
              <div className="carousel__left">
                <div className="carousel__title">Мы - FoodTech компания</div>
                <div className="carousel__title-second">Видеоконтроль</div>
                <div className="carousel__elem-subtitle">
                  У нас собственная служба видеонаблюдения.
                  <br /> Все процессы всегда под контролем.
                </div>
                <button className="carousel__button">
                  <span>Подпишись на наши новости</span>
                </button>
              </div>
              <CustomNavigation>
                <img
                  src="./carousel/6.png"
                  alt=""
                  className="carousel__image"
                />
              </CustomNavigation>
              <button className="carousel__button-mobile">
                <span>Подписаться на новости</span>
              </button>
            </SwiperSlide>
            <SwiperSlide className="carousel__elem">
              <div className="carousel__left">
                <div className="carousel__title">Мы - FoodTech компания</div>
                <div className="carousel__title-second">
                  Сезонная смена меню
                </div>
                <div className="carousel__elem-subtitle">
                  Следуем современным тенденциям
                  <br /> и делаем модные продукты.
                </div>
                <button className="carousel__button">
                  <span>Скачать мобильное приложение</span>
                </button>
              </div>
              <CustomNavigation>
                <img
                  src="./carousel/7.png"
                  alt=""
                  className="carousel__image"
                />
              </CustomNavigation>
              <button className="carousel__button-mobile">
                <span>Скачать приложение</span>
              </button>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
