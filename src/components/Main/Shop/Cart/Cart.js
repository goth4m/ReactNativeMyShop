import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CartView from './CartView';
import ProductDetail from '../ProductDetail/ProductDetail';

const RootStack = StackNavigator(
    {
        // Home: {
        //     screen: (props) => <CartView {...props.navigation.state.params} cartArray={[1, 1, 1]} />
        // },
        Home: {
            screen: CartView,
        },
        ProductDetail: {
            screen: ProductDetail,
        },
    },
    {
        initialRouteName: 'Home',
    },
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false,
        }
    }
);

class Cart extends Component {

    goToProductDetail() {
        const { navigate } = this.props.navigation;
        navigate('ProductDetail');
    }
    render() {
        return (
            <RootStack />
        );
    }
}

export default Cart;

