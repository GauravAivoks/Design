import React, { Component, useState } from 'react'
import { TouchableOpacity, StyleSheet, View, FlatList, SafeAreaView, Image } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import { theme } from '../core/theme'
import { connect } from 'react-redux';
import Paragraph from '../components/Paragraph'
import TextHead from '../components/TextHead'

class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    

    Data = (item) => {
        console.log(item.item)
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: theme.colors.surface }}>
                <View style={{ flexDirection: 'row', height: 70, alignItems: 'center' }}>
                    <View>
                        <Image style={{ height: 50, width: 50, borderRadius: 2, marginTop: 5 }} source={{ uri: item.item.imageUrl }} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', }}>  {item.item.title}</Text>
                        <Text style={{ color: '#000' }}>  {item.item.description}</Text>
                    </View>

                </View>
                <View style={{ height: 0.5, width: '100%', backgroundColor: '#000', marginTop: 5 }}></View>
            </SafeAreaView>
        )
    }

    render() {
        return (
            <Background>
                <View style={{ height: 120, width: '100%', backgroundColor: theme.colors.primary, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                    <View style={{ width: '95%', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Header>Order</Header>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Paragraph data="Close"></Paragraph>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 150, width: '90%', backgroundColor: theme.colors.surface, alignSelf: 'center', marginTop: -60, borderRadius: 5, flexDirection: 'row', padding: 10, elevation: 10 }}>
                    <View style={{ height: '100%', width: '50%', }}>
                        <TextHead>Subtotal</TextHead>
                        <TextHead>Tax & fee</TextHead>
                        <TextHead>Delivery</TextHead>
                        <View style={{ height: 1, width: '100%', backgroundColor: '#000' }}></View>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 10 }}>Total</Text>
                    </View>
                    <View style={{ height: '100%', width: '50%', alignItems: 'flex-end' }}>
                        <TextHead>12.323</TextHead>
                        <TextHead>432452.432</TextHead>
                        <TextHead>234.9</TextHead>
                        <View style={{ height: 1, width: '100%', backgroundColor: '#000' }}></View>
                        <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 10 }}>2767834.0</Text>
                    </View>
                </View>
                <View style={{ width: '90%', backgroundColor: theme.colors.surface, alignSelf: 'center', borderRadius: 5, padding: 10, elevation: 10, marginTop: 30 }}>
                    <FlatList
                        data={this.props.data}
                        renderItem={this.Data}
                        keyExtractor={(item) => item.id}
                    />
                </View>

                <View style={{ width: '95%', alignSelf: 'center' }}>
                    <Button mode="contained"
                        onPress={() => { this.props.navigation.navigate('Checkout') }}
                    >
                        Checkout
                    </Button>
                </View>
            </Background>
        )
    }
}

const styles = StyleSheet.create({
    forgotPassword: {
        width: '100%',
        alignItems: 'flex-end',
        marginBottom: 24,
    },
    row: {
        flexDirection: 'row',
        marginTop: 4,
    },
    forgot: {
        fontSize: 13,
        color: theme.colors.secondary,
    },
    link: {
        fontWeight: 'bold',
        color: theme.colors.primary,
    },
})

const mapStateToProps = state => ({
    data: state.auth.data
})
const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(actions.login({ email, password }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Order)