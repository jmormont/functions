import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
admin.initializeApp()

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const createUser = functions.https.onCall(({email, password, displayName}, convext) => {  
  return admin.auth().createUser({email, password, displayName})
})
