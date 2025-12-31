# Firebase Setup Guide

## Step 1: Create Firebase Project
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Add project"
3. Enter project name: `aeronas-aerocraft`
4. Follow the setup wizard

## Step 2: Get Firebase Configuration
1. In Firebase Console, go to Project Settings (gear icon)
2. Scroll down to "Your apps" section
3. Click the web icon (`</>`) to add a web app
4. Register the app and copy the configuration object

## Step 3: Enable Firestore Database
1. In Firebase Console, go to "Firestore Database"
2. Click "Create database"
3. Start in **test mode** (for development)
4. Choose a location for your database

## Step 4: Enable Authentication
1. In Firebase Console, go to "Authentication"
2. Click "Get started"
3. Enable "Email/Password" sign-in method

## Step 5: Create Admin User
1. In Authentication section, go to "Users" tab
2. Click "Add user"
3. Enter email and password for admin account
4. Save the credentials

## Step 6: Update Security Rules

### Firestore Rules
Go to Firestore Database > Rules and update:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // News collection - read for all, write for authenticated
    match /news/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Settings collection - read for all, write for authenticated
    match /settings/{document=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
    
    // Job Applications collection - write for all (public), read for authenticated only
    match /jobApplications/{document=**} {
      allow create: if true;  // Anyone can submit job applications
      allow read: if request.auth != null;  // Only authenticated admins can read
      allow update, delete: if request.auth != null;  // Only authenticated admins can update/delete
    }
  }
}
```

### Storage Rules (if using file uploads)
Go to Storage > Rules and update:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /news/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null;
    }
  }
}
```

## Step 7: Update firebase-config.js
Update `assets/js/firebase-config.js` with your Firebase configuration:

```javascript
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};
```

## Notes
- The configuration is already set up in `assets/js/firebase-config.js`
- Make sure to update security rules before deploying to production
- Test the admin login with the credentials you created





