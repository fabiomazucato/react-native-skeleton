import { createElement, useState, useEffect } from 'react'

import View from './view'

const HomeContainer = () => {
	const [isLoading, setIsloading] = useState(true)

	const handleTimeLoading = () => {
		setTimeout(() => {
			// setIsloading(false)
		}, 3000)
	}

	useEffect(handleTimeLoading, [])

	const viewProps = {
		isLoading
	}

	return createElement(View, viewProps)
}

export default HomeContainer
