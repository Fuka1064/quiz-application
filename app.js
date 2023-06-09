const quiz = [
  {
    question: '1 ルーブル美術館はどの国にありますか？',
    answers: [
    'フランス',
    'イタリア',
    'スペイン',
    'ドイツ'
    ],
    correct: 'フランス'
  }, {
    question: '2 ピカソの代表作と言われる絵画は次のうちどれ？',
    answers: [
    '叫び',
    'ゲルニカ',
    'モナリザ',
    'キス'
    ],
    correct: 'ゲルニカ'
  }, {
    question: '3 世界で最も多くの母語話者がいる言語は次のうちどれ？',
    answers: [
      '英語',
      '中国語',
      'スペイン語',
      'ヒンディー語'
    ],
    correct: '中国語'
  }, {
    question: '4 日本の首都はどこですか？',
    answers: [
      '東京',
      '京都',
      '大阪',
      '名古屋'
    ],
    correct: '東京'
  }, {
    question: '5 ダイヤモンドの化学組成は何ですか？',
    answers: [
      'ホウ素',
      '酸素',
      '炭素',
      '窒素'
    ],
    correct: '炭素'
  }, {
    question: '6 「モナリザ」の作者は誰ですか？',
    answers: [
      'レオナルド・ダ・ヴィンチ',
      'ミケランジェロ',
      'ラファエロ',
      'サンドロ・ボッティチェリ'
    ],
    correct: 'レオナルド・ダ・ヴィンチ'
  }, {
    question: '7 カンガルーはどの国の象徴とされていますか？',
    answers: [
      'カナダ',
      'ブラジル',
      'オーストラリア',
      'インド'
    ],
    correct: 'オーストラリア'
  }, {
    question: '8 世界最大の砂漠は次のうちどれですか？',
    answers: [
      'サハラ砂漠',
      'タクラマカン砂漠',
      'サハラ砂漠',
      'ゴビ砂漠'
    ],
    correct: 'サハラ砂漠'
  }, {
    question: '9 「ハムレット」の作者は誰ですか？',
    answers: [
      'ウィリアム・シェイクスピア',
      'チャールズ・ディケンズ',
      'ジェーン・オースティン',
      'フィリップ・シドニー'
    ],
    correct: 'ウィリアム・シェイクスピア'
  }, {
    question: '10 ニューヨーク証券取引所の略称は何ですか？',
    answers: [
      'NYY',
      'NASDAQ',
      'NYSE',
      'TSE'
    ],
    correct: 'NYSE'
  }, {
    question: '11 「星の王子さま」の著者は誰ですか？',
    answers: [
      'ジャンヌ・ダルク',
      'アントワーヌ・ド・サン＝テグジュペリ',
      'フランソワーズ・サガン',
      'ジュール・ヴェルヌ'
    ],
    correct: 'アントワーヌ・ド・サン＝テグジュペリ'
  }, {
    question: '12 アメリカ合衆国の独立宣言が採択された年はいつですか？',
    answers: [
      '1776年',
      '1789年',
      '1804年',
      '1865年'
    ],
    correct: '1776年'
  }, {
    question: '13 「ノートルダムのせむし男」の原作者は誰ですか？',
    answers: [
      'ヴィクトル・ユーゴー',
      'ジャン・バティスト・プティサン',
      'ジュール・ヴェルヌ',
      'オノレ・ド・バルザック'
    ],
    correct: 'ヴィクトル・ユーゴー'
  }, {
    question: '14 サッカーのワールドカップで最も多く優勝した国はどこですか？',
    answers: [
      'アメリカ',
      'ドイツ',
      'ブラジル',
      'アルゼンチン'
    ],
    correct: 'ブラジル'
  }, {
    question: '15 フランスの国旗の色は何色ですか？',
    answers: [
      '青・白・赤',
      '黒・赤・黄',
      '緑・白・赤',
      '黒・黄・緑'
    ],
    correct: '青・白・赤'
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