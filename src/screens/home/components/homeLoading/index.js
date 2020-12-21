import React from 'react'
import { FlatList } from 'react-native'

import Skeleton from '../../../../components/skeleton'

import { Container, WrapperHeader, Wrapper, Section } from './styles'

const HomeLoading = () => {
	return (
		<Container>
			<WrapperHeader>
				<Skeleton dimensions={[300, 40]} margin={[0, 0]} circle={5} />
			</WrapperHeader>

			<FlatList
				data={[{ id: 'load0' }, { id: 'load1' }, { id: 'load2' }]}
				keyExtractor={(item) => item.id}
				renderItem={() => (
					<Wrapper>
						<Section>
							<Skeleton dimensions={[150, 30]} margin={[0, 0]} />
							<Skeleton dimensions={['100%', 50]} margin={[15, 0]} />
						</Section>
					</Wrapper>
				)}
			/>
		</Container>
	)
}

export default HomeLoading
