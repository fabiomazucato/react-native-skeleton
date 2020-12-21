import React from 'react'
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native'

import {
	Header,
	LearnMoreLinks,
	Colors,
	DebugInstructions,
	ReloadInstructions
} from 'react-native/Libraries/NewAppScreen'

import HomeLoading from './components/homeLoading'

import styles from './styles'

const Home = (props) => {
	const { isLoading } = props

	return (
		<>
			<StatusBar barStyle='dark-content' />
			{isLoading ? (
				<HomeLoading />
			) : (
				<SafeAreaView>
					<ScrollView
						contentInsetAdjustmentBehavior='automatic'
						style={styles.scrollView}
					>
						<Header />
						{global.HermesInternal == null ? null : (
							<View style={styles.engine}>
								<Text style={styles.footer}>Engine: Hermes</Text>
							</View>
						)}
						<View style={styles.body}>
							<View style={styles.sectionContainer}>
								<Text style={styles.sectionTitle}>Step One</Text>
								<Text style={styles.sectionDescription}>
									Edit <Text style={styles.highlight}>App.js</Text> to change
									this screen and then come back to see your edits.
								</Text>
							</View>
							<View style={styles.sectionContainer}>
								<Text style={styles.sectionTitle}>See Your Changes</Text>
								<Text style={styles.sectionDescription}>
									<ReloadInstructions />
								</Text>
							</View>
							<View style={styles.sectionContainer}>
								<Text style={styles.sectionTitle}>Debug</Text>
								<Text style={styles.sectionDescription}>
									<DebugInstructions />
								</Text>
							</View>
							<View style={styles.sectionContainer}>
								<Text style={styles.sectionTitle}>Learn More</Text>
								<Text style={styles.sectionDescription}>
									Read the docs to discover what to do next:
								</Text>
							</View>
							<LearnMoreLinks />
						</View>
					</ScrollView>
				</SafeAreaView>
			)}
		</>
	)
}

export default Home
