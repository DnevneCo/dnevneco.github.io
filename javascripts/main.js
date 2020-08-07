const title = document.getElementById("title");

firebase.initializeApp({
    apiKey: "AIzaSyDarZbsJq-2Z5LNWTDya6yQdoFhjo6gQZs",
    authDomain: "explore-manager.firebaseapp.com",
    databaseURL: "https://explore-manager.firebaseio.com",
    projectId: "explore-manager",
    storageBucket: "explore-manager.appspot.com",
    messagingSenderId: "510000231702",
    appId: "1:510000231702:web:21c7fb9d1fd7eb64c18c37",
    measurementId: "G-S7DTZCDPHY"
});

function randomize(view) {
    title.innerHTML = "Analyzing";
    document.body.style.cursor = "wait";
    view.style.display = "none";

    let ramdomizer = Math.floor(Math.random() * 52) + 20200000;
    firebase.firestore().collection("quotes").doc(ramdomizer.toString())
        .get().then(function(doc){
            document.body.style.cursor = "default";
            if(doc.exists){
                title.innerHTML = doc.data().title;

                var source = document.createElement("div");
                source.className = "source";
                source.innerHTML = doc.data().writer;
                view.parentNode.insertBefore(source, view);
            }
        }).catch(function(error){
            console.log("Error getting document:", error);
            title.innerHTML = "Try again in 5 minutes";
            document.body.style.cursor = "default";
        });
}