import React from 'react'

import { AnimatedView } from './style'

const Skeleton = (props) => {
	const {
		animation,
		marginHorizontal,
		marginVErtical,
		circle,
		height,
		width
	} = props

	return (
		<AnimatedView
			opacity={animation}
			width={width}
			height={height}
			mh={marginHorizontal}
			mv={marginVErtical}
			circle={circle}
		/>
	)
}

export default Skeleton
