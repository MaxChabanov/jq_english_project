let wordsRight = 0;
let wordsWrong = 0;
let difficulty = "easy";
let wordCount = 10;

$("#word-count-btn-10").click(function () {
  wordCount = 10;
});
$("#word-count-btn-20").click(function () {
  wordCount = 20;
});
$("#word-count-btn-30").click(function () {
  wordCount = 30;
});

$("#dif-btn-easy").click(function () {
  difficulty = "easy";
});
$("#dif-btn-middle").click(function () {
  difficulty = "medium";
});
$("#dif-btn-hard").click(function () {
  difficulty = "hard";
});

// Dictionary
// Каждая сложность - 20 слов кроме сложной(10)
let easyWordsEng = [
  "cat",
  "dog",
  "dolphin",
  "parrot",
  "mouse",
  "meercat",
  "raccoon",
  "fox",
  "squirrel",
  "monkey",
  "kitchen",
  "time",
  "food",
  "bear",
  "frog",
  "forest",
  "sea",
  "fish",
  "sun",
  "moon",
];
let easyWordsRus = [
  "кот",
  "собака",
  "дельфин",
  "попугай",
  "мышь",
  "сурикат",
  "енот",
  "лиса",
  "белка",
  "обезьяна",
  "кухня",
  "время",
  "еда",
  "медведь",
  "лягушка",
  "лес",
  "море",
  "рыба",
  "солнце",
  "луна",
];

medWordsEng = [
  "nature",
  "month",
  "stone",
  "sand",
  "river",
  "camera",
  "bush",
  "garden",
  "pool",
  "shelf",
  "brain",
  "circle",
  "concert",
  "event",
  "expensive",
  "human",
  "memory",
  "story",
  "wheel",
  "vocabulary",
];

medWordsRus = [
  "природа",
  "месяц",
  "камень",
  "песок",
  "река",
  "камера",
  "куст",
  "сад",
  "бассеин",
  "полка",
  "мозг",
  "круг",
  "концерт",
  "событие",
  "дорогой",
  "человек",
  "память",
  "история",
  "колесо",
  "словарь",
];

hardWordsEng = [
  "aluminium",
  "anaesthetist",
  "anonymous",
  "facilitate",
  "february",
  "archi­tec­ture",
  "geography",
  "review",
  "research",
  "success",
];

hardWordsRus = [
  "алюминий",
  "анестезиолог",
  "анонимный",
  "облегчать",
  "февраль",
  "архитектура",
  "география",
  "обзор",
  "исследование",
  "успех",
];

function checkWord(russWord, engWord) {
  if (russWord) {
    // Right or not check
    if ($("#wordInput").val() == russWord) {
      wordsRight++;

      $("#right-text").text(wordsRight);
    } else {
      wordsWrong++;
      $("#mistake-text").text(wordsWrong);
    }
  } else {
    // Right or not check
    if ($("#wordInput").val() == engWord) {
      wordsRight++;

      $("#right-text").text(wordsRight);
    } else {
      wordsWrong++;
      $("#mistake-text").text(wordsWrong);
    }
  }
}

function sortWords(firstTime) {
  if (firstTime) {
    wordsRight = 0;
    $("#right-text").text(wordsRight);
    wordsWrong = 0;
    $("#mistake-text").text(wordsWrong);

    function randomsiseWords() {
      return Math.floor(Math.random() * wordCount);
    }
    let word = randomsiseWords();

    if ($("#russian-english").is(":checked")) {
      let language = "с русского на английский";
      $("#current-translate-lang").text(language);

      if (difficulty == "easy") {
        $(".current-word").text(easyWordsRus[word]);
      } else if (difficulty == "medium") {
        $(".current-word").text(medWordsRus[word]);
      } else {
        $(".current-word").text(hardWordsRus[word]);
      }
    } else {
      let language = "с английского на русский";
      $("#current-translate-lang").text(language);

      if (difficulty == "easy") {
        $(".current-word").text(easyWordsEng[word]);
      } else if (difficulty == "medium") {
        $(".current-word").text(medWordsEng[word]);
      } else {
        $(".current-word").text(hardWordsEng[word]);
      }
    }
  } else {
    if ($("#russian-english").is(":checked")) {
      let language = "с русского на английский";
      $("#current-translate-lang").text(language);

      // Difficulty check
      if (difficulty == "easy") {
        let russWord =
          easyWordsEng[easyWordsRus.indexOf($(".current-word").text())];
        checkWord(russWord, NaN);

        function randomsiseWords() {
          return Math.floor(Math.random() * wordCount);
        }
        let word = randomsiseWords();
        $(".current-word").text(easyWordsRus[word]);
      } else if (difficulty == "medium") {
        let russWord =
          medWordsEng[medWordsRus.indexOf($(".current-word").text())];
        checkWord(russWord, NaN);

        function randomsiseWords() {
          return Math.floor(Math.random() * wordCount);
        }
        let word = randomsiseWords();
        $(".current-word").text(medWordsRus[word]);
      } else {
        let russWord =
          hardWordsEng[hardWordsRus.indexOf($(".current-word").text())];
        checkWord(russWord, NaN);

        function randomsiseWords() {
          return Math.floor(Math.random() * wordCount);
        }
        let word = randomsiseWords();
        $(".current-word").text(hardWordsRus[word]);
      }
    } else {
      let language = "с английского на русский";
      $("#current-translate-lang").text(language);

      // Difficulty check
      if (difficulty == "easy") {
        let engWord =
          easyWordsRus[easyWordsEng.indexOf($(".current-word").text())];
        checkWord(NaN, engWord);

        function randomsiseWords() {
          return Math.floor(Math.random() * wordCount);
        }
        let word = randomsiseWords();
        $(".current-word").text(easyWordsEng[word]);
      } else if (difficulty == "medium") {
        let engWord =
          medWordsRus[medWordsEng.indexOf($(".current-word").text())];
        checkWord(NaN, engWord);

        function randomsiseWords() {
          return Math.floor(Math.random() * wordCount);
        }
        let word = randomsiseWords();
        $(".current-word").text(medWordsEng[word]);
      } else {
        let engWord =
          hardWordsRus[hardWordsEng.indexOf($(".current-word").text())];
        checkWord(NaN, engWord);

        function randomsiseWords() {
          return Math.floor(Math.random() * wordCount);
        }
        let word = randomsiseWords();
        $(".current-word").text(hardWordsEng[word]);
      }
    }
  }
}

// Switching between screens
let testStartScreenVisible = false;

$(".test-start-btn").click(function () {
  $(".test-finished").css("display", "none");

  // Setting the statistics of the lesson

  let currentWordNumber = 0;
  $("#left-text").text(wordCount - currentWordNumber);
  $("#current-dif-level").text(difficulty);
  $("#current-word-count-text").text(wordCount);

  sortWords(true);

  // Changing screens
  $(".start-screen").css("display", "none");
  $(".lesson-in-progress-container").css("display", "block");
  wordsRight = 0;
  $("#right-text").text(wordsRight);
  wordsWrong = 0;
  $("#mistake-text").text(wordsWrong);
});

// Submit answer
currentWordNumber = 0;
$("#submit-answer").click(function () {
  $(".help-img").css("display", "none");

  if (wordsWrong >= wordCount / 2) {
    $(".test-finished-text").text("Провален");
  } else {
    $(".test-finished-text").text("Пройден");
  }

  currentWordNumber++;
  $("#left-text").text(wordCount - currentWordNumber);

  sortWords(false);

  $("#wordInput")[0].value = "";

  if (wordCount - currentWordNumber == 0) {
    $(".lesson-in-progress-container").css("display", "none");
    $(".test-finished").css("display", "block");

    $("#test-results-right").text(wordsRight);
    $("#test-results-wrong").text(wordsWrong);
  }
});

$(".test-end-btn").click(function () {
  currentWordNumber = 0;

  $(".test-finished").css("display", "none");
  $(".start-screen").css("display", "block");
});

$(".stop-btn").click(function () {
  $(".lesson-in-progress-container").css("display", "none");
  $(".start-screen").css("display", "block");
});

$("#open-help-btn").click(function () {
  $(".help-img").attr(
    "src",
    `img/${easyWordsEng[easyWordsRus.indexOf($(".current-word").text())]}.jpg`
  );

  $(".help-img").css("display", "block");

  $(".help-img-container").css("display", "block");
});

// Making the menu open when clicked on the arrow(lesson-in-progress-container)
let arrowClicked = false;

$(".arrow").click(function () {
  if (!arrowClicked) {
    $(".current-statistics-container").css("display", "block");
    arrowClicked = true;
  } else {
    $(".current-statistics-container").css("display", "none");
    arrowClicked = false;
  }
});
