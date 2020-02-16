// import React from 'react'
import React, { Component } from 'react';
import { ScrollView, Image, View, Text, StyleSheet, Button } from 'react-native'
import { auth } from 'firebase';
import { connect } from 'react-redux'
import Firebase from '../config/Firebase';
import ExtraTabNavigation from '../navigation/SwitchNavigator';
// import * as Progress from 'react-native-progress';
// import { initialWindowSafeAreaInsets } from 'react-native-safe-area-context';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';

export default class Home extends React.Component {

    render() {
        const user = Firebase.auth().currentUser;
        
            // if (user) {
            //     alert(user.email);
            // }
        
        
        
        // var text = "";
        // if (user) {
        //     text = "Richard Platt";
        // }
        // else {
        //     text = "Log in to see your personalized stats!";
        // }
        return (
            
            <View style={styles.container}>
                <ScrollView  >
                <Text style={styles.heading}>Home</Text>
                <View style={styles.userOverview}>
                    <View style={styles.nextEvent}>
                    <Image source={{uri: "https://github.com/dakotagoldberg/community/blob/master/CommunityApp/assets/img/bit-profile.png?raw=true", width: 70, height: 90}}></Image>
                    <Text style={styles.userName}>Richard Platt</Text>
                    {/* <Progress.Bar progress={0.3} width={200} /> */}

                    </View>
                </View>
                <View style={styles.nextEvent}>
                    <Image style={styles.eventImage} source={{uri: "https://images.unsplash.com/photo-1553755322-56baa43a31d7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", width: '40%', height: '100%'}}></Image>
                    <View>
                        <Text style={styles.eventDate}>Feb 19</Text>
                        <Text style={styles.eventTitle}>Coffee Chats: Our Forests</Text>
                        <Text style={styles.eventHost}>Hosted by <Text style={{fontWeight: '700'}}>Starbucks</Text></Text>
                        
                        {/* <Button
                    title="Don't have an account yet? Sign up"
                    onPress={() => testUser()}
                /> */}
                    </View>
                    
                    
                </View>
                {/* <View style={styles.content}>
                    <Text>Communities Preview</Text>
                </View> */}

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
        justifyContent: 'center'
    },
    content: {
        // margin: 80,
        // flex: center,
        width: '85%',
        height: 200,
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
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
        width: '85%',
        height: 200,
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        textAlignVertical: 'auto',
        justifyContent: 'center',
        alignSelf: 'center',
        marginVertical: 10,
        // textAlign: 'center',
        borderRadius: 10,
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
    userName: {
        fontWeight: '700',
        fontSize: 30,
        display: 'flex',
        margin: 20,
        marginTop: 25,
        // width: "50%",
    },
    logo: {
        margin: 80,
        alignSelf: 'center',
    }
    
})

// const mapStateToProps = state => {
//     return {
//         user: state.user
//     }
// }

// export default connect(mapStateToProps)(Home)