function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('hidden'));
  document.getElementById(pageId).classList.remove('hidden');
}

function flipCard() {
  const front = document.querySelector('.front');
  const back = document.querySelector('.back');
  front.classList.toggle('hidden');
  back.classList.toggle('hidden');
}

function nextWord() {
  const words = [
    { en: "apple", jp: "りんご" },
    { en: "book", jp: "本" },
    { en: "water", jp: "水" }
  ];
  const random = words[Math.floor(Math.random() * words.length)];
  document.querySelector('.front').textContent = random.en;
  document.querySelector('.back').textContent = random.jp;
  document.querySelector('.front').classList.remove('hidden');
  document.querySelector('.back').classList.add('hidden');
}

function checkAnswer(answer) {
  if (answer === 'apple') {
    document.getElementById('quizResult').textContent = "正解！🎉";
  } else {
    document.getElementById('quizResult').textContent = "残念！😅";
  }
}
