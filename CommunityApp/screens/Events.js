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
                    <View style={'background-color: blue,'} style={styles.horiContent}>
                     <Text style={styles.eventText}>Environmental</Text>
                    </View>
                    <View style={styles.horiContent}>
                    <Text style={styles.eventText}>Homelessness</Text>
                    </View>
                    <View style={styles.horiContent}>
                    <Text style={styles.eventText}>Immigration</Text>
                    </View>
                    <View style={styles.horiContent}>
                    <Text style={styles.eventText}>Animals</Text>
                    </View>
                    <View style={styles.horiContent}>
                    <Text style={styles.eventText}>Water Conservation</Text>
                    </View>
                    </ScrollView>
                </View>
                </View>

                    
                
                <Text style={styles.heading}>My Schedule</Text>
                <View style={styles.nextEvent}>
                    <Image style={styles.eventImage} source={{uri: "https://images.unsplash.com/photo-1553755322-56baa43a31d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", width: '40%', height: '100%'}}></Image>
                    <View>
                        <Text style={styles.eventDate}>Feb 19</Text>
                        <Text style={styles.eventTitle}>Coffee Chats: Our Forests</Text>
                        <Text style={styles.eventHost}>Hosted by <Text style={{fontWeight: '700'}}>Starbucks</Text></Text>

                    </View>
                    

                </View>
                <View style={styles.nextEvent}>
                    <Image style={styles.eventImage} source={{uri: "https://images.unsplash.com/photo-1534068590799-09895a701e3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80", width: '40%', height: '100%'}}></Image>
                    <View>
                        <Text style={styles.eventDate}>Feb 27</Text>
                        <Text style={styles.eventTitle}>DTLA Housing Displacement</Text>
                        <Text style={styles.eventHost}>Hosted by <Text style={{fontWeight: '700'}}>US Bank</Text></Text>

                    </View>
                    
                </View>
                <View style={styles.nextEvent}>
                    <Image style={styles.eventImage} source={{uri: "https://images.unsplash.com/photo-1561744677-4f182a702779?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", width: '40%', height: '100%'}}></Image>
                    <View>
                        <Text style={styles.eventDate}>March 2</Text>
                        <Text style={styles.eventTitle}>Beach Cleanup and Brunch</Text>
                        <Text style={styles.eventHost}>Hosted by <Text style={{fontWeight: '700'}}>4Ocean</Text></Text>

                    </View>
                    
                </View>

                <View style={styles.nextEvent}>
                    <Image style={styles.eventImage} source={{uri: "https://images.unsplash.com/photo-1535920527002-b35e96722eb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80", width: '40%', height: '100%'}}></Image>
                    <View>
                        <Text style={styles.eventDate}>March 14</Text>
                        <Text style={styles.eventTitle}>Pie for Pi: End Hunger</Text>
                        <Text style={styles.eventHost}>Hosted by <Text style={{fontWeight: '700'}}>Verizon</Text></Text>

                    </View>
                    
                </View>

                <View>

                    <Image style={styles.logo} source={{uri: "https://github.com/dakotagoldberg/community/blob/master/CommunityApp/assets/img/logo-color.png?raw=true", width: 75, height: 75}}></Image>

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

        backgroundColor: '#f2f2f2',
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
        backgroundColor: '#fbfbfb',
        textAlignVertical: 'auto',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 5,
        borderRadius: 10,
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
        backgroundColor: '#fbfbfb',
        // textAlignVertical: 'auto',
        justifyContent: 'center',
        // alignSelf: 'center',
        marginHorizontal: 5,
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
        marginVertical: 10,
        
    },
    eventText: {
        fontWeight: '500',
        fontSize: 24,
    },
    nextEvent: {
        flex: 1,
        flexDirection: 'row',
        width: '85%',
        height: 200,
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        textAlignVertical: 'auto',
        // justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        // textAlign: 'center',
        borderRadius: 10,
        // flexWrap: 'wrap',
    },
    eventImage: {
        alignSelf: 'flex-start',
        margin: '0%',
        // marginVertical: 'auto',
        // borderRadius: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },
    eventTitle: {
        fontWeight: '500',
        fontSize: 24,
        display: 'flex',
        margin: 20,
        width: "50%",
        marginVertical: -10,
    },
    eventDate: {
        fontWeight: 'bold',
        fontSize: 38,
        display: 'flex',
        margin: 20,
    },
    eventHost: {
        fontWeight: '300',
        fontSize: 16,
        display: 'flex',
        margin: 20,
        marginTop: 25,
        width: "50%",
    },
    logo: {
        margin: 80,
        alignSelf: 'center',
    }
})