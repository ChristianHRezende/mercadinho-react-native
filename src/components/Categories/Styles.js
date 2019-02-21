import React from 'react'

import { StyleSheet } from 'react-native'
import StylesDefault from '../../../StylesDefault';

const styles =
    StyleSheet.create({

        container: {
            height: "90%",
            width: "90%",
            justifyContent: "center",
            alignItems: 'center',
            backgroundColor: StylesDefault.colors.clearColor,
        },
        textTitle: {
            fontSize: StylesDefault.fontSizes.h3,
            textAlign: 'center'
        }
    })

export default styles