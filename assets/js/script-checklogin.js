const data = [
  {
    username: 'admin',
    password: '456789'
  },
  {
    username: 'admin1',
    password: '123456'
  },
  {
    username: 'admin2',
    password: '123789'
  }
]

const loGin = document.querySelector('.login-main')
const modal = document.querySelector('.login-form')
const closebtn = document.querySelector('.close')
const userName = document.querySelector('.user-form')
const passWord = document.querySelector('.password-form')
const loginAdmin = document.querySelector('.login')
const formLogin = document.querySelector('.user-pw')
const backbtn = document.querySelector('.back-input')


// console.log(modal)
// console.log(loGin)
// console.log(closebtn)
// console.log(userName)
// console.log(password)
// console.log(loginAdmin)
// console.log(formLogin.action)
// console.log(backbtn)


// Open Login
loGin.onclick = function () {
  modal.style.display = 'flex'
}

closebtn.onclick = function () {
  modal.style.display = 'none'
}

// console.log(!(userName.value == "admin"))
// console.log(password.value = "123456")

// function checkLogin(){
//     if(!(userName.value == "admin") || !!(password.value == "123456")){
//         return false
//     }
//     else if((userName.value == "admin") && (password.value == "123456")){
//         return true
//     }
// }

// if(loginAdmin.onclick === checkLogin())
// {
//     console.log("Đăng nhập thành công!!")
// }


// Check Login
var loggedIn1 = false;
var loggedIn2 = false;
var loggedIn3 = false;


loginAdmin.onclick = function (e) {
  var password = passWord.value;
  var username = userName.value;


  //   loggedIn = login(password);
  //   loggedIn = login(username);
  if (checkLogin1(password, username)) {
    loggedIn1 = true;
  }

  else if (checkLogin2(password, username)) {
    loggedIn2 = true;
  }

  else if (checkLogin3(password, username)) {
    loggedIn3 = true;
  }
  check(e);
}

function checkLogin1(password, username) {
  if (password === data[0].password && username === data[0].username) {
    return true
  }
  return false;
}


function checkLogin2(password, username) {
  if (password === data[1].password && username === data[1].username) {
    return true
  }
  return false;
}


function checkLogin3(password, username) {
  if (password === data[2].password && username === data[2].username) {
    return true
  }
  return false;
}


function check(e) {
  if (loggedIn1) {
    alert('Đăng nhập thành công!!');
    formLogin.action = 'hosting1.html'
    // e.preventDefault();

  } 
  
  else if (loggedIn2) {
    alert('Đăng nhập thành công!!');
    formLogin.action = 'hosting2.html'
  } 

  else if (loggedIn3) {
    alert('Đăng nhập thành công!!');
    formLogin.action = 'hosting3.html'
  } 
  
  else {
    alert('Sai tài khoản hoặc mật khẩu!!!');
    e.preventDefault();
  }
}

// BackBtn
backbtn.onclick = function () {
  history.back()
};