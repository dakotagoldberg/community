import React from 'react'
import { Image, View, Text, StyleSheet, Button } from 'react-native'
import { connect } from 'react-redux'
import Firebase from '../config/Firebase'


class Profile extends React.Component {
    handleSignout = () => {
        Firebase.auth().signOut()
        this.props.navigation.navigate('Login')
    }

    render() {

        // confirm(this.props.user.fullName);
        return (
            <View style={styles.container}>
                <Text>My Account</Text>
                <Text>{this.props.user.email}</Text>
                <Button title='Logout' onPress={this.handleSignout} />
                <View>

                    <Image style={styles.logo} source={{uri: "https://github.com/dakotagoldberg/community/blob/master/CommunityApp/assets/img/logo-color.png?raw=true", width: 75, height: 75}}></Image>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        margin: 80,
        alignSelf: 'center',
    }
})


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Profile)