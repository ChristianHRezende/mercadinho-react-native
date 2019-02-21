import React, { Component } from 'react'

import { View, Text } from 'react-native'

import styles from './Styles'
import Categories from '../../components/Categories/Categories';

class ClientScreen extends Component {
    static navigationOptions = {
        header: null,
        title: 'Bem vindo',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Categories navigate={navigate} />
            </View>
        )
    }
}

export default ClientScreen