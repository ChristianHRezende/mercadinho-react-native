import React from 'react'

import { StyleSheet } from 'react-native'
import StylesDefault from '../../../StylesDefault';

const styles =
    StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: 'center',
            backgroundColor: StylesDefault.colors.primaryColor
        },
        containerForm: {
            height: "60%",
            width: "80%",
            justifyContent: "center",
            alignItems: 'center',
            backgroundColor: StylesDefault.colors.clearColor,
        },
        containerButtons: {
            height:300,
            justifyContent:'space-between',
            backgroundColor: StylesDefault.colors.secondColor,
            width: "80%", 
        },
        textTitle: {
            fontSize: StylesDefault.fontSizes.h3,
            textAlign: 'center'
        },
        button: {
            marginTop: 20
        }
    })

export default styles
