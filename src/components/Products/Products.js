import React, { Component } from 'react'
import { View, Text } from 'react-native'
import styles from './Styles';

import db from '../../../produtos.json'
import ProductsList from './ProductsList/ProductsList';

class Products extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            items: []
        }
    }
    clickItemHandler = () => this.props.navigate('PaymentMethod')

    componentDidMount() {
        this.setState({ isLoading: true })

        const list = [];
        const { products } = db
        products.forEach(element => {
            console.log(element, this.props.foreingKey)
            if (element.categoryId === this.props.foreingKey) {
                list.push(element)
            }
        });
        this.setState({ items: list, isLoading: false })
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textTitle}>Selecione um produtos:</Text>
                {this.state.isLoading ? <Text>Carregando...</Text>
                    : <ProductsList items={this.state.items} clickHandler={this.clickItemHandler} />
                }
            </View>
        )
    }
}

export default Products

