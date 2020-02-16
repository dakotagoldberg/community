// import React from 'react'
import React, { Component } from 'react';
import { ScrollView, Image, View, Text, StyleSheet, Button } from 'react-native'
import { auth } from 'firebase';

export default class Profile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView  >
            <View style={styles.content}>
                <Text>Hey</Text>
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
        height: 100,
        alignItems: 'center',
        backgroundColor: 'red',
        textAlignVertical: 'auto',
        justifyContent: 'center',
        alignSelf: 'center',
        // textAlign: 'center',
    }
})