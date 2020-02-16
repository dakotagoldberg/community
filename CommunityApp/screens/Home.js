// import React from 'react'
import React, { Component } from 'react';
import { ScrollView, Image, View, Text, StyleSheet, Button } from 'react-native'
import { auth } from 'firebase';
import { connect } from 'react-redux'
import Firebase from '../config/Firebase';

export default class Profile extends React.Component {
    render() {
        const user = Firebase.auth().currentUser;

        return (
            <View style={styles.container}>
                <ScrollView  >
                <Text style={styles.heading}>Home</Text>
                <View style={{...styles.content,...styles.userOverview}}>
                    {/* <Text>{user.email}</Text> */}
                </View>
                <View style={styles.content}>
                    <Text>Event Preview</Text>
                </View>
                <View style={styles.content}>
                    <Text>Communities Preview</Text>
                </View>
          </ScrollView>
            </View>
          
      );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 100,
        // flexDirection: 'row',
        // alignItems: 'stretch',
        // justifyContent: 'space-between',
        // marginLeft: 50,

        backgroundColor: '#fbfbfb',
        alignItems: 'stretch',
        width: 'auto',
        justifyContent: 'center'
    },
    content: {
        // margin: 80,
        // flex: center,
        width: '85%',
        height: 200,
        alignItems: 'center',
        backgroundColor: 'red',
        textAlignVertical: 'auto',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        // textAlign: 'center',
        borderRadius: 10,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 36,
        width: '85%',
        alignItems: 'center',
        textAlignVertical: 'auto',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 5,
        marginTop: 15,
    },
    userOverview: {
        backgroundColor: '#eeeeee',
        
    }
})

// const mapStateToProps = state => {
//     return {
//         user: state.user
//     }
// }

// export default connect(mapStateToProps)(Home)