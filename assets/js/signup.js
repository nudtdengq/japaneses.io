function signup() {
    var username = $('#id').val();
    var password = $('#pin').val();
    // var email = $('inputEmail').val();
    
    // LeanCloud - 注册
    // https://leancloud.cn/docs/leanstorage_guide-js.html#注册
    var user = new AV.User();
    user.setUsername(username);
    user.setPassword(password);
    // user.setEmail(email);
    user.signUp().then(function (loginedUser) {
      window.location.href = "index.html";
    }, (function (error) {
        alert(JSON.stringify(error));
    }));
    // document.getElementById('lable').innerHTML = "AA";
  };
  
  $(function() {
    $(".signup-form").on('submit', function(e) {
      e.preventDefault();
      signup();
    });
  });
  