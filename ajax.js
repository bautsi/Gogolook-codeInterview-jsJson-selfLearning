var XMLHttpRequest = require("xhr2").XMLHttpRequest;
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == XMLHttpRequest.DONE) {
    // 請求完成
    if (xhr.status === 200) {
      // 請求成功
      console.log(xhr.responseText); // 處理響應數據
    } else {
      console.error("Ajax request failed"); // 處理錯誤情況
    }
  }
};
xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true); // 設置請求類型和URL
xhr.send(); // 發送請求
