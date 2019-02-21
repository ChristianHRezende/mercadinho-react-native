import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles';

import db from '../../../produtos.json'
import CategoriesList from './CategoriesList/CategoriesList';

class Categories extends Component {
    clickItemHanlder = (item) => {
        this.props.navigate('Products', { "categoryId": item.id })
    }
    render() {
        const items = db
        console.log(items.categories[0].name)
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>Selecione uma categoria:</Text>
                <CategoriesList items={items.categories} clickHandler={this.clickItemHanlder} />
            </View>
        )
    }
}

export default Categories

