import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
	<View style={ styles.container }>
		<Text style={ styles.headerText }> Cryptocurrency Tracker </Text>
	</View>
)

export default Header;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingTop: 35,
		width: '100%',
		paddingBottom: 20,
		backgroundColor: '#f9b636'
	},

	headerText: {
		fontWeight: 'bold',
		fontSize: 20
	}
})