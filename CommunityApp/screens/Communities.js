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
                <View style={styles.nextEvent}>
                    <Image style={styles.eventImage} source={{uri: "https://images.unsplash.com/photo-1437622368342-7a3d73a34c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=80", width: '40%', height: '100%'}}></Image>
                    <View>
                        <Text style={styles.eventTitle}>Animals</Text>
                    </View>
                </View>
                <View style={styles.nextEvent}>
                    <Image style={styles.eventImage} source={{uri: "https://images.unsplash.com/photo-1457530378978-8bac673b8062?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80", width: '40%', height: '100%'}}></Image>
                    <View>
                        <Text style={styles.eventTitle}>Environmental</Text>
                    </View>
                </View>
                <View style={styles.nextEvent}>
                    <Image style={styles.eventImage} source={{uri: "https://images.unsplash.com/photo-1537729958-061041429d90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1992&q=80", width: '40%', height: '100%'}}></Image>
                    <View>
                        <Text style={styles.eventTitle}>Homelessness</Text>
                    </View>
                </View>
                <View style={styles.nextEvent}>
                    <Image style={styles.eventImage} source={{uri: "https://static01.nyt.com/images/2017/08/19/world/19Migrants1/19Migrants1-superJumbo.jpg", width: '40%', height: '100%'}}></Image>
                    <View>
                        <Text style={styles.eventTitle}>Immigration</Text>
                    </View>
                </View>
                <Text style={styles.heading}>Suggested Communities</Text>
                <View style={styles.nextEvent}>
                    <Image style={styles.eventImage} source={{uri: "https://images.unsplash.com/photo-1552895638-f7fe08d2f7d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2767&q=80", width: '40%', height: '100%'}}></Image>
                    <View>
                        <Text style={styles.eventTitle}>Food Deserts</Text>
                    </View>
                </View>
                <View style={styles.nextEvent}>
                    <Image style={styles.eventImage} source={{uri: "https://www.unicef.org/mena/sites/unicef.org.mena/files/styles/hero_desktop/public/UNICEF_2019_15-Oct_Hasakeh_Displaced-from-Ras-Al-Ain_H%26N-services_Masoud-Hasen_IMG_8397_CC.jpg?itok=UZFIj4rO", width: '40%', height: '100%'}}></Image>
                    <View>
                        <Text style={styles.eventTitle}>Displaced Youth</Text>
                    </View>
                </View>
                <View style={styles.nextEvent}>
                    <Image style={styles.eventImage} source={{uri: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2904&q=80", width: '40%', height: '100%'}}></Image>
                    <View>
                        <Text style={styles.eventTitle}>Edu. Inequality</Text>
                    </View>
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
        justifyContent: 'center'
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
        // textAlign: 'center',
        borderRadius: 10,
        fontSize: 24,
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
    communityText: {
        fontWeight: '500',
        fontSize: 24,
    },
    nextEvent: {
        flex: 1,
        flexDirection: 'row',
        width: '85%',
        height: 80,
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
        // width: "50%",
        marginVertical: -10,
    },
})