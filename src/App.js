import React, { useState,useEffect } from "react";
import ReactDOM from "react";
import "./App.css";
import Timer from "./compo/Timer";
import Trivia from "./compo/Trivia";
import Start from "./compo/Start";

function App() {
  const [questionNumber, setquestionNumber] = useState(1);
  const [timeOut, setTimeOut] = useState(false);
  const [userName,setUserName]=useState(null);
  const [earned, setEarned] = useState(" $ 0");

  const data = [
    {
      id: 1,
      question: "How can we describe an array in the best possible way?",
      answers: [
        {
          text: "The Array shows a hierarchical structure.",
          correct: false,
        },
        {
          text: "Container that stores the elements of similar types",
          correct: true,
        },
        {
          text: "Arrays are immutable.",
          correct: false,
        },
        {
          text: "The Array is not a data structure",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: " Which of the following is the correct way of declaring an array?",
      answers: [
        {
          text: "int javatpoint[10];",
          correct: true,
        },
        {
          text: "int javatpoint;",
          correct: false,
        },
        {
          text: "javatpoint{20};",
          correct: false,
        },
        {
          text: "array javatpoint[10];",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: " How can we initialize an array in C language?",
      answers: [
        {
          text: "int arr[2]=(10, 20)",
          correct: false,
        },
        {
          text: "int arr(2)={10, 20}",
          correct: false,
        },
        {
          text: "int arr(2) = (10, 20)",
          correct: false,
        },
        {
          text: "int arr[2] = {10, 20}",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which data structure is mainly used for implementing the recursive algorithm?",
      answers: [
        {
          text: "Queue",
          correct: false,
        },
        {
          text: "Binary tree",
          correct: false,
        },
        {
          text: "Stack",
          correct: true,
        },
        {
          text: "Linked list",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: " Which of the following is not the correct statement for a stack data structure?",
      answers: [
        {
          text: "Arrays can be used to implement the stack",
          correct: false,
        },
        {
          text: "Top of the stack contains the last inserted element",
          correct: false,
        },
        {
          text: "Elements are stored in a sequential manner",
          correct: false,
        },
        {
          text: "Stack follows FIFO",
          correct: true,
        },
      ],
    },
    {
      id: 6,
      question: "If the elements '1', '2', '3' and '4' are inserted in a queue, what would be order for the removal?",
      answers: [
        {
          text: "4321",
          correct: false,
        },
        {
          text: "1234",
          correct: true,

        },
        {
          text: "3241",
          correct: false,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "The time complexity of enqueue operation in Queue is __?",
      answers: [
        {
          text: "O(1)",
          correct: true,
        },
        {
          text: "O(n)",
          correct: false,

        },
        {
          text: "O(logn)",
          correct: false,
        },
        {
          text: "O(nlogn)",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: " Which of the following statement is not true regarding the priority queue?",
      answers: [
        {
          text: "Processes with different priority can be easily handled",
          correct: false,
        },
        {
          text: "Easy to implement",
          correct: false,

        },
        {
          text: "Deletion is easier",
          correct: true,
        },
        {
          text: "None of the above",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "Which of the following is the time complexity to search an element in the linked list?",
      answers: [
        {
          text: "O(1)",
          correct: false,
        },
        {
          text: "O(n)",
          correct: true,

        },
        {
          text: "O(logn)",
          correct: false,
        },
        {
          text: "O(nlogn)",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "Which of the following statement is not true about the doubly linked list?",
      answers: [
        {
          text: "We can traverse in both the directions.",
          correct: false,
        },
        {
          text: "It requires extra space",
          correct: false,

        },
        {
          text: "Implementation of doubly linked list is easier than the singly linked list",
          correct: true,
        },
        {
          text: "It stores the addresses of the next and the previous node",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: " Which one of the following techniques is not used in the Binary tree?",
      answers: [
        {
          text: "Randomized traversal",
          correct: true,
        },
        {
          text: "Preorder traversal",
          correct: false,

        },
        {
          text: "Postorder traversal",
          correct: false,
        },
        {
          text: "Inorder traversal",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "Which of the following options is not true about the Binary Search tree?",
      answers: [
        {
          text: "The value of the left child should be less than the root node",
          correct: false,
        },
        {
          text: "The value of the right child should be greater than the root node.",
          correct: false,

        },
        {
          text: "The left and right sub trees should also be a binary search tree",
          correct: false,
        },
        {
          text: "None of the above",
          correct: true,
        },
      ],
    },{
      id: 13,
      question: " What would be the time complexity if user tries to insert the element at the end of the linked list (head pointer is known)?",
      answers: [
        {
          text: "O(1)",
          correct: false,
        },
        {
          text: "O(n)",
          correct: true,

        },
        {
          text: "O(logn)",
          correct: false,
        },
        {
          text: "O(nlogn)",
          correct: false,
        },
      ],
    },
    {
      id: 14,
      question: "We can use a self–balancing binary search tree for implementing the:?",
      answers: [
        {
          text: "Hash table",
          correct: false,
        },
        {
          text: "Priority queue",
          correct: true,

        },
        {
          text: "Heap sort and Priority queue",
          correct: false,
        },
        {
          text: " Heap sort",
          correct: false,
        },
      ],
    },
    {
      id: 15,
      question: " What is the time complexity for checking if an undirected graph with E edges and V vertices is Bipartite, given its adjacency matrix?",
      answers: [
        {
          text: " O(E)",
          correct: false,
        },
        {
          text: " O(V)",
          correct: false,

        },
        {
          text: "O(E*E)",
          correct: false,
        },
        {
          text: "O(V*V)",
          correct: true,
        },
      ],
    },
  ];

  const money = [
    { id: 1, amount: "$100" },
    { id: 2, amount: "$200" },
    { id: 3, amount: "$300" },
    { id: 4, amount: "$400" },
    { id: 5, amount: "$500" },
    { id: 6, amount: "$1000" },
    { id: 7, amount: "$5000" },
    { id: 8, amount: "$10000" },
    { id: 9, amount: "$20000" },
    { id: 10, amount: "$50000" },
    { id: 11, amount: "$100000" },
    { id: 12, amount: "$200000" },
    { id: 13, amount: "$500000" },
    { id: 14, amount: "$1000000" },
    { id: 15, amount: "$5000000" },

  ].reverse();
  useEffect(() => {
    questionNumber>1 && setEarned(money.find((m)=>m.id===questionNumber-1).amount)
  }, [money,questionNumber])
  
  return (
    <div className="app">
      {userName?(
        <>
        <div className="main">
        {timeOut ? <h1 className="endText">You earned:{earned}</h1> : (
          <>
            <div className="top">
              <div className="timer"><Timer setTimeOut={setTimeOut} questionNumber={questionNumber}/></div>
            </div>
            <div className="bottom"><Trivia data={data} setTimeOut={setTimeOut} setquestionNumber={setquestionNumber}
              questionNumber={questionNumber}
            />
            </div></>
        )}
          
      </div>

      <div className="pyramid">
        <ul className="moneyList">
          {
            money.map((m) => (
              <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                <span className="moneyListItemNumber">{m.id}</span>
                <span className="moneyListItemAmount">{m.amount}</span>
              </li>
            ))
          }

        </ul>
      </div>
        </>
      ):(<Start setUserName={setUserName}/>)}
      
    </div>


  );
}

export default App;
