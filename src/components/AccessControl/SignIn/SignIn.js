import React, { Component } from 'react'
import { View, Text, Button, TextInput, Alert } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import styles from './Styles'
import StylesDefault from '../../../../StylesDefault';

class SignIn extends Component {

    constructor(props) {
        super(props)
        this.state = {
            form: {
                username: "admin",
                password: "admin"
            }
        }
    }

    changeUsernameInputHandler = (event) => {
        const { text } = event.nativeEvent
        if (text) {
            this.setState({
                form: { ...this.state.form, username: text }
            })
        }
    }
    changPasswordInputHandler = (event) => {
        const { text } = event.nativeEvent

        if (text) {
            this.setState({
                form: { ...this.state.form, password: text }
            })
        }
    }

    clickConfirmButtonHandler = () => {
        if (this.state.form.username !== 'admin' ||
            this.state.form.password !== 'admin') {
            Alert.alert(
                'Atenção',
                'Verifique seus dados',
                [
                    { text: 'OK', onPress: () => console.log('OK Pressed') },
                ],
                { cancelable: false },
            );
        }else{
            this.props.navigate('Client')
        }
        
    }

    render() {
        const { colors } = StylesDefault
        return (
                <View style={styles.formContainer}>
                    <FontAwesome name="opencart" size={64} color={colors.secondColor} />
                    <View style={styles.form}>
                        <View>
                            <Text style={styles.label}>Informe seu nome de usuário</Text>
                            <TextInput textContentType="nickname"
                                style={styles.input}
                                placeholder="Nome de usuário..."
                                placeholderTextColor={colors.placeholderTextColor}
                                onChange={this.changeUsernameInputHandler}
                                value={this.state.form.username}
                                id={"Username"} />
                        </View>
                        <View>
                            <Text style={styles.label}>Informe sua senha:</Text>
                            <TextInput secureTextEntry={true}
                                textContentType="password"
                                style={styles.input}
                                placeholder="Senha do usuário..."
                                placeholderTextColor={colors.placeholderTextColor}
                                onChange={this.changPasswordInputHandler}
                                value={this.state.form.password} />
                        </View>
                        <Button color={colors.primaryColor} title="Confirmar" onPress={this.clickConfirmButtonHandler}></Button>
                    </View>
                </View>   
        )
    }
}

export default SignIn