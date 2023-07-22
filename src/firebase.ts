
const firebaseConfig = {
    apiKey: "AIzaSyAoALqjDJduPfcHFQT0gZ15dWpv6pUj8es",
    authDomain: "nour-it-portfolio.firebaseapp.com",
    projectId: "nour-it-portfolio",
    storageBucket: "nour-it-portfolio.appspot.com",
    messagingSenderId: "854012590608",
    appId: "1:854012590608:web:1abc53403a7cf138ad2895",
    measurementId: "G-ETJEJMD7JG"
};


// console.log(process.env)

if (process.env.NODE_ENV != 'development') {
    import("firebase/app")
        .then((app) => {
            import("firebase/analytics")
                .then((analytics) => {
                    analytics.getAnalytics(app.initializeApp(firebaseConfig));
                })
                .catch((error) => {
                    console.log('firebase analytics error ', error)
                });
        })
        .catch((error) => {
            console.log('firebase app error ', error)
        });
}

export { }
