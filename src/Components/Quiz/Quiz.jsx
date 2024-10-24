import React, { useState, useEffect, useRef } from 'react';
import './Quiz.css';
import { data } from '../../assets/data';

const Quiz = () => {
  let [index, setIndex] = useState(0); //index of question
  let [question_, setQuestion] = useState(data[index]); //question data
  let [lock,setLock] = useState(false); //multi select disabled
  let [score, setScore] = useState(0); //score counter
  let [result, setResult] = useState(false); //check quiz end

  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let optionArray = [Option1,Option2,Option3,Option4]; //correct option identified

  const checkAns = (e,ans) => {
    if(lock === false){

        if(question_.ans === ans){
            e.target.classList.add("correct");
            setScore(prev=>prev+1); //adds score from prev to prev + 1
        } else{
            e.target.classList.add("wrong");
            optionArray[question_.ans - 1].current.classList("correct");
        }

        setLock(true); 
    }
  }

  useEffect(() => {
    setQuestion(data[index]);
  }, [index]); 

  const handleNext = () => {

    if(index === data.length - 1){ //check for final index
        setResult(true);
        return 0;
    }

    if(lock){
        setIndex(index + 1);
        setQuestion(data[index]);
        setLock(false);

        optionArray.map((option) => { //removes previous answer when next btn is pressed
            option.current.classList.remove("wrong");
            option.current.classList.remove("correct");
            return null;
        })
    }
  };

  return (
    <div className='container'>
      <h1>Quiz App</h1>
      <hr />
      <h2>{index + 1}. {question_.question}</h2>
      <ul>
        <li ref={Option1} onClick={(e) => {checkAns(e,1)}}>{question_.option1}</li>
        <li ref={Option2} onClick={(e) => {checkAns(e,2)}}>{question_.option2}</li>
        <li ref={Option3} onClick={(e) => {checkAns(e,3)}}>{question_.option3}</li>
        <li ref={Option4} onClick={(e) => {checkAns(e,4)}}>{question_.option4}</li>
      </ul>

      <button onClick={handleNext}>Next</button>
      <div className="index">{index + 1} of {data.length} questions</div>
    </div>
  );
};

export default Quiz;
