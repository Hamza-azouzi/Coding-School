

const QuizxData = [
    {
      question: "Which language runs in a web browser?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "javascript",
      correct: "d",
    },
    {
      question: "What does CSS stand for?",
      a: "Central Style Sheets",
      b: "Cascading Style Sheets",
      c: "Cascading Simple Sheets",
      d: "Cars SUVs Sailboats",
      correct: "b",
    },
    {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Hypertext Markdown Language",
      c: "Hyperloop Machine Language",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
    },
  ];
  
  const Quizx = document.getElementById("Quizx");
  const answerEls = document.querySelectorAll(".answer");
  const questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  
  let currentQuizx = 0;
  let score = 0;
  
  loadQuizx();
  
  function loadQuizx() {
    deselectAnswers();
  
    const currentQuizxData = QuizxData[currentQuizx];
  
    questionEl.innerText = currentQuizxData.question;
    a_text.innerText = currentQuizxData.a;
    b_text.innerText = currentQuizxData.b;
    c_text.innerText = currentQuizxData.c;
    d_text.innerText = currentQuizxData.d;
  }
  
  function deselectAnswers() {
    answerEls.forEach((answerEl) => (answerEl.checked = false));
  }
  
  function getSelected() {
    let answer;
    answerEls.forEach((answerEl) => {
      if (answerEl.checked) {
        answer = answerEl.id;
      }
    });
    return answer;
  }
  
  submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
      if (answer === QuizxData[currentQuizx].correct) {
        score++;
      }
  
      currentQuizx++;
  
      if (currentQuizx < QuizxData.length) {
        loadQuizx();
      } else {
        Quizx.innerHTML = `
             <h2>You answered ${score}/${QuizxData.length} questions correctly</h2>
  
             <button onclick="location.reload()">Reload</button>
             `;
      }
    }
  });
  
  
  
  
  