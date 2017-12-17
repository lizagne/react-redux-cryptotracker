import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { images } from '../Utils/CoinIcons';

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => (

	<View style={ styles.container }>
		<View>
			<Image 
				style={ styles.image }
				source={{ uri: images[symbol] }}/>
		</View>

		<View style={ styles.titleContainer }>		
			<Text style={ styles.title }>{ symbol }</Text>
			<Text> | </Text>
			<Text>{ coin_name }</Text>
			<Text>{ price_usd }$</Text>
		</View>

		<View style={ styles.change }>
			<Text>24 hours: { percent_change_24h }</Text>
			<Text>7 days: { percent_change_7d }</Text>
		</View>	
	</View>
)

export default CoinCard;


const styles = StyleSheet.create({
	container: {
		marginTop: 20,
		flex: 1,
		width: '100%'
	},
	image: {
		width: 40,
		height: 40,
	},
	titleContainer: {
		flexDirection: 'row',
		// justifyContent: 'start'
	},
	title: {
		fontWeight: 'bold',
	},
	price: {

	},
	change: {
		flexDirection: 'row',
		justifyContent: 'space-around'

	}

})