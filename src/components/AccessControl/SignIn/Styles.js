import React from 'react'

import { StyleSheet } from 'react-native'
import StylesDefault from '../../../../StylesDefault';

const styles =
    StyleSheet.create({
     
        formContainer: {
            height: "60%",
            width: "80%",
            justifyContent: "center",
            alignItems: 'center',
            backgroundColor: StylesDefault.colors.clearColor,
        },
        form: {
            padding: "5%",
            justifyContent: 'space-between'
        },
        label: {
            fontSize: StylesDefault.fontSizes.h5
        },
        input: {
            marginTop: "5%",
            fontSize: StylesDefault.fontSizes.h4,
            color: StylesDefault.colors.secondColor,
        }

    })

export default styles