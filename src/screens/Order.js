import React, { Component, useState } from 'react'
import { TouchableOpacity, StyleSheet, View, FlatList, SafeAreaView, Image, ScrollView } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Button from '../components/Button'
import { theme } from '../core/theme'
import { connect } from 'react-redux';
import { Appbar } from 'react-native-paper';
import AppStatusBar from '../components/AppStatusBar'
import TextInput from '../components/TextInput'
const _goBack = () => console.log('Went back');

const _handleSearch = () => console.log('Searching');

const _handleMore = () => console.log('Shown more');
class Order extends Component {
    constructor(props) {
        super(props)
        this.state = {
            searchQuery: '',
            images: [
                { src: require('../assets/1.jpg'), key: '1' },
                { src: require('../assets/2.jpg'), key: '2' },
                { src: require('../assets/3.jpg'), key: '3' },
                { src: require('../assets/4.jpg'), key: '4' },],
            banner: [
                { src: require('../assets/banner.jpg'), key: '1' },
                { src: require('../assets/banner2.jpg'), key: '2' },
                { src: require('../assets/3.jpg'), key: '3' },
                { src: require('../assets/4.jpg'), key: '4' },],
            clicks: [
                {
                    id: 1,
                    name: 'Recent',
                },
                {
                    id: 2,
                    name: 'Progress',
                },
                {
                    id: 3,
                    name: 'Upcomming',
                },
                {
                    id: 4,
                    name: 'Meeting',
                },
                {
                    id: 5,
                    name: 'Cancel',
                },
            ],
        }
    }
    onChangeSearch = query => setSearchQuery(query);

    renderProfile = (item) => {
        const { clicks } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '90%', height: 40, alignSelf: 'center', marginBottom: -60 }}>
                    {
                        this.state.clicks.map((r, key) => {
                            if (this.state.id === item.item.id) {
                                if (key === 0) {
                                    return (
                                        <TouchableOpacity
                                            style={{ justifyContent: 'center', height: '95%', alignItems: 'center', borderBottomWidth: 2, borderBottomColor: '#fff' }}>
                                            <Text style={{ fontWeight: 'bold', fontSize: 16, fontWeight: 'bold', color: '#fff', }}>{item.item.name}</Text>
                                        </TouchableOpacity>
                                    )
                                }

                            }

                        })
                    }
                    <TouchableOpacity
                        onPress={() => { this.setState({ id: item.item.id }) }}
                        style={{ width: 100, justifyContent: 'center', height: '100%', alignItems: 'center' }}>
                        <Text style={{ color: '#fff', }}>{item.item.name}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }


    Data = (item) => {
        console.log(item.item)
        return (
            <SafeAreaView style={{ backgroundColor: theme.colors.surface }}>
                <AppStatusBar backgroundColor={theme.colors.primary} barStyle="light-content" />
                <View style={{ alignItems: 'center', padding: 15, justifyContent: 'center' }}>
                    <View>
                        <Image style={{ height: 30, width: 30, marginTop: -20 }} source={{ uri: item.item.imageUrl }} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 17, }}>  {item.item.title}</Text>

                    </View>
                </View>
                <View style={{ height: 0.5, width: '100%', backgroundColor: '#000', marginTop: 5 }}></View>
            </SafeAreaView>
        )
    }

    render() {
        return (
            <ScrollView style={{ flex: 1 }}>

                <Appbar.Header>
                    <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', padding: 10, marginTop: 10 }}
                    >
                        <Image source={require('../assets/menu.png')} style={{ height: 23, width: 23 }} />
                    </TouchableOpacity>
                    <TextInput
                        placeholder='My Jio search'
                        theme={{
                            colors: {
                                placeholder: 'white'
                            }
                        }}
                        onChangeText={(text) => this.setState({ Searchbar: { ...this.state.Searchbar, value: text, error: '' } })}
                    />
                    <TouchableOpacity style={{ height: 30, justifyContent: 'center', alignItems: 'center', margin: 8, backgroundColor: '#4c6b9e', width: 30, borderRadius: 30 }}
                    >
                        <Image source={require('../assets/woman.png')} style={{ height: 18, width: 18 }} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: -17, marginRight: 3, marginTop: 20 }}>
                        <Image source={require('../assets/mic.png')} style={{ height: 18, width: 18 }} />
                    </View>

                    <TouchableOpacity style={{ height: 30, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4c6b9e', width: 30, borderRadius: 30 }}
                    >
                        <Image source={require('../assets/qr-code.png')} style={{ height: 18, width: 18 }} />
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 30, justifyContent: 'center', alignItems: 'center', margin: 8, backgroundColor: '#4c6b9e', width: 30, borderRadius: 30 }}
                    >
                        <Image source={require('../assets/bell.png')} style={{ height: 18, width: 18 }} />
                    </TouchableOpacity>

                    <View style={{ width: 20, height: 20, alignItems: 'center', marginLeft: -17, marginRight: 3, marginTop: -20, backgroundColor: 'red', borderRadius: 30, padding: 3 }}>
                        <Text style={{ color: '#fff', }}>1</Text>
                    </View>
                </Appbar.Header>
                <View style={{ height: 300, width: '100%', backgroundColor: theme.colors.primary, }}>
                    <FlatList
                        data={this.state.clicks}
                        renderItem={this.renderProfile}
                        keyExtractor={(item) => item.id}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                    />

                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={this.state.images}
                        renderItem={({ item, index }) => (
                            <Image source={item.src
                            }
                                key={index}
                                style={{
                                    width: 260,
                                    height: 160,
                                    borderWidth: 0.1,
                                    borderColor: '#d35647',
                                    resizeMode: 'cover',
                                    margin: 10,
                                    borderRadius: 5
                                }}
                            />
                        )}
                    />

                </View>
                <View style={{ height: 120, width: '95%', backgroundColor: theme.colors.surface, alignSelf: 'center', marginTop: -50, borderRadius: 5, elevation: 10 }}>
                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={true}
                        data={this.state.banner}
                        renderItem={({ item, index }) => (
                            <Image source={item.src
                            }
                                key={index}
                                style={{
                                    width: 375,
                                    height: 120,
                                    borderWidth: 0.1,
                                    borderColor: '#d35647',
                                    resizeMode: 'cover',
                                    borderRadius: 5
                                }}
                            />
                        )}
                    />
                </View>
                <View style={{ width: '100%', }}>
                    <View style={{ flexDirection: 'row', marginTop: 20, height: 40, padding: 10, alignItems: 'center' }}>
                        <Image source={require('../assets/danger.png')} style={{ height: 27, width: 27 }} />
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>  Trending</Text>
                    </View>
                    <FlatList
                        data={this.props.data}
                        renderItem={this.Data}
                        keyExtractor={(item) => item.id}
                        horizontal
                    />
                </View>
            </ScrollView>
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