function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");
}

// タスク保存
document.querySelectorAll(".task").forEach(checkbox => {
  const saved = localStorage.getItem(checkbox.dataset.task);
  checkbox.checked = saved === "true";

  checkbox.addEventListener("change", () => {
    localStorage.setItem(checkbox.dataset.task, checkbox.checked);
  });
});

// ===== 音声読み上げ機能 =====
document.querySelector(".play-btn").addEventListener("click", () => {
  const phrase = document.querySelector(".phrase").textContent;
  const utterance = new SpeechSynthesisUtterance(phrase);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
});

// ===== 音声認識機能 =====
document.querySelector(".speak-btn").addEventListener("click", () => {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Speech recognition not supported on this browser.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript;
    const targetPhrase = document.querySelector(".phrase").textContent;

    if (spokenText.toLowerCase().trim() === targetPhrase.toLowerCase().trim()) {
      alert("✅ Perfect pronunciation!");
    } else {
      alert(`❌ You said: "${spokenText}"`);
    }
  };

  recognition.onerror = (event) => {
    alert("Error: " + event.error);
  };
});
let speakingScore = parseInt(localStorage.getItem("speakingScore")) || 0;

function showPage(pageId) {
  document.querySelectorAll(".page").forEach(page => page.classList.add("hidden"));
  document.getElementById(pageId).classList.remove("hidden");

  if (pageId === "progressPage") {
    updateProgressBars();
  }
}

// タスク保存
document.querySelectorAll(".task").forEach(checkbox => {
  const saved = localStorage.getItem(checkbox.dataset.task);
  checkbox.checked = saved === "true";

  checkbox.addEventListener("change", () => {
    localStorage.setItem(checkbox.dataset.task, checkbox.checked);
  });
});

// ===== 音声読み上げ機能 =====
document.querySelector(".play-btn").addEventListener("click", () => {
  const phrase = document.querySelector(".phrase").textContent;
  const utterance = new SpeechSynthesisUtterance(phrase);
  utterance.lang = "en-US";
  speechSynthesis.speak(utterance);
});

// ===== 音声認識機能（発音スコア更新） =====
document.querySelector(".speak-btn").addEventListener("click", () => {
  if (!('webkitSpeechRecognition' in window)) {
    alert("Speech recognition not supported on this browser.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;

  recognition.start();

  recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript;
    const targetPhrase = document.querySelector(".phrase").textContent;

    if (spokenText.toLowerCase().trim() === targetPhrase.toLowerCase().trim()) {
      alert("✅ Perfect pronunciation!");
      speakingScore = Math.min(speakingScore + 10, 100); // 最大100
      localStorage.setItem("speakingScore", speakingScore);
    } else {
      alert(`❌ You said: "${spokenText}"`);
    }
  };

  recognition.onerror = (event) => {
    alert("Error: " + event.error);
  };
});

// ===== プログレスバー更新 =====
function updateProgressBars() {
  document.querySelector(".speaking-bar").style.width = speakingScore + "%";
}
