function Questions(props) {
  return (
    <div className="questions-container">
      {props.recordElements}

      <div className="button-container">
        {props.resultMode ? (
            <div className="result-container">
                <h4 className="result-text">You scored {props.getCorrectCount()}/5 correct answers </h4>
                <button
        
            className="results-btn"
            onClick={props.startNewRound}
          >
            Play Again
          </button>
            </div>
            
        ) : (
          <button
            disabled={!props.allChecked}
            className="results-btn"
            onClick={props.showResults}
          >
            Check Answers
          </button>
        )}
      </div>
    </div>
  );
}

export default Questions;
