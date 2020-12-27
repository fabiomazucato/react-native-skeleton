import styled from 'styled-components/native'
import { Animated } from 'react-native'

import Colors from '../../assets/design/colors'

const AnimatedViewStyle = styled.View`
	width: ${({ width }) => `${width}${Number.isInteger(width) ? 'px' : ''}`};
	height: ${({ height }) => `${height}${Number.isInteger(height) ? 'px' : ''}`};
	margin: ${({ mh, mv }) => `${mh}px ${mv}px`};
	background-color: ${Colors.PRIMARY.GRAY};
	border-radius: ${({ circle }) => (circle ? circle : 3)}px;

	${({ opacity }) => opacity && `opacity: ${opacity};`}
`

export const AnimatedView = Animated.createAnimatedComponent(AnimatedViewStyle)
