import React, { Component } from 'react'

import { View, Text, Alert, Button, ActivityIndicator } from 'react-native'

import styles from './Styles'
import StylesDefault from '../../../StylesDefault';

class PaymentMethodScreen extends Component {
    static navigationOptions = {
        header: null,
        title: 'Bem vindo',
    };
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false
        }
    }

    clickButtonHandler = () => {
        const { navigate } = this.props.navigation
        this.setState({
            isLoading: true
        })
        setTimeout(() => {
            this.setState({
                isLoading: false
            })
            Alert.alert(
                'Compra concluida',
                'Sua entrega já está a caminho',
                [
                    { text: 'OK', onPress: () => this.props.navigation.navigate('Client') },
                ],
                { cancelable: false },
            );
        }, 5000);


    }
    render() {
        const { colors } = StylesDefault
        const { navigation } = this.props
        return (
            <View style={styles.container}>
                <View style={styles.containerForm}>
                    <Text>Selecione o método de pagamento:</Text>
                    <Text> </Text>
                    {
                        this.state.isLoading ? (
                            <View>
                                <Text>Realizando Pagamento...</Text>
                                <ActivityIndicator size="large" color={StylesDefault.primaryColor} />
                            </View>)
                            : (
                                <View styles={styles.containerButtons}>
                                    <Button style={styles.button} color={colors.primaryColor} title="Cartão de Crédito" onPress={this.clickButtonHandler}></Button>
                                    <Text> </Text>
                                    <Button style={styles.button} color={colors.primaryColor} title="Dinheiro" onPress={this.clickButtonHandler}></Button>
                                </View>)
                    }
                </View>
            </View>
        )
    }
}

export default PaymentMethodScreen