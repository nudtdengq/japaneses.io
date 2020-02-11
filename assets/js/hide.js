
function hide() { 


    document.getElementById('login').style.display='none';
    document.getElementById('Wel').style.display='';
    
  } 


function check() { 
    var regNumber = /\d+/; //验证0-9的任意数字最少出现1次。
    var regString = /[a-zA-Z]+/; //验证大小写26个字母任意字母最少出现1次。
    var username = document.getElementById('id').value;
    if (regString.test(username)) {
        document.getElementById('login').style.display='none';
        document.getElementById('Wel').style.display='';
        // document.getElementById('lable').innerHTML = "test"+username;
        document.getElementById('welPage').innerHTML = "欢迎"+username;
        // welPage

    }else  {

        // document.getElementById('lable').innerHTML = username;
        document.getElementById('lable').innerHTML = "请输入用户名！(必须包含字母)";
    }

    
    
  } 