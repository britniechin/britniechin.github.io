
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;

var questions = [
  {
      question: "What major am I in?",
      a: "Interactive Media Design",
      b: "Computer Science & Software Engineering",
      c: "Biochemistry",
      answer: "B"
    },
  {
      question: "What was the name of Los Angeles artist that painted the LeBron James mural?",
      a: "Esteban Sandoval",
      b: "Jose Estrada",
      c: "Gustavo Zermeño Jr.",
      answer: "C"
    },
  {
      question: "What was the first gaming console I owned?",
      a: "Nintendo 64",
      b: "Xbox 360",
      c: "Gameboy",
      answer: "A"
    },
  {
      question: "What is my favorite social media?",
      a: "Instagram",
      b: "Facebook",
      c: "Twitter",
      answer: "C"
    }
  ];
// this get function is short for the getElementById function  
function get(x){
  return document.getElementById(x);
}

function loadQuestion(){
  test = get("test");
  if(pos >= questions.length){
    test.innerHTML = "<h3>You got "+correct+" of "+questions.length+" questions correct!</h3>";
    get("test_status").innerHTML = "Test completed";
    // resets the variable to allow users to restart the test
    pos = 0;
    correct = 0;
    return false;
  }
  get("test_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
  
  question = questions[pos].question;
  chA = questions[pos].a;
  chB = questions[pos].b;
  chC = questions[pos].c;
  // display the question
  test.innerHTML = "<h3>"+question+"</h3>";
  // display the answer options
  test.innerHTML += "<label> <input type='radio' name='choices' value='A'> "+chA+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='B'> "+chB+"</label><br>";
  test.innerHTML += "<label> <input type='radio' name='choices' value='C'> "+chC+"</label><br><br>";
  test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer(){
  // use getElementsByName because we have an array which it will loop through
  choices = document.getElementsByName("choices");
  for(var i=0; i<choices.length; i++){
    if(choices[i].checked){
      choice = choices[i].value;
    }
  }
  // checks if answer matches the correct choice
  if(choice == questions[pos].answer){
    //each time there is a correct answer this value increases
    correct++;
  }
  // changes position of which character user is on
  pos++;
  // then the renderQuestion function runs again to go to next question
  loadQuestion();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", loadQuestion);