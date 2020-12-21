import { createElement, useState } from 'react'
import { Animated, Easing } from 'react-native'

import View from './view'

const SkeletonContainer = (props) => {
	const { dimensions = [0, 0], circle = null, margin = [0, 0] } = props

	const [animation] = useState(new Animated.Value(0.1))

	Animated.loop(
		Animated.sequence([
			Animated.timing(animation, {
				duration: 900,
				toValue: 0.8,
				easing: Easing.linear,
				useNativeDriver: true
			}),
			Animated.timing(animation, {
				duration: 900,
				toValue: 0.3,
				easing: Easing.linear,
				useNativeDriver: true
			})
		])
	).start()

	const viewProps = {
		animation,
		marginHorizontal: margin[0],
		marginVErtical: margin[1],
		circle,
		width: dimensions[0],
		height: dimensions[1]
	}

	return createElement(View, viewProps)
}

export default SkeletonContainer
