const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const email = document.getElementById('email');
const username = document.getElementById('username');
const password1 = document.getElementById.p1;
const password2 = document.getElementById.p2;

const submitBtn = document.querySelector('submit');



submitBtn = addEventListener('click', function(e){
 e.preventDefault();

 if(password1.value != password2){
     alert('passwords does not match');
     return false;
 }
 else{
     alert('form submitted')
 }

 if (firstName == LastName){
     alert('First Name and Last Name must not be the same')
 }

} )
