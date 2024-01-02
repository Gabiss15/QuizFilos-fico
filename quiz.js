const questions = [
  {
    question: "(IFRS – 2010) Platão considera as opiniões e as percepções sensoriais, ou conhecimento das imagens das coisas, como fonte de erro, pois nunca alcançam à verdade plena. Considerando a alegoria do Mito da Caverna, utilizada por Platão no livro A República para elucidar suas concepções antropológica e epistemológica, é incorreto afirmar que:",
    options: [
      "A) O Mundo Sensível é inferior ao Mundo Inteligível;",
      "B) O verdadeiro conhecimento é atingível pela razão;",
      "C) As sombras dos verdadeiros seres são o que os sentidos captam;",
      "D) A verdade essencial é conhecida através do conceito;",
      "E) O ser humano nunca se libertará das 'prisões' a que está submetido por mais que lute e se esforce; ->"
    ],
    correctAnswer: 4
  },
  {
    question: "(UNAMA – 2008) Entre os séculos XVI ao XVIII, os filósofos formularam diversas epistemologias ou teorias do conhecimento. Entretanto, uma importante vertente dessa investigação foi a empirista. Em especial, no que diz respeito ao empirismo filosófico deste período, podemos afirmar que os filósofos mais famosos foram os empiristas ingleses. São eles:",
    options: [
      "A) Thomas Hobbes, John Locke, George Berkeley e Bertrand Russell.",
      "B) Francis Bacon, George Berkeley, Husserl e John Locke.",
      "C) Isaac Newton, John Locke, Bertrand Russell e Thomas Hobbes.",
      "D) Francis Bacon, John Locke, George Berkeley e David Hume; ->"
    ],
    correctAnswer: 3
  },
  {
    question: "(UFFS – 2010) De acordo com Locke, o conhecimento é formado a partir das experiências. Assinale a alternativa incorreta a respeito das ideias em Locke:",
    options: [
      "A) A mente possui ideias inatas, que são bases para o conhecimento.",
      "B) Existem ideias advindas dos sentidos como a visão e a audição.",
      "C) Ideias de reflexão são provenientes de operações mentais.",
      "D) A mente forma ideias complexas a partir de ideias simples.",
      "E) Existem ideias simples, que não são criadas pela mente. ->"
    ],
    correctAnswer: 4
  },
  {
    question: "(UEM – Vestibular 2010 – Inverno - Adaptado) A Filosofia de Friedrich Nietzsche (1844-1900) é marcada por uma nova relação entre o racional e o irracional, na medida em que o irracional adquire validade por corresponder à necessidade de um movimento de afirmação da vida. Analise as afirmativas abaixo e marque a alternativa que apresenta as afirmações corretas:",
    options: [
      "I – Para Nietzsche, o Iluminismo não libertou os homens de seus prejuízos, mas reforçou ainda mais seus mitos, como a crença na razão e no conhecimento científico.",
      "II – O recurso metodológico proposto por Nietzsche é a genealogia, isto é, movimento teórico que recorre à gênese de um discurso, conceito ou prática, apontando suas arbitrariedades e interesses.",
      "III – Para Nietzsche, o conhecimento é fruto de um lento processo de acumulação e comprovação empírica, cuja finalidade é salvar os fenômenos.",
      "IV – Contra a moral dos aristocratas e nobres, Nietzsche defende os fracos, isto é, a moral dos escravos.",
      "V – A “vontade de potência” é a afirmação do nacional-socialismo alemão, expresso na doutrina do super-homem e no antissemitismo nietzscheano. ->"
    ],
    correctAnswer: 4
  },
  {
    question: "(ENEM 2012) Para Platão, o que havia de verdadeiro em Parmênides era que o objeto de conhecimento é um objeto de razão e não de sensação, e era preciso estabelecer uma relação entre objeto racional e objeto sensível ou material que privilegiasse o primeiro em detrimento do segundo. Lenta, mas irresistivelmente, a Doutrina das Ideias formava-se em sua mente. (ZINGANO, M. Platão e Aristóteles: o fascínio da filosofia. São Paulo: Odysseus, 2012 - adaptado) O texto faz referência à relação entre razão e sensação, um aspecto essencial da Doutrina das Ideias de Platão (427 a.C.-346 a.C.). De acordo com o texto, como Platão se situa diante dessa relação?",
    options: [
      "A) Estabelecendo um abismo intransponível entre as duas.",
      "B) Privilegiando os sentidos e subordinando o conhecimento a eles.",
      "C) Atendo-se à posição de Parmênides de que razão e sensação são inseparáveis.",
      "D) Afirmando que a razão é capaz de gerar conhecimento, mas a sensação não.",
      "E) Rejeitando a posição de Parmênides de que a sensação é superior à razão. ->"
    ],
    correctAnswer: 4
  },
  {
    question: "(UFS – 2011) John Locke é apontado como pioneiro do materialismo moderno. Sobre o “materialismo moderno”, é CORRETO afirmar que:",
    options: [
      "A) “Deriva as 'ideias' de que se constitui o conhecimento diretamente das sensações que se marcaram na mente [...] não cabendo assim ao pensamento nada mais, [...] que combinar, comparar e analisar essas mesmas ideias.” ->",
      "B) “Todo o princípio do conhecimento material é sensorial, transponível, relativo e infinito.”",
      "C) “O valor da experiência sensível, como fator primário da elaboração cognitiva, está na possibilidade de conhecer a essência da natureza.”",
      "D) “O conhecimento deve ser introjetado a partir da experiência extrassensorial, peculiar a todo ser pensante.”"
    ],
    correctAnswer: 0
  }
]

let currentQuestion = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("nextButton");
const prevButton = document.getElementById("prevButton");
const progressBar = document.querySelectorAll("#progressBar li");

function showProgress() {
  progressBar.forEach((item, index) => {
    if (index < currentQuestion) {
      item.classList.add("correct");
    } else {
      item.classList.remove("correct");
    }
  });
}

function showQuestion() {
  const q = questions[currentQuestion];
  questionElement.textContent = q.question;
  optionsElement.innerHTML = "";

  q.options.forEach((option, index) => {
    const li = document.createElement("li");
    li.textContent = option;
    li.onclick = () => checkAnswer(index);
    optionsElement.appendChild(li);
  });
}

function checkAnswer(selectedOption) {
  const q = questions[currentQuestion];
  const options = optionsElement.children;

  for (let i = 0; i < options.length; i++) {
    options[i].classList.remove("selected");
    options[i].onclick = null;
    if (i === q.correctAnswer) {
      options[i].classList.add("correct-answer");
    }
  }

  if (selectedOption === q.correctAnswer) {
    options[selectedOption].classList.add("selected", "correct-answer");
  } else {
    options[selectedOption].classList.add("selected", "wrong-answer");
  }

  disableOptions();
  nextButton.disabled = false;
}

function disableOptions() {
  const options = optionsElement.children;
  for (let i = 0; i < options.length; i++) {
    options[i].onclick = null;
  }
}

nextButton.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
    nextButton.disabled = true;
  } else {
    questionElement.textContent = "Fim do Quiz!";
    optionsElement.innerHTML = "";
    nextButton.style.display = "none";
    prevButton.style.display = "none";
  }
});

prevButton.addEventListener("click", () => {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion();
  }
});

showQuestion();


