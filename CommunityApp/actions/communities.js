import Firebase, { db } from '../config/Firebase.js'

// define types

export const UPDATE_NAME = 'UPDATE_NAME'

// actions

export const updateName = name => {
    return {
        type: UPDATE_NAME,
        payload: name
    }
}


export const getCommunity = name => {
    return async (dispatch, getState) => {
        try {
            const community = await db
                .collection('communities')
                .doc(name)
                .get()

        } catch (e) {
            alert(e)
        }
    }
}