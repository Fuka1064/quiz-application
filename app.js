const question = 'ゲーム史上、最も売れたゲーム機は次のうちどれ？'; // 今後変更予定
const answers = [
  'スーパーファミコン',
  'プレイステーション2',
  'ニンテンドースイッチ',
  'ニンテンドーDS'
];
const correct = 'ニンテンドーDS';

const $button = document.getElementsByTagName('button');

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = question;
    for (let i = 0; i < $button.length; i++) {
      $button[i].textContent = answers[i];
    }
}
setupQuiz();

for (let i = 0; i < $button.length; i++) {
  // ボタンをクリックしたら正誤判定
  $button[i].addEventListener('click', (e) => {
    if(correct === e.target.textContent){
      window.alert('正解!');
    } else {
      window.alert('不正解!');
    }
  }); 
}