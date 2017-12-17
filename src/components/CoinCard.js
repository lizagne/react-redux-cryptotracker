import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { images } from '../Utils/CoinIcons';

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => (

	<View style={ styles.container }>
		<Image 
			style={ styles.image }
			source={{ uri: images[symbol] }}/>
		<Text>{ symbol }</Text>
		<Text>{ coin_name }</Text>
		<Text>{ price_usd }$</Text>
		<Text>Change past 24 hours: { percent_change_24h }</Text>
		<Text>Change past week: { percent_change_7d }</Text>
	</View>
)

export default CoinCard;


const styles = StyleSheet.create({
	// container: {
	// 	display: flex,
	// },
	image: {
		width: 40,
		height: 40,
	},

})