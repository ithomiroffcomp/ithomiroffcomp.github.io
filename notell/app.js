var database = firebase.database();

var ref = database.ref("users");
ref.on("value",gotData,errData);

function gotData(data){
  // console.log(data.val());
  var users = data.val();
  var keys = Object.keys(users);
  // console.log(keys);
  for(var i = 0; i < keys.length; i++){
    var k = keys[i];

    var username= users[k].username;
    var phone= users[k].phone;
    var url = users[k].url;
    var adress = users[k].adress;
    var descript= users[k].descript;

    console.log(username,phone,url,adress,descript);
  }
}
function errData(err){
  throw err;
}

function writeUserData(name, phone, url, adress,descript) {
  firebase.database().ref('users/').push({
    username: name,
    phone: phone,
    url : url,
    adress: adress,
    descript,descript
  });
}

function showData(){
    firebase.database().ref.on("users/", function(snapshot) {
    return console.log(snapshot.val());
    }, function (error) {
    console.log("Error: " + error.code);
    });
};

var i_name = document.getElementsByClassName("name")[0];
var i_phone = document.getElementsByClassName("phone")[0];
var i_url = document.getElementsByClassName("url")[0];
var i_adress = document.getElementsByClassName("adress")[0];
var i_descript = document.getElementsByClassName("descript")[0];



function writeData (){

    // var valInput = i_name.value;
    
    writeUserData(i_name.value,i_phone.value,i_url.value,i_adress.value,i_descript.value);
    console.log("Data written");
    setTimeout(clear,1500);
    
}
var clear = function (){
    i_name.value = "";
    i_phone.value = ""; 
    i_url.value = "";
    i_adress.value = "";
    i_descript.value = "";
};


$( document ).ready(function() {
    // ref.on("value",gotData,errData);
});


