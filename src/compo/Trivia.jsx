import React, { useEffect, useState } from 'react'
import useSound from 'use-sound';
import src_sounds_correct from "../assets/src_sounds_correct.mp3"
import src_sounds_play from "../assets/src_sounds_play.mp3"
import src_sounds_wrong from "../assets/src_sounds_wrong.mp3"
import src_sounds_wait from "../assets/src_sounds_wait.mp3"

const Trivia = ({data,setTimeOut,setquestionNumber,questionNumber}) => {
    
    const [question,setQuestion]=useState(null);
    const [selectedAnswer,setSelectedAnswer]=useState(null);
    const [classname,setClassName ]=useState(null);
    const [letsPlay]=useSound(src_sounds_play);
    const [correctAnswer]=useSound(src_sounds_correct);
    const [wrongAnswer]=useSound(src_sounds_wrong);
    const [wait]=useSound(src_sounds_wait);

    useEffect(() => {
      letsPlay();
    }, [letsPlay])
    

    useEffect(() => {
      setQuestion(data[questionNumber-1]);
    }, [data,questionNumber]);
    const delay = (duration, callback) => {
        setTimeout(() => {
          callback();
        }, duration);
      };
    
    const handleClick=(e)=>{
        setSelectedAnswer(e);
        setClassName("answer active");
        delay(3000, () => { 
            setClassName(e.correct ? "answer correct" : "answer wrong");
          });
          delay(5000,()=>{
            if(e.correct){
                correctAnswer();
                delay(1000,()=>{
                    setquestionNumber((prev)=>prev+1);
                setSelectedAnswer(null);
                });
            }
            else{
                wrongAnswer(); 
                delay(1000,()=>{
                    setTimeOut(true);
                })
                
            }
          })
    }; 
  return (
    <div className='trivia'>
        <div className='questions'>{question?.question}</div>
        <div className='answers'>
             {
                question?.answers.map((e)=>(
                    <div className={selectedAnswer===e?classname:'answer ' }onClick={()=>handleClick(e)}>{e.text}</div>
                ))
             }
            
        </div>
    </div>
  )
}

export default Trivia;