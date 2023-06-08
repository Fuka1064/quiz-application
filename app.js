const quiz = [
  {
      question: '1 ゲーム史上、最も売れたゲーム機は次のうちどれ？', // 今後変更予定
      answers: [
        'スーパーファミコン',
        'プレイステーション2',
        'ニンテンドースイッチ',
        'ニンテンドーDS'
      ],
      correct: 'ニンテンドーDS'
  }, {
      question: '2 ゲーム史上、最も売れたゲーム機は次のうちどれ？', // 今後変更予定
      answers: [
        'スーパーファミコン',
        'プレイステーション2',
        'ニンテンドースイッチ',
        'ニンテンドーDS'
      ],
      correct: 'ニンテンドーDS'
  }, {
      question: '3 ゲーム史上、最も売れたゲーム機は次のうちどれ？', // 今後変更予定
      answers: [
        'スーパーファミコン',
        'プレイステーション2',
        'ニンテンドースイッチ',
        'ニンテンドーDS'
      ],
      correct: 'ニンテンドーDS'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');

// クイズの問題文、選択肢を定義
const setupQuiz = () => {
    document.getElementById('js-question').textContent = quiz[quizIndex].question;
    for (let i = 0; i < $button.length; i++) {
      $button[i].textContent = quiz[quizIndex].answers[i];
    }
}
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  } else {
    window.alert('不正解!');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題が残っていればこちらを実行
    setupQuiz();
  } else {
    //問題がもうなければこちらを実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です!');
  }
}

for (let i = 0; i < $button.length; i++) {
  // ボタンをクリックしたら正誤判定
  $button[i].addEventListener('click', (e) => {
    clickHandler(e);
  }); 
}