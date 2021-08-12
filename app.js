// var fs = require('fs');
// var filename = 'data.txt';
// var str = fs.readFileSync(filename).toString();

const password = 'Sit2021@!'

// match start ^ and end $  
// match any character inside [] 
// number of digi inside from min to max {X,X}
// match at least one digi inside (?=.*[ digi ])
// groups one or more regular expressions by ()

var pattern = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{6,12}$/;
var res = password.match( pattern );

if(res){
    console.log(`Password vaild`)
}else{
    console.log(`Password invaild`)
}
// console.log(myarray)
// if(myarray)
// var len = myarray.length;
// console.log("Occurrences of pattern in the string is : " + len);