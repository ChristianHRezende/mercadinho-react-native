import React, { Component } from 'react'

import { View, Text } from 'react-native'

import styles from './Styles'
import Products from '../../components/Products/Products';

class ProductsScreen extends Component {
    static navigationOptions = {
        header: null,
        title: 'Bem vindo',
    };

    render() {
        const { navigation } = this.props
        const { navigate } = navigation.navigate;
        const foreingKey = navigation.getParam("categoryId", 0)
        return (
            <View style={styles.container}>
                <Products foreingKey={foreingKey} navigate={navigate} />
            </View>
        )
    }
}

export default ProductsScreen