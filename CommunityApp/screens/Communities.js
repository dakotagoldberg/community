// import React from 'react'
import React, { Component } from 'react';
import { ScrollView, Image, View, Text, StyleSheet, Button } from 'react-native'
import { auth } from 'firebase';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Firebase from '../config/Firebase';

export default class Profile extends React.Component {
    render() {
        const user = Firebase.auth().currentUser;
        // const communities = user.communities;
        return (
            <View style={styles.container}>
                <ScrollView  >
                <Text style={styles.heading}>My Communities</Text>
                <View style={styles.content}>
                    <Text>Animals</Text>
                </View>
                <View style={styles.content}>
                    <Text>Environmental</Text>
                </View>
                <View style={styles.content}>
                    <Text>Homelessness</Text>
                </View>
                <View style={styles.content}>
                    <Text>Immigration</Text>
                </View>
                <Text style={styles.heading}>Suggested Communities</Text>
                <View style={styles.content}>
                    <Text>Community</Text>
                </View>
                <View style={styles.content}>
                    <Text>Community</Text>
                </View>
                <View style={styles.content}>
                    <Text>Community</Text>
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

        // backgroundColor: '#fff',
        alignItems: 'stretch',
        width: 'auto',
        justifyContent: 'center'
    },
    content: {
        // margin: 80,
        // flex: center,
        width: '85%',
        height: 80,
        alignItems: 'center',
        backgroundColor: 'red',
        textAlignVertical: 'auto',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 5,
        // textAlign: 'center',
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 36,
        width: '85%',
        alignItems: 'center',
        textAlignVertical: 'auto',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
    }
})