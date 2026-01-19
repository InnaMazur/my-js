window.onload = function(){


    document.cookie = "user=Tom; SameSite = None; Secure";
       document.cookie = "user=Den; SameSite = None; Secure";
    document.cookie = "userPro=Bob; SameSite = Strict; expires = 31 Dec 2026 23:59:59GMT; Secure";
       document.cookie = "userMaxAge=Age; SameSite = None; Secure; max-age = 3600";
       document.cookie = "userMaxAge=; SameSite = None; Secure; max-age = 0";
function showCookie(){
    let allCookie = document.cookie;
    console.log(allCookie);
    // console.log(document.cookie)
}
showCookie();

///2
 window.localStorage.setItem('UserMenuState','False');
 window.localStorage['keyD'] = 'test text value';
 window.localStorage.simpleKey = 'Simple';

 console.log(window.localStorage.getItem('simpleKey'));
 console.log(window.localStorage.keyD);
 console.log(window.localStorage['UserMenuState']);

//  window.localStorage.user = {userName:'Tom'};

window.localStorage.user = JSON.stringify({userName:'Tom'});

let parseData = JSON.parse(window.localStorage.getItem('user'))
console.log(parseData);
// console.log(window.localStorage.getItem('user'));

window.localStorage.removeItem('simpleKey');
window.localStorage.clear();
window.localStorage.simpleKey = 'Simple';
console.log(window.localStorage.length);


//3


window.sessionStorage.setItem('Item','Value');
window.sessionStorage.keyValue = 'Key info';
window.sessionStorage['dynamic']= 'info';

console.log('Sesion storage');
console.log(window.sessionStorage.getItem('keyValue'));
console.log(window.sessionStorage.Item);
console.log(window.sessionStorage['dynamic']);

window.sessionStorage.removeItem('keyValue');
window.sessionStorage.clear();



























}