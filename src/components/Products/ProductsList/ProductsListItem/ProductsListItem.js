import React from 'react'
import styles from './Styles'
import { TouchableOpacity, Text, Image } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import StylesDefault from '../../../../../StylesDefault';

const ProductsListItem = ({ item, onClick }) => (
    <TouchableOpacity style={styles.container} onPress={() => onClick(item)}>
        {!item.image ? <FontAwesome name="image" size={64} color={StylesDefault.colors.primaryColor} />
            : <Image style={styles.image} source={{ uri: item.image }} />
        }
        <Text style={styles.textItem}>{item.name}</Text>
    </TouchableOpacity >
)

export default ProductsListItem