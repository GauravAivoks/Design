import React, { Component, } from 'react'
import { TouchableOpacity, StyleSheet, View,  Image } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../components/Background'
import Header from '../components/Header'
import Button from '../components/Button'
import BackButton from '../components/BackButton'
import { theme } from '../core/theme'
import { connect } from 'react-redux';

class Checkout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: { value: '', error: '' },
            password: { value: '', error: '' },

        }
    }

    onLoginPressed = () => {
        console.log(this.state.email.value, "test")
        console.log(emailError, "succces")
        const emailError = emailValidator(this.state.email.value)
        const passwordError = passwordValidator(this.state.password.value)
        if (emailError || passwordError) {
            // setTodos({...todos, [todo.id]: todo});
            console.log(...this.state.email.error, "jjjj", emailError, "mintooo")
            this.setState({ email: { ...this.state.email, error: emailError } })
            this.setState({ password: { ...this.state.password, error: passwordError } })
            return
        }
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Dashboard' }],
        })
    }


    render() {
        // console.log(this.props.data)
        return (
            <Background>
                <BackButton goBack={this.props.navigation.goBack} />
                {/* <Logo />
                <Header>Welcome back.</Header> */}
                <View style={{ height: 120, width: '100%', backgroundColor: theme.colors.primary, borderBottomLeftRadius: 40, borderBottomRightRadius: 40 }}>
                    <View style={{ width: '95%', justifyContent: 'space-between', flexDirection: 'row', alignSelf: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Header>Checkout</Header>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ height: 110, width: '90%', backgroundColor: theme.colors.surface, alignSelf: 'center', marginTop: -60, borderRadius: 5, padding: 10, elevation: 10, }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 10 }}>DELIVERY ADDRESS</Text>
                    <View style={{ height: 50, width: '100%', borderRadius: 1, borderColor: theme.colors.primary, borderWidth: 1, marginTop: 5, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Text style={{ color: theme.colors.primary }}>AGGSDHGFHG</Text>
                            <Text>AGGSDHGFHG GHAGHG HJHJ !32</Text>
                        </View>
                        <View style={{}}>
                            <Image
                                style={{ height: 25, width: 25, }}
                                source={require('../assets/checked.png')} />
                        </View>
                    </View>
                </View>
                <View style={{ height: 350, width: '90%', backgroundColor: theme.colors.surface, alignSelf: 'center', borderRadius: 5, padding: 10, elevation: 10, marginTop: 30 }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', marginTop: 10 }}>PAYMENT METHOD</Text>

                    <View style={{ height: 50, width: '100%', marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{}}>
                            <Image
                                style={{ height: 25, width: 25, }}
                                source={require('../assets/logo.png')} />
                        </View>
                        <View>
                            <Text>    *********** GHAGHG HJHJ !32</Text>
                        </View>

                    </View>
                    <View style={{ height: 50, width: '100%', borderRadius: 1, borderColor: theme.colors.primary, borderWidth: 1, marginTop: 5, justifyContent: 'space-around', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginLeft: -10 }}>
                            <Image
                                style={{ height: 25, width: 25, }}
                                source={require('../assets/logo.png')} />
                            <View>
                                <Text style={{ color: theme.colors.primary }}>AGGSDHGFHG</Text>
                                <Text>AGGSDHGFHG GHAGHG HJHJ !32</Text>
                            </View>
                        </View>

                        <View style={{}}>
                            <Image
                                style={{ height: 25, width: 25, }}
                                source={require('../assets/checked.png')} />
                        </View>
                    </View>

                    <View style={{ height: 50, width: '100%', marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{}}>
                            <Image
                                style={{ height: 25, width: 25, }}
                                source={require('../assets/logo.png')} />
                        </View>
                        <View>
                            <Text>    *********** GHAGHG HJHJ !32</Text>
                        </View>

                    </View>
                    <Button mode="contained"
                        onPress={() => { this.onLoginPressed() }}
                    >
                        Checkout
                    </Button>
                </View>

                <View style={{ width: '90%', alignSelf: 'center', height: 150, justifyContent: 'center', alignItems: 'center' }}>

                    <Image
                        style={{ height: 35, width: 35, }}
                        source={require('../assets/fingerprint-scan.png')} />
                    <Text>Pay with touch ID</Text>
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
    // isLoggedIn: state.auth.isLoggedIn,
    // isLoading: state.auth.isLoading,
    // userData: state.auth.userData,
    error: state.auth.error,
    data: state.auth.data
})
const mapDispatchToProps = dispatch => ({
    login: (email, password) => dispatch(actions.login({ email, password }))
})

export default connect(mapStateToProps, mapDispatchToProps)(Checkout)