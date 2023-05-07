import React, { useState, useEffect } from "react";
import Record from "./components/Record";
import { nanoid } from "nanoid";
import StartPage from "./components/StartPage";
import Questions from "./components/Questions";
import he from "he";

function App() {
  console.log("App Rendered");

  const [records, setRecords] = useState([]);
  const [count, setCount] = useState(0);
  const [resultMode, setResultMode] = useState(false);
  const [started, setStarted] = useState(false);

  // Utility function to shuffle the array content
  const shuffleArray = (arr) => arr.sort(() => Math.random() - 0.5);

  useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => data.results)
      .then((data) => {
        const records = [];
        data.map((element) =>
          records.push({
            id: nanoid(),
            question: he.decode(element.question),
            selectedOption: null,
            correctOption: he.decode(element.correct_answer),
            options: shuffleArray([
                he.decode(element.correct_answer),
              ...element.incorrect_answers.map(answer => he.decode(answer)),
            ]),
            checked: false,
          })
        );

        setRecords(records);
      });
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

  function getCorrectCount() {
    return records.filter(
      (record) => record.selectedOption === record.correctOption
    ).length;
  }

  const allChecked = records.filter((record) => record.checked).length === 5;

  function showResults() {
    setResultMode(true);
  }

  function startQuiz() {
    setStarted(true);
  }

  function startNewRound() {
    setResultMode(false);
    setCount((prevCount) => prevCount + 1);
  }

  return (
    <main>
      {started ? (
        <Questions
          recordElements={recordElements}
          allChecked={allChecked}
          showResults={showResults}
          resultMode={resultMode}
          getCorrectCount={getCorrectCount}
          startNewRound={startNewRound}
        />
      ) : (
        <StartPage startQuiz={startQuiz} />
      )}
    </main>
  );
}

export default App;
