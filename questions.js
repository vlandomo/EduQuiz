//Primary_School First Year         64 function
// 1
function Primary_School_First_Year_Arabic() {
  return [
    {
      question: "كون كلمة باستخدام كل هذة الحروف ( م - ة - ل - م - ع )",
      options: [" معلم ", " علوم ", " معلمة ", " علم "],
      answer: "معلمة",
      explanation: "الإجابة الصحيحة هي : معلمة.",
    },
    {
      question: "كون كلمة باستخدام كل هذة الحروف ( ا - و - ط - س - و )",
      options: ["اوس", "طاووس", "وسطا", "سطو"],
      answer: "طاووس",
      explanation: "الإجابة الصحيحة هي : طاووس",
    },
  ];
}
// 2
function Primary_School_First_Year_English() {
  return [
    {
      question: "I need water. I feel .....",
      options: ["Hungry", "Excited", "Sad", "Thirsty"],
      answer: "Thirsty",
      explanation: "The correct answer is: Thirsty",
    },
    {
      question: "I ..... board games.",
      options: ["play", "go", "drink", "eat"],
      answer: "play",
      explanation: "The correct answer is: play",
    },
  ];
}
// 3
function Primary_School_First_Year_Math() {
  return [
    {
      question: "3 * 4 = ...",
      options: [12, 9, 7, 16],
      answer: 12,
      explanation: "The correct answer is: 12",
    },
    {
      question: "6 + 1 = ...",
      options: [10, 3, 5, 7],
      answer: 7,
      explanation: "The correct answer is: 7",
    },
  ];
}
// 4
function Primary_School_First_Year_Religion() {
  return [
    {
      question: ".... أذا اراد المسلم ان يصلي يجب ان",
      options: ["يتوضأ", "يركض", "ينام", "يشرب الماء"],
      answer: "يتوضأ",
      explanation: "الإجابة الصحيحة هي : يتوضأ",
    },
    {
      question: "يتوضأ المسلم ..... الصلاة",
      options: ["بعد", "قبل"],
      answer: "قبل",
      explanation: "الإجابة الصحيحة هي : قبل",
    },
  ];
}
//Primary_School Second Year
// 5
function Primary_School_Second_Year_Arabic() {
  return [
    {
      question: "كون كلمة باستخدام كل هذة الحروف ( م - ة - ل - م - ع )",
      options: ["معلم", "علوم", "معلمة", "علم"],
      answer: "معلمة",
      explanation: "الإجابة الصحيحة هي : معلمة.",
    },
    {
      question: "كون كلمة باستخدام كل هذة الحروف ( ا - و - ط - س - و )",
      options: ["اوس", "طاووس", "وسطا", "سطو"],
      answer: "معلمة",
      explanation: "الإجابة الصحيحة هي : معلمة",
    },
  ];
}
// 6
function Primary_School_Second_Year_English() {
  return [
    {
      question: "I need water. I feel .....",
      options: ["Hungry", "Excited", "Sad", "Thirsty"],
      answer: "Thirsty",
      explanation: "The correct answer is: Thirsty",
    },
    {
      question: "I ..... board games.",
      options: ["play", "go", "drink", "eat"],
      answer: "play",
      explanation: "The correct answer is: play",
    },
  ];
}
// 7
function Primary_School_Second_Year_Math() {
  return [
    {
      question: "3 * 4 = ...",
      options: [12, 9, 7, 16],
      answer: 12,
      explanation: "The correct answer is: 12",
    },
    {
      question: "6 + 1 = ...",
      options: [10, 3, 5, 7],
      answer: 7,
      explanation: "The correct answer is: 7",
    },
  ];
}
// 8
function Primary_School_Second_Year_Religion() {
  return [
    {
      question: ".... أذا اراد المسلم ان يصلي يجب ان",
      options: ["يتوضأ", "يركض", "ينام", "يشرب الماء"],
      answer: "يتوضأ",
      explanation: "الإجابة الصحيحة هي : يتوضأ",
    },
    {
      question: "يتوضأ المسلم ..... الصلاة",
      options: ["بعد", "قبل"],
      answer: "قبل",
      explanation: "الإجابة الصحيحة هي : قبل",
    },
  ];
}

//text direction
function textDirection_f() {
  const urlParams = new URLSearchParams(window.location.search);
  const courses = urlParams.get("course");
  if (courses !== "English") {
    let questionTitleh2 = document.getElementById("question_Title");
    questionTitleh2.classList.add("textdirection");
  }
}
//quiz function
document.addEventListener("DOMContentLoaded", function() {
  function startQuiz(questions) {
    let currentQuestionIndex = 0;
    let answered = false;
    let correctAnswers = 0;
    let wrongAnswers = 0;
    let userAnswers = [];
    let wrongQuestions = [];

    // عناصر HTML
    const body = document.body;

    const quizContainer = document.createElement("div");
    quizContainer.classList.add("question-container");
    body.appendChild(quizContainer);

    const questionElement = document.createElement("h2");
    quizContainer.appendChild(questionElement);
    questionElement.setAttribute("id", "question_Title");

    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options");
    quizContainer.appendChild(optionsContainer);

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons");
    quizContainer.appendChild(buttonsContainer);

    const nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.addEventListener("click", nextQuestion);
    buttonsContainer.appendChild(nextButton);

    const explanationContainer = document.createElement("div");
    explanationContainer.id = "explanation";
    explanationContainer.style.display = "none";
    quizContainer.appendChild(explanationContainer);

    const resultContainer = document.createElement("div");
    resultContainer.id = "result";
    resultContainer.style.display = "none";
    body.appendChild(resultContainer);

    // تهيئة الأسئلة عند تحميل الصفحة
    loadQuestion();

    function loadQuestion() {
      if (currentQuestionIndex >= questions.length) {
        showResults();
        return;
      }

      const currentQuestion = questions[currentQuestionIndex];

      questionElement.textContent = currentQuestion.question;
      optionsContainer.innerHTML = "";
      explanationContainer.style.display = "none";
      explanationContainer.innerHTML = "";
      answered = false;

      currentQuestion.options.forEach((option, index) => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="answer" value="${option}" class="radio_btn" ${
          userAnswers[currentQuestionIndex] === option ? "checked" : ""
        }> ${option}`;
        label.querySelector("input").addEventListener("click", function() {
          checkAnswer(this);
        });
        optionsContainer.appendChild(label);
      });
    }

    function checkAnswer(selectedOption) {
      if (answered) return; // منع تغيير الاختيار بعد الإجابة الأولى
      answered = true;

      const selectedValue = selectedOption.value;
      const currentQuestion = questions[currentQuestionIndex];

      let isCorrect = selectedValue == currentQuestion.answer;
      if (isCorrect) {
        correctAnswers++;
      } else {
        wrongAnswers++;
        wrongQuestions.push({
          question: currentQuestion.question,
          userAnswer: selectedValue,
          correctAnswer: currentQuestion.answer,
          explanation: currentQuestion.explanation,
          options: currentQuestion.options,
        });
      }

      userAnswers[currentQuestionIndex] = selectedValue; // حفظ الإجابة

      document.querySelectorAll(".options label").forEach((label) => {
        label.classList.remove("correct", "wrong");

        if (label.textContent.includes(currentQuestion.answer)) {
          label.classList.add("correct");
        } else if (label.textContent.includes(selectedValue)) {
          label.classList.add("wrong");
        }

        label.querySelector("input").disabled = true;
      });

      // إظهار الشرح في حالة الإجابة الخاطئة
      if (!isCorrect) {
        explanationContainer.innerHTML = `<strong>Explain : </strong> ${currentQuestion.explanation}`;
        explanationContainer.style.display = "block";
      } else {
        explanationContainer.innerHTML = `<strong> Good Job <i class="fa-regular fa-face-smile-beam"></i></strong>`;
        explanationContainer.style.display = "block";
        explanationContainer.style.textAlign = "center";
      }
    }

    function nextQuestion() {
      if (!answered) {
        alert("يجب عليك الإجابة قبل الانتقال إلى السؤال التالي!");
        return;
      }
      if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
      } else {
        showResults();
      }
    }

    function showResults() {
      quizContainer.style.display = "none";
      resultContainer.style.display = "block";
      resultContainer.innerHTML = `
      <table>
      
       <tr colspan="2">Result</tr>
       
       <tr>
       <td>Correct Answers</td>
       <td>${correctAnswers}</td>
       </tr>
       
       <tr>
       <td>Wrong Answers</td>
       <td>${wrongAnswers}</td>
       </tr>
       
       <tr class="percentage">
       <td>Percentage</td>
       <td>${((correctAnswers / questions.length) * 100).toFixed(2)}%</td>
       </tr>
       
      </table>
            `;

      if (wrongAnswers > 0) {
        resultContainer.innerHTML += `<div class="wrong-questions"><h3>Questions you answered incorrectly:-</h3>`;
        wrongQuestions.forEach((wrong) => {
          resultContainer.innerHTML += `
                        <table>
                        <tr>
                        <td colspan="2">${wrong.question}</td>
                        </tr>

                        <tr>
                        <td>Choices</td>
                        <td>${wrong.options.join(" - ")}</td>
                        </tr>

                        <tr>
                        <td>Your Answer</td>
                        <td>${wrong.correctAnswer}</td>
                        </tr>

                        <tr>
                        <td>Correct Answer</td>
                        <td>${wrong.correctAnswer}</td>
                        </tr>

                        <tr>
                        <td>explanation</td>
                        <td>${correctAnswers.explanation}</td>
                        </tr>
                        
                        </table>
                        <div class="separator"></div>
                    `;
        });
        resultContainer.innerHTML += `</div>`;
      }
    }
  }

  //==============================================================
  //==============================================================

  // جلب القيم من الرابط
  const urlParams = new URLSearchParams(window.location.search);
  const stage = urlParams.get("stage");
  const level = urlParams.get("level");
  const course = urlParams.get("course");

  // تحديث عنوان الصفحة بناءً على المادة
  document.getElementById(
    "questionTitle"
  ).textContent = `Questions for ${course}`;

  console.log(stage);

  //Primary_School First Year ===================================================================================

  if (
    stage == "Primary_School" &&
    level == "First Year" &&
    course == "Arabic"
  ) {
    startQuiz(Primary_School_First_Year_Arabic()); //1
    textDirection_f();
  } else if (
    stage == "Primary_School" &&
    level == "First Year" &&
    course == "English"
  ) {
    startQuiz(Primary_School_First_Year_English()); //2
    textDirection_f();
  } else if (
    stage == "Primary_School" &&
    level == "First Year" &&
    course == "Math"
  ) {
    startQuiz(Primary_School_First_Year_Math()); //3
    textDirection_f();
  } else if (
    stage == "Primary_School" &&
    level == "First Year" &&
    course == "Religion"
  ) {
    startQuiz(Primary_School_First_Year_Religion()); //4
    textDirection_f();
  }

  //Primary_School Second Year
  else if (
    stage == "Primary_School" &&
    level == "Second Year" &&
    course == "Arabic"
  ) {
    startQuiz(Primary_School_Second_Year_Arabic()); //5
    textDirection_f();
  } else if (
    stage == "Primary_School" &&
    level == "Second Year" &&
    course == "English"
  ) {
    startQuiz(Primary_School_Second_Year_English()); //6
    textDirection_f();
  } else if (
    stage == "Primary_School" &&
    level == "Second Year" &&
    course == "Math"
  ) {
    startQuiz(Primary_School_Second_Year_Math()); //7
    textDirection_f();
  } else if (
    stage == "Primary_School" &&
    level == "Second Year" &&
    course == "Religion"
  ) {
    startQuiz(Primary_School_Second_Year_Religion()); //8
    textDirection_f();
  }

  //Primary_School Third Year
  else if (
    stage == "Primary_School" &&
    level == "Third Year" &&
    course == "Arabic"
  ) {} else if (
    stage == "Primary_School" &&
    level == "Third Year" &&
    course == "English"
  ) {
    console.log("hello8");
  } else if (
    stage == "Primary_School" &&
    level == "Third Year" &&
    course == "Math"
  ) {
    console.log("hello9");
  } else if (
    stage == "Primary_School" &&
    level == "Third Year" &&
    course == "Religion"
  ) {
    console.log("hello10");
  }

  //Primary_School Fourth Year
  else if (
    stage == "Primary_School" &&
    level == "Fourth Year" &&
    course == "Arabic"
  ) {
    console.log("hello11");
  } else if (
    stage == "Primary_School" &&
    level == "Fourth Year" &&
    course == "English"
  ) {
    console.log("hello12");
  } else if (
    stage == "Primary_School" &&
    level == "Fourth Year" &&
    course == "Math"
  ) {
    console.log("hello13");
  } else if (
    stage == "Primary_School" &&
    level == "Fourth Year" &&
    course == "Religion"
  ) {
    console.log("hello14");
  } else if (
    stage == "Primary_School" &&
    level == "Fourth Year" &&
    course == "Social Studies"
  ) {
    console.log("hello15");
  } else if (
    stage == "Primary_School" &&
    level == "Fourth Year" &&
    course == "Science"
  ) {
    console.log("hello16");
  }

  //Primary_School Fifth Year
  else if (
    stage == "Primary_School" &&
    level == "Fifth Year" &&
    course == "Arabic"
  ) {
    console.log("hello17");
  } else if (
    stage == "Primary_School" &&
    level == "Fifth Year" &&
    course == "English"
  ) {
    console.log("hello18");
  } else if (
    stage == "Primary_School" &&
    level == "Fifth Year" &&
    course == "Math"
  ) {
    console.log("hello19");
  } else if (
    stage == "Primary_School" &&
    level == "Fifth Year" &&
    course == "Religion"
  ) {
    console.log("hello20");
  } else if (
    stage == "Primary_School" &&
    level == "Fifth Year" &&
    course == "Social Studies"
  ) {
    console.log("hello21");
  } else if (
    stage == "Primary_School" &&
    level == "Fifth Year" &&
    course == "Science"
  ) {
    console.log("hello22");
  }

  //Primary_School Sixth Year
  else if (
    stage == "Primary_School" &&
    level == "Sixth Year" &&
    course == "Arabic"
  ) {
    console.log("hello23");
  } else if (
    stage == "Primary_School" &&
    level == "Sixth Year" &&
    course == "English"
  ) {
    console.log("hello24");
  } else if (
    stage == "Primary_School" &&
    level == "Sixth Year" &&
    course == "Math"
  ) {
    console.log("hello25");
  } else if (
    stage == "Primary_School" &&
    level == "Sixth Year" &&
    course == "Religion"
  ) {
    console.log("hello26");
  } else if (
    stage == "Primary_School" &&
    level == "Sixth Year" &&
    course == "Social Studies"
  ) {
    console.log("hello27");
  } else if (
    stage == "Primary_School" &&
    level == "Sixth Year" &&
    course == "Science"
  ) {
    console.log("hello28");
  }
  //Middle_School First Year ===================================================================================
  else if (
    stage == "Middle_School" &&
    level == "First Year" &&
    course == "Arabic"
  ) {
    console.log("hello29");
  } else if (
    stage == "Middle_School" &&
    level == "First Year" &&
    course == "English"
  ) {
    console.log("hello30");
  } else if (
    stage == "Middle_School" &&
    level == "First Year" &&
    course == "Math"
  ) {
    console.log("hello31");
  } else if (
    stage == "Middle_School" &&
    level == "First Year" &&
    course == "Religion"
  ) {
    console.log("hello32");
  } else if (
    stage == "Middle_School" &&
    level == "First Year" &&
    course == "Social Studies"
  ) {
    console.log("hello33");
  } else if (
    stage == "Middle_School" &&
    level == "First Year" &&
    course == "Science"
  ) {
    console.log("hello34");
  }

  //Middle_School Second Year
  else if (
    stage == "Middle_School" &&
    level == "Second Year" &&
    course == "Arabic"
  ) {
    console.log("hello35");
  } else if (
    stage == "Middle_School" &&
    level == "Second Year" &&
    course == "English"
  ) {
    console.log("hello36");
  } else if (
    stage == "Middle_School" &&
    level == "Second Year" &&
    course == "Math"
  ) {
    console.log("hello37");
  } else if (
    stage == "Middle_School" &&
    level == "Second Year" &&
    course == "Religion"
  ) {
    console.log("hello38");
  } else if (
    stage == "Middle_School" &&
    level == "Second Year" &&
    course == "Social Studies"
  ) {
    console.log("hello39");
  } else if (
    stage == "Middle_School" &&
    level == "Second Year" &&
    course == "Science"
  ) {
    console.log("hello40");
  }

  //Middle_School Third Year
  else if (
    stage == "Middle_School" &&
    level == "Third Year" &&
    course == "Arabic"
  ) {
    console.log("hello41");
  } else if (
    stage == "Middle_School" &&
    level == "Third Year" &&
    course == "English"
  ) {
    console.log("hello42");
  } else if (
    stage == "Middle_School" &&
    level == "Third Year" &&
    course == "Math"
  ) {
    console.log("hello43");
  } else if (
    stage == "Middle_School" &&
    level == "Third Year" &&
    course == "Religion"
  ) {
    console.log("hello44");
  } else if (
    stage == "Middle_School" &&
    level == "Third Year" &&
    course == "Social Studies"
  ) {
    console.log("hello45");
  } else if (
    stage == "Middle_School" &&
    level == "Third Year" &&
    course == "Science"
  ) {
    console.log("hello46");
  }

  //High_School First Year ===================================================================================
  else if (
    stage == "High_School" &&
    level == "First Year" &&
    course == "Arabic"
  ) {
    console.log("hello47");
  } else if (
    stage == "High_School" &&
    level == "First Year" &&
    course == "English"
  ) {
    console.log("hello48");
  } else if (
    stage == "High_School" &&
    level == "First Year" &&
    course == "Math"
  ) {
    console.log("hello49");
  } else if (
    stage == "High_School" &&
    level == "First Year" &&
    course == "Religion"
  ) {
    console.log("hello50");
  } else if (
    stage == "High_School" &&
    level == "First Year" &&
    course == "Physics"
  ) {
    console.log("hello51");
  } else if (
    stage == "High_School" &&
    level == "First Year" &&
    course == "Chemistry"
  ) {
    console.log("hello52");
  }

  //High_School Second Year
  else if (
    stage == "High_School" &&
    level == "Second Year" &&
    course == "Arabic"
  ) {
    console.log("hello53");
  } else if (
    stage == "High_School" &&
    level == "Second Year" &&
    course == "English"
  ) {
    console.log("hello54");
  } else if (
    stage == "High_School" &&
    level == "Second Year" &&
    course == "Math"
  ) {
    console.log("hello55");
  } else if (
    stage == "High_School" &&
    level == "Second Year" &&
    course == "Religion"
  ) {
    console.log("hello56");
  } else if (
    stage == "High_School" &&
    level == "Second Year" &&
    course == "Physics"
  ) {
    console.log("hello57");
  } else if (
    stage == "High_School" &&
    level == "Second Year" &&
    course == "Chemistry"
  ) {
    console.log("hello58");
  }

  //High_School Third Year
  else if (
    stage == "High_School" &&
    level == "Third Year" &&
    course == "Arabic"
  ) {
    console.log("hello59");
  } else if (
    stage == "High_School" &&
    level == "Third Year" &&
    course == "English"
  ) {
    console.log("hello60");
  } else if (
    stage == "High_School" &&
    level == "Third Year" &&
    course == "Math"
  ) {
    console.log("hello61");
  } else if (
    stage == "High_School" &&
    level == "Third Year" &&
    course == "Religion"
  ) {
    console.log("hello62");
  } else if (
    stage == "High_School" &&
    level == "Third Year" &&
    course == "Physics"
  ) {
    console.log("hello63");
  } else {
    console.log("hello64");
  }
});
