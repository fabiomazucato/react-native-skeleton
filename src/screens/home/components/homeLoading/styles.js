import styled from 'styled-components/native'

import Colors from '../../../../assets/design/colors'

export const Container = styled.View`
	flex: 1;
	background: ${Colors.PRIMARY.WHITE};
`

export const WrapperHeader = styled.View`
	width: 100%;
	height: 190px;
	padding: 40px 0 0;
	align-items: center;
	justify-content: center;
	background: ${Colors.SECONDARY.GRAY};
`
export const Wrapper = styled.View`
	flex: 1;
	padding: 30px 20px 0 20px;
`

export const Section = styled.View`
	width: 100%;
	height: 100px;
`
