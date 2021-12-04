export let questions = [
  {
    id: 1,
    check: "option__one",
    question:
      "If a = [1, 2, 3, 4] then after executing a.shift(10) for 3 times what will be the length of the array ?",
    options: ["1", "7", "5", "None"],
    correct: false,
  },
  {
    id: 2,
    check: "option__two",
    question: "How do you find the minimum of x and y using JavaScript?",
    options: ["min(x,y);", "Math.min(x,y)", " Math.min(xy)", "min(xy);"],
    correct: false,
  },
  {
    id: 3,
    check: "option__four",
    question:
      "Which JavaScript label catches all the values, except for the ones specified?",
    options: ["catch", "label", "try", "default"],
    correct: false,
  },
  {
    id: 4,
    check: "option__one",
    question: `What will log to console the following code snippet:\n
            for (var i = 0; i < 3; i++) {
              setTimeout(function log() {
                console.log(i);
              }, 1000);
          }`,
    options: ["333", "123", "012", "222"],
    correct: false,
  },
  {
    id: 5,
    check: "option__one",
    question: `Which company introduced javascript ?`,
    options: ["Netscape", "Netflix", "Facebook", "IBM"],
    correct: false,
  },
];
