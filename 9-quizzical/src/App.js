import React, { useState, useEffect } from "react";
import data from "./data";
import Record from "./components/Record";
import { nanoid } from "nanoid";

function App() {
  console.log("App Rendered");

  const [records, setRecords] = useState([]);
  const [count, setCount] = useState(0);
  //   const [checked, setChecked] = useState(false);
  //   const [correct, setCorrect] = useState(0);
  const [resultMode, setResultMode] = useState(false)

  // Utility function to shuffle the array content
  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    const records = getNewRecords();
    setRecords(records);
  }, [count]);

  function handleSelectOption(id, clickedOption) {
    setRecords((records) =>
    records.map((record) => {
        return record.id === id
          ? { ...record, selectedOption: clickedOption, checked: true }
          : record;
      })
    );
  }

  function getNewRecords() {
    const records = [];

    data.map((element) =>
      records.push({
        id: nanoid(),
        question: element.question,
        selectedOption: null,
        correctOption: element.correct_answer,
        options: shuffleArray([
          element.correct_answer,
          ...element.incorrect_answers,
        ]),
        checked: false,
      })
    );

    return records;
  }

  console.log(records)

  const recordElements = records
    ? records.map((record) => {
        return (
          <Record
            key={record.id}
            // This is where diff is
            {...record}
            handleSelectOption={handleSelectOption}
            resultMode={resultMode}
          />
        );
      })
    : [];

   function getCheckedCount() {
        return records.filter(record => record.checked).length
   }

   function getCorrectCount() {
        return records.filter(record => record.selectedOption === record.correctOption).length
   }
 
   const allChecked = records.filter(record => record.checked).length === 5

   function showResults() {
    console.log("Showing results")

   console.log("Checked count")
   console.log(getCheckedCount())


   console.log("Correct count")
   console.log(getCorrectCount())


    setResultMode(true)
   }

  return (
    <main>
      {recordElements}
      <div className="button-container">
        <button disabled={!allChecked} className="check-answers-btn" onClick={showResults}>Check Answers</button>
      </div>
    </main>
  );
}

export default App;
