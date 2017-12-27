import React from 'react';
import { View, Text, StyleSheet, Image } from "react-native";
import { images } from '../Utils/CoinIcons';
import CryptoSeparator from './CryptoSeparator';
import CryptoSeparatorLight from './CryptoSeparatorLight';

const CoinCard = ({ symbol, coin_name, price_usd, percent_change_24h, percent_change_7d }) => (

	<View style={ styles.container }>

		<View style={ styles.content }>

			<View style={ styles.titleContainer }>

				<View style={ styles.imageContainer }>
					<Image 
						style={ styles.image }
						source={{ uri: images[symbol] }}/>
				</View>

				<View style={ styles.changeContainer }>	
					<View style={ styles.name }>
						<Text style={ styles.title }>{ symbol }</Text>
						<Text> | </Text>
						<Text>{ coin_name }</Text>
					</View>
					<View><Text style={ styles.price }>£{ (price_usd/1.3845).toFixed(2) }</Text></View>
				</View>

			</View>

			<View style={ styles.change }>
				<Text>24h: 
					<Text style={ percent_change_24h < 0 ? styles.percentChangeMinus : styles.percentChangePlus }
					> { percent_change_24h }% </Text>
				</Text>
				<Text>7d: 
					<Text style={ percent_change_7d < 0 ? styles.percentChangeMinus : styles.percentChangePlus }
					> { percent_change_7d }% </Text>
				</Text>
			</View>

		</View>	

		<CryptoSeparator />
	</View>
);

export default CoinCard;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: '100%'
	},

	content: {
		paddingHorizontal: 12,
	},

	imageContainer: {
		marginBottom: 10
	},

	titleContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '95%',
		marginTop: 10,
	},

	changeContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '90%',
		marginTop: 10,
	},

	percentChangePlus: {
        color: "#00BFA5",
        fontWeight: "bold",
        marginLeft: 5
    },

    percentChangeMinus: {
        color: "#DD2C00",
        fontWeight: "bold",
        marginLeft: 5
	},

	name: {
		flexDirection: 'row',
	},

	price: {
		fontWeight: 'bold',
	},

	image: {
		width: 40,
		height: 40,
		marginRight: 5,
	},
	
	title: {
		fontWeight: 'bold',
	},

	change: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginLeft: 40,
		display: "flex",
        borderTopColor: "#eaeaea",
        borderTopWidth: 1,
        padding: 10,
	}

})