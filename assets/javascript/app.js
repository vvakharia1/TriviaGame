$(document).ready(function() {
  // Initialize variables

  var numCorrect = 0;
  var numIncorrect = 0;
  var timeout = 60;
  var interval;

  // Array of Trivia questions, choices, answers
  var trivia = [
    {
      question:
        "What Pot of food of food does Kevin spill in Casual Friday ep?",
      choices: ["Chilli", "Chicken Noodle Soup", "Fried Rice", "Cereal"],
      answers: "Chilli"
    },
    {
      question: "How many siblings does Dwight have?",
      choices: ["None", "1 Brother & 1 Sister", "5 Sisters", "1 Brother"],
      answers: "1 Brother & 1 Sister"
    },
    {
      question: "What is the name of the movie Michael wrote and directed?",
      choices: [
        "Dundy Miffy",
        "Thread Level Midnight",
        "Michael Scott Show",
        "World's Best Boss"
      ],
      answers: "Thread Level Midnight"
    },
    {
      question:
        "What is the name of the cat Andy gets for Angela after she breaks up with Dwight?",
      choices: ["Pundit", "Andela", "Garbage/Bandit", "Trash"],
      answers: "Garbage/Bandit"
    },
    {
      question: "What is the name of Oscar's first boyfriend?",
      choices: ["Gil", "Dwight", "Creed", "Bill"],
      answers: "Gil"
    },
    {
      question: "What food does Ryan burn, causing an office fire?",
      choices: ["Lasagna", "Cheesy Pita", "Burrito", "Creme Brule"],
      answers: "Cheesy Pita"
    },
    {
      question: "Who does Michael run over with his car?",
      choices: ["Jim", "Meredith", "Pam", "Jan"],
      answers: "Meredith"
    },
    {
      question:
        "What did Kelly do to lose weight for the Dunder Mifflin weight loss contest?",
      choices: ["Starve", "Keto-Diet", "Eat a Tapeworm", "Eat Dirt"],
      answers: "Eat a Tapeworm"
    },
    {
      question: "What is Stanley's life goal and dream?",
      choices: [
        "Quit Work",
        "To Own a Lighthouse and Live at the Top of It",
        "Have 50 Grandchildren",
        "Be a Supermodel"
      ],
      answers: "To own a lighthouse and live at the top of it"
    },
    {
      question: "Whose stand up routine does Michael do in Diversity Day ep?",
      choices: ["Jerry Seinfeld", "Chris Rock", "Dave Chappelle", "Ali Wong"],
      answers: "Chris Rock"
    }
  ];

  // Set up game
  $(".content").hide();

  // Click handler for start button
  $("#startBtn").on("click", function(e) {
    e.preventDefault();
    $(".start").hide();
    $(".content").show();
    $("#timer").text(timeout);
    interval = setInterval(countDown, 1000);
    playTrivia();
  });

  // Trivia Game
  function playTrivia() {
    for (var i = 0; i < trivia.length; i++) {
      var qDiv = $("<div>");
      var question = trivia[i].question;
      qDiv.append("<br><p>Question: " + question + "</p>");
      for (var j = 0; j < trivia[i].choices.length; j++) {
        qDiv.append(
          '<input type="radio" class="choices" name="choice' +
            i +
            '">' +
            " " +
            trivia[i].choices[j] +
            "</input><br>"
        );
      }
      $(".trivia").append(qDiv);
    }
  }

  // Submit button handler
  $("#submitBtn").on("click", function(e) {
    e.preventDefault();
    clearInterval(interval);
    $(".content").hide();
    $(".results").show();
    checkAnswer();
    displayResults();
  });

  // Set countdown function
  function countDown() {
    timeout--;
    $("#timer").html(timeout);
    if (timeout === 0) {
      clearInterval(interval);
      $(".content").hide();
      $(".results").show();
      checkAnswer();
    }
  }

  // Function to check answers
  function checkAnswer() {
    for (var i = 0; (i = trivia[i].length); i++) {
      var userChoice = $("input[name=choice+" + i + "]:checked").val();

      if (userChoice === trivia[i].answers) {
        numCorrect++;
      } else {
        numIncorrect++;
      }
    }
  }
  function displayResults() {
    var scoreDiv = $("<div>");
    scoreDiv.append("<p>Correct Answers: " + numCorrect + "</p>");
    scoreDiv.append("<p>Incorrect Answers: " + numIncorrect + "</p>");
    $(".results").append(scoreDiv);
    $(".results").show();
  }
});
