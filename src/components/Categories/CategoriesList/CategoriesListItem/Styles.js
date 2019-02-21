import React from 'react'

import { StyleSheet } from 'react-native'
import StylesDefault from '../../../../../StylesDefault';

const styles =
    StyleSheet.create({
        container: {
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: 'center',
            marginTop: 5,
            padding: 5,
            borderWidth: 1,
            borderRadius: 2,
            borderColor: '#ddd',
            borderBottomWidth: 1,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.8,
            shadowRadius: 2,
            elevation: 1,
            marginLeft: 5,
            marginRight: 5,
            marginTop: 10,

        },
        textItem: {
            fontSize: StylesDefault.fontSizes.h4,
            marginLeft: 10
        },
        image: {
            height: 64, width: 64
        }
    })

export default styles