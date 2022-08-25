const firebaseConfig = {
  apiKey: "AIzaSyCjL3BLN1nP2LTN5wqJgD1XXI3Su5rA29E",
  authDomain: "lancerhacks-v.firebaseapp.com",
  projectId: "lancerhacks-v",
  storageBucket: "lancerhacks-v.appspot.com",
  messagingSenderId: "827587318932",
  appId: "1:827587318932:web:41ccd2beeccebd994cd081",
  measurementId: "G-CMMDSCJFEP"
};


firebase.initializeApp(firebaseConfig);
firebase.analytics();
var database= firebase.firestore();

function read(theme){
  //Reading from database: 
  var count = 0;  //keeps track of how many documents we have for a specific field
database.collection("Individual Photos").where("photoTheme", "==", theme)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            var info=doc.data();
            var userUID= doc.id;
            var theme=info.photoTheme;
            var url=info.imageURL;
            //append info into the code
            var paraNew = document.createElement("div");
            //paraNew.setAttribute("class", "AllProjects_Div");
            var codeBlock2 =
          ` <div class="` + userUID+ ` outerDivForEach">
        <img class="` + userUID+ ` indivNFT" src="`+ url + `" alt="` + theme + ` Photo">
        </div> `;
        paraNew.innerHTML = codeBlock2 ;
        //var placeToAppend= divToAppend+theme;
        if (theme=="Animals"){
            divToAppend.appendChild(paraNew);
        }
        else if (theme=="Climate"){
          divToAppendClimate.appendChild(paraNew);
        }
        else if (theme=="Food"){
          divToAppendFood.appendChild(paraNew);
        }
        else{
          divToAppendOther.appendChild(paraNew);
        }
         
        count=count+1;
        
        });
        if (count<=28){
          read(theme);
        }
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });

}

