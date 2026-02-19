// Visitor Tracking System
// Track website visitors and store in Firebase

const firebaseConfig = {
    apiKey: "AIzaSyBU-ZNBFukfPWsuD2JYwIuHPshVYeSIWew",
    authDomain: "aeronas-aerocraft.firebaseapp.com",
    projectId: "aeronas-aerocraft",
    storageBucket: "aeronas-aerocraft.firebasestorage.app",
    messagingSenderId: "576218545628",
    appId: "1:576218545628:web:6e7483b743b4c2e0336319",
    measurementId: "G-CC8VQY3RCN"
};

// Initialize Firebase
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
        console.error('Error initializing Firebase for visitor tracking:', error);
        return null;
    }
}

// Generate unique visitor ID (based on browser fingerprint)
function getVisitorId() {
    let visitorId = localStorage.getItem('visitorId');
    
    if (!visitorId) {
        // Generate unique ID based on browser characteristics
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('Visitor ID', 2, 2);
        
        const fingerprint = [
            navigator.userAgent,
            navigator.language,
            screen.width + 'x' + screen.height,
            new Date().getTimezoneOffset(),
            canvas.toDataURL()
        ].join('|');
        
        // Simple hash function
        let hash = 0;
        for (let i = 0; i < fingerprint.length; i++) {
            const char = fingerprint.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32bit integer
        }
        
        visitorId = 'visitor_' + Math.abs(hash).toString(36) + '_' + Date.now();
        localStorage.setItem('visitorId', visitorId);
    }
    
    return visitorId;
}

// Check if visitor already visited today
function hasVisitedToday() {
    const lastVisit = localStorage.getItem('lastVisitDate');
    const today = new Date().toDateString();
    
    if (lastVisit === today) {
        return true;
    }
    
    localStorage.setItem('lastVisitDate', today);
    return false;
}

// Track visitor
async function trackVisitor() {
    try {
        const database = await initializeFirebase();
        if (!database) {
            console.warn('Firebase not initialized for visitor tracking');
            return;
        }

        const { collection, doc, getDoc, setDoc, increment, serverTimestamp } = await import('https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js');
        
        const visitorId = getVisitorId();
        const today = new Date();
        const dateStr = today.toISOString().split('T')[0]; // YYYY-MM-DD
        const dayOfWeek = today.getDay(); // 0 = Sunday, 6 = Saturday
        const weekStr = getWeekString(today);
        const monthStr = today.toISOString().substring(0, 7); // YYYY-MM
        
        // Check if this is a new visit today (not just page refresh)
        const sessionKey = `visit_${dateStr}`;
        const hasVisitedThisSession = sessionStorage.getItem(sessionKey);
        
        if (hasVisitedThisSession) {
            // Already tracked this session, skip
            return;
        }
        
        // Mark as visited for this session
        sessionStorage.setItem(sessionKey, 'true');
        
        // Update total visitors
        const totalStatsRef = doc(database, 'visitorStats', 'total');
        const totalStatsSnap = await getDoc(totalStatsRef);
        
        if (totalStatsSnap.exists()) {
            await setDoc(totalStatsRef, {
                count: increment(1),
                lastUpdated: serverTimestamp()
            }, { merge: true });
        } else {
            await setDoc(totalStatsRef, {
                count: 1,
                lastUpdated: serverTimestamp(),
                createdAt: serverTimestamp()
            });
        }
        
        // Update daily visitors
        const dailyRef = doc(database, 'visitorStats', `daily_${dateStr}`);
        const dailySnap = await getDoc(dailyRef);
        
        if (dailySnap.exists()) {
            await setDoc(dailyRef, {
                count: increment(1),
                date: dateStr,
                lastUpdated: serverTimestamp()
            }, { merge: true });
        } else {
            await setDoc(dailyRef, {
                count: 1,
                date: dateStr,
                dayOfWeek: dayOfWeek,
                lastUpdated: serverTimestamp(),
                createdAt: serverTimestamp()
            });
        }
        
        // Update weekly visitors
        const weeklyRef = doc(database, 'visitorStats', `weekly_${weekStr}`);
        const weeklySnap = await getDoc(weeklyRef);
        
        if (weeklySnap.exists()) {
            await setDoc(weeklyRef, {
                count: increment(1),
                week: weekStr,
                lastUpdated: serverTimestamp()
            }, { merge: true });
        } else {
            await setDoc(weeklyRef, {
                count: 1,
                week: weekStr,
                lastUpdated: serverTimestamp(),
                createdAt: serverTimestamp()
            });
        }
        
        // Update monthly visitors
        const monthlyRef = doc(database, 'visitorStats', `monthly_${monthStr}`);
        const monthlySnap = await getDoc(monthlyRef);
        
        if (monthlySnap.exists()) {
            await setDoc(monthlyRef, {
                count: increment(1),
                month: monthStr,
                lastUpdated: serverTimestamp()
            }, { merge: true });
        } else {
            await setDoc(monthlyRef, {
                count: 1,
                month: monthStr,
                lastUpdated: serverTimestamp(),
                createdAt: serverTimestamp()
            });
        }
        
        // Store individual visit record (optional, for detailed analytics)
        const visitRef = doc(collection(database, 'visits'));
        await setDoc(visitRef, {
            visitorId: visitorId,
            date: dateStr,
            timestamp: serverTimestamp(),
            page: window.location.pathname,
            referrer: document.referrer || 'direct',
            userAgent: navigator.userAgent.substring(0, 200) // Limit length
        });
        
        console.log('Visitor tracked successfully');
    } catch (error) {
        console.error('Error tracking visitor:', error);
    }
}

// Get week string (YYYY-WW format)
function getWeekString(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return `${d.getUTCFullYear()}-W${weekNo.toString().padStart(2, '0')}`;
}

// Initialize tracking when page loads
if (typeof window !== 'undefined') {
    // Wait a bit to ensure page is fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            setTimeout(trackVisitor, 1000);
        });
    } else {
        setTimeout(trackVisitor, 1000);
    }
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { trackVisitor, initializeFirebase };
}

