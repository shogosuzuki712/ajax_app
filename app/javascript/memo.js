function post (){
  const submit = document.getElementById("submit");
  // ２id=submitを取得しsubmit変数に代入
  submit.addEventListener("click", (e) => {
    e.preventDefault();
    //3ボタン押した時にaddEventListener実行するようにした
    const form = document.getElementById("form");
    const formData = new FormData(form);
    //フォームのデータ取得変数に代入
    const XHR = new XMLHttpRequest();
    //http通信するための記述
    XHR.open("POST", "/posts", true);
    //リクエスト指定
    XHR.responseType = "json";
    //レスポンス形式指定
    XHR.send(formData);
    //リクエストを送信
  });
 }
 
 window.addEventListener('load', post);
 // １イベント発火で実行する関数定義(イベント名,関数)