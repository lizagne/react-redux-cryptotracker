import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Header = () => (
	<View style={ styles.container }>
		<Text style={ styles.headerText }> Cryptocurrency App </Text>
	</View>
)

export default Header;

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		marginTop: 55
	},
	headerText: {
		fontWeight: 'bold',
		fontSize: 20
	}
})