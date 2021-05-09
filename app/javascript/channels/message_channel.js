import consumer from "./consumer"

consumer.subscriptions.create("MessageChannel", {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },
    // サーバーから送信された情報はreceivedの引数dataに入る
  received(data) {
    const html = `<p>${data.content.text}</p>`;
    // content(messagesコントローラーのcreateアクション内で定義)は'@message'と同義なのでtextを取り出せる。
    const messages = document.getElementById("messages");
    const newMessage = document.getElementById("message_text");
    messages.insertAdjacentHTML('afterbegin', html);
    newMessage.value='';
  }
});
