import { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import styles from './slider.module.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import { useDispatch } from 'react-redux';
import { actionSlidertImg } from '../../action';

export const Slider = ({ imageUrl, setImg }) => {
	const [isTargetImg, setTargetIsImg] = useState(false);

	const dispatch = useDispatch();

	const showSlide = (id) => {
		imageUrl.forEach((item, index) => {
			if (id === index) {
				item.target = true;
				setImg(item.imgSrc);
			} else {
				item.target = false;
			}
		});
		dispatch(actionSlidertImg(imageUrl));
		setTargetIsImg(!isTargetImg);
	};

	return (
		<>
			<Swiper
				navigation={true}
				slidesPerView={imageUrl.length > 2 ? 3 : imageUrl.length}
				slidesPerGroup={imageUrl.length > 2 ? 3 : imageUrl.length}
				modules={[Pagination, Navigation]}
			>
				{imageUrl.length > 1 &&
					imageUrl.map(({ imgSrc, target }, index) => {
						return (
							<SwiperSlide
								key={index}
								className={styles.swiper_slide}
								onClick={() => {
									showSlide(index);
								}}
							>
								<img
									className={
										target
											? `${styles.img_size} ${styles.border_red}`
											: `${styles.img_size} ${styles.border}`
									}
									src={imgSrc}
									alt={imgSrc}
								/>
							</SwiperSlide>
						);
					})}
			</Swiper>
		</>
	);
};
