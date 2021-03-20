const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html
}
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
    XHR.onload = () => {
      //リクエスト送信時の処理
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }//ステータスコード処理
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
 }
 
 window.addEventListener('load', post);
 // １イベント発火で実行する関数定義(イベント名,関数)