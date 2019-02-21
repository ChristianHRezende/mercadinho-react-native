import React, { Component } from 'react'
import { View } from 'react-native'
import styles from './Styles'
import SignIn from '../../components/AccessControl/SignIn/SignIn';

class HomeScreen extends Component {
    static navigationOptions = {
        header: null
    };
    render() {
        const { navigate } = this.props.navigation;

        return (
            <View style={styles.container}>
                <SignIn navigate={navigate} />
            </View>
        )
    }
}

export default HomeScreen