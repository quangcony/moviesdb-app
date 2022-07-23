import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'

import tmdpApi, { category } from '../Api/tmdpApi'
import { Swiper, SwiperSlide } from 'swiper/react'

import classNames from 'classnames/bind'
import styles from './MovieList.module.scss'
import Card from '../Card'

const cx = classNames.bind(styles)

const MovieList = (props) => {
  const [items, setItems] = useState([])

  useEffect(() => {
    const getList = async () => {
      let response = null
      const params = {}

      if (props.type !== 'similar') {
        switch (props.category) {
          case category.movie:
            response = await tmdpApi.getMovieList(props.type, { params })
            break
          default:
            response = await tmdpApi.getTvList(props.type, { params })
        }
      } else {
        response = await tmdpApi.similar(props.category, props.id)
      }
      setItems(response.results)
    }

    getList()
  }, [props.category, props.type, props.id])

  return (
    <div className={cx('movie-list')}>
      <Swiper grabCursor={true} spaceBetween={10} slidesPerView={'auto'}>
        {items.map((item, i) => (
          <SwiperSlide key={i} className={cx('swiper-slide')}>
            <Card item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default MovieList
