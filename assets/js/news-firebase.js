// Firebase News Management
// Firebase Config (inline for CDN compatibility)
const firebaseConfig = {
  apiKey: "AIzaSyBU-ZNBFukfPWsuD2JYwIuHPshVYeSIWew",
  authDomain: "aeronas-aerocraft.firebaseapp.com",
  projectId: "aeronas-aerocraft",
  storageBucket: "aeronas-aerocraft.firebasestorage.app",
  messagingSenderId: "576218545628",
  appId: "1:576218545628:web:6e7483b743b4c2e0336319",
  measurementId: "G-CC8VQY3RCN"
};

// Initialize Firebase (using CDN for compatibility)
let db = null;
let initialized = false;

async function initializeFirebase() {
    if (initialized) return db;
    
    try {
        const { initializeApp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js');
        const { getFirestore } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        const app = initializeApp(firebaseConfig);
        db = getFirestore(app);
        initialized = true;
        return db;
    } catch (error) {
        console.error('Error initializing Firebase:', error);
        return null;
    }
}

// Load news from Firestore
export async function loadNewsFromFirestore() {
    try {
        const database = await initializeFirebase();
        if (!database) {
            console.warn('Firebase not initialized, using local data');
            return null;
        }

        const { collection, getDocs, query, orderBy } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        const newsRef = collection(database, 'news');
        const q = query(newsRef, orderBy('dateSort', 'desc'));
        const querySnapshot = await getDocs(q);
        
        const news = [];
        querySnapshot.forEach((doc) => {
            news.push({ id: doc.id, ...doc.data() });
        });
        
        return news.length > 0 ? news : null;
    } catch (error) {
        console.error('Error loading news from Firestore:', error);
        return null;
    }
}

// Save news to Firestore (for initial setup)
export async function saveNewsToFirestore(newsArray) {
    try {
        const database = await initializeFirebase();
        if (!database) {
            console.error('Firebase not initialized');
            return false;
        }

        const { collection, addDoc, doc, setDoc } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        const newsRef = collection(database, 'news');
        
        for (const newsItem of newsArray) {
            try {
                // Use news id as document ID
                const docRef = doc(newsRef, newsItem.id);
                await setDoc(docRef, newsItem);
                console.log(`News ${newsItem.id} saved successfully`);
            } catch (error) {
                console.error(`Error saving news ${newsItem.id}:`, error);
            }
        }
        
        return true;
    } catch (error) {
        console.error('Error saving news to Firestore:', error);
        return false;
    }
}

