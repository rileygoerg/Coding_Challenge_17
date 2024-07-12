import React, {useState} from 'react';
import tasks from './tasks';
import FancyText from './FancyText';


export default function TaskGenerator(){
  const [currentTaskNum, setCurrentTaskNum] = useState(0);
  const [currentMessageNum, setCurrentMessageNum] = useState(0);

    const messages = [
    "You got this!",
    "Keep it up!",
    "This one's easy!",
    "Never give up!",
  ];
//  Sets next task and message
  function nextTask (){
    setCurrentTaskNum((prevIndex) => (prevIndex + 1) % tasks.length);
    setCurrentMessageNum((prevIndex) => (prevIndex + 1) % messages.length);
  };
// Marks task as complete
  function completeTask(){
    tasks[currentTaskNum].isCompleted = true;
  };

  const currentTask = tasks[currentTaskNum];
  const currentMessage = messages[currentMessageNum];
// Displays current task and message
  return (
    <div>
      <FancyText title={true} text="Current Task:" />
      <div>
        <span>{currentTask.name} - </span>
        <span>{currentTask.isCompleted ? "Completed ✅" : "Not Completed❌"}</span>
      </div>
      <button onClick={nextTask}>Next Task</button>
      <button onClick={completeTask}>Complete Task</button>
      <FancyText title={false} text={currentMessage} />
    </div>
  );
};