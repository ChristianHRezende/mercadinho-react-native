import React, { Component } from 'react'
import styles from './Styles'
import { FlatList, Text } from 'react-native'
import ProductsListItem from './ProductsListItem/ProductsListItem';

const ProductsList = ({ items = [], clickHandler }) => {
    return (
        <FlatList style={styles.container} data={items} renderItem={({ item, key }) => <ProductsListItem key={key} item={item} onClick={clickHandler} />} />
    );
}

export default ProductsList