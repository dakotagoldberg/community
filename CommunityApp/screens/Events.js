// import React from 'react'
import React, { Component } from 'react';
import { ScrollView, Image, View, Text, StyleSheet, Button } from 'react-native'
import { auth } from 'firebase';

export default class Profile extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ScrollView  >
                <Text style={styles.heading}>Browse by Community</Text>
                <View style={styles.sliderContainer}>
                <View style={styles.slider}>
                    <ScrollView
                    horizontal= {true}
                    >
                    <View style={styles.horiContent}>
                        <Text>Community</Text>
                    </View>
                    <View style={styles.horiContent}>
                        <Text>Community</Text>
                    </View>
                    <View style={styles.horiContent}>
                        <Text>Community</Text>
                    </View>
                    <View style={styles.horiContent}>
                        <Text>Community</Text>
                    </View>
                    <View style={styles.horiContent}>
                        <Text>Community</Text>
                    </View>
                    <View style={styles.horiContent}>
                        <Text>Community</Text>
                    </View>
                    </ScrollView>
                </View>
                </View>

                    
                
                <Text style={styles.heading}>My Schedule</Text>
                <View style={styles.content}>
                    <Text>Event</Text>
                </View>
                <View style={styles.content}>
                    <Text>Event</Text>
                </View>
                <View style={styles.content}>
                    <Text>Event</Text>
                </View>
                <View style={styles.content}>
                    <Text>Event</Text>
                </View>
                <View style={styles.content}>
                    <Text>Event</Text>
                </View>
                <View style={styles.content}>
                    <Text>Event</Text>
                </View>
                <View style={styles.content}>
                    <Text>Event</Text>
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
        justifyContent: 'center',
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
    sliderContainer: {
        flex: 1,
        // alignItems: 'stretch',
        // width: 'auto',
        // justifyContent: 'center',
        // flexDirection: 'row',
        // width: '85%',
        alignItems: 'center',
        
    },
    slider: {
        // flexDirection: 'row',
        // flex: 1,
        // marginHorizontal: 5,
        // alignItems: 'stretch',
        // width: 'auto',
        // justifyContent: 'center',
        // alignSelf: 'center',
        width: '85%',
    },
    horiContent: {
        // flexDirection: 'row',
        width: '50%',
        // justifyContent: 'center',
        height: 80,
        alignItems: 'center',
        backgroundColor: 'red',
        // textAlignVertical: 'auto',
        justifyContent: 'center',
        // alignSelf: 'center',
        marginHorizontal: 5,
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