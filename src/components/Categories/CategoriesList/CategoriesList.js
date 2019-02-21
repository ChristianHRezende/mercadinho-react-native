import React, { Component } from 'react'
import styles from './Styles'
import { FlatList, Text } from 'react-native'
import CategoriesListItem from './CategoriesListItem/CategoriesListItem';

const CategoriesList = ({ items = [], clickHandler }) => {
    return (
        <FlatList style={styles.container} data={items} renderItem={({ item, key }) => <CategoriesListItem key={key} item={item} onClick={clickHandler} />} />
    );
}

export default CategoriesList