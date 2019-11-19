//沙箱函数
(function(e) {
  //创建一个常量保存基地址
  var baseURL = "http://localhost:8080/api/v1";
  var jieKou = {
    user_login: baseURL + "/admin/user/login", //用户登录接口
    user_info: baseURL + "/admin/user/info" //用户信息接口
  };
  //暴露接口 把接口挂载在window对象上
  e.jieKou = jieKou;
})(window);
