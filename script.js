// ボタンを押すたびに表示するメッセージ
const messages = [
  "英語とWeb制作を楽しく学んでいます。",
  "新しいことを学ぶ時間を大切にしています。",
  "HTML・CSS・JavaScriptに挑戦中です。",
  "北海道から自分らしい作品を発信します。",
  "一歩ずつ、できることを増やしています。",
  "今日も楽しみながらプログラミング！"
];


// HTMLの要素を取得
const changeButton = document.getElementById("change-btn");
const messageElement = document.getElementById("message");


// 現在表示しているメッセージ番号
let currentMessage = 0;


// ボタンが押されたときの処理
changeButton.addEventListener("click", function () {
  // 一度メッセージを薄くする
  messageElement.classList.add("change");

  // 少し待ってから文章を変更する
  setTimeout(function () {
    currentMessage =
      (currentMessage + 1) % messages.length;

    messageElement.textContent =
      messages[currentMessage];

    // 新しい文章を表示する
    messageElement.classList.remove("change");
  }, 250);
});