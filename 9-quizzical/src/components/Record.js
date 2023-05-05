import { nanoid } from "nanoid";

function Record(props) {
  function handleClick(option) {
    props.handleSelectOption(props.id, option);
  }

  const optionButtons = props.options.map((option) => {
    // Identify color for button
    let colorCode;
    if (props.resultMode) {
      if (props.selectedOption === props.correctOption) {
        // Correct answer record
        if (props.selectedOption === option) {
          colorCode = "correct";
        }
      } else {
        if (props.selectedOption === option) {
          colorCode = "incorrect";
        }
        if (props.correctOption === option) {
          colorCode = "correct";
        }
      }
    } else {
      if (props.selectedOption && props.selectedOption === option) {
        colorCode = "selected";
      }
    }

    return (
      <button
        key={nanoid()}
        className={`option-button ${colorCode}`}
        onClick={() => handleClick(option)}
      >
        {option}
      </button>
    );
  });

  return (
    <div>
      <h1 className="question">{props.question}</h1>
      <div className="option-buttons-group">{optionButtons}</div>
      <hr className="divider"></hr>
    </div>
  );
}

export default Record;
