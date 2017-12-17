import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

class CryptoContainer extends Component {
	render() {
		return (
			<View>
				<Text> Container</Text>
			</View>	
		)
	}
}


const mapStateToProps = (state) => {
	return {
		crypto: state.crypto
	}
}

export default connect(mapStateToProps)(CryptoContainer);

/* 

We use the connect method to hook React components with Redux state. 
connect() accepts two arguments.

    First argument is mapStateToProps. Does exactly what it says on the tin. Maps the Redux state to our React props. We can access the crypto state under this.props.crypto

    Second argument is mapDispatchToAction. or mapDispatchToProps.

*/    