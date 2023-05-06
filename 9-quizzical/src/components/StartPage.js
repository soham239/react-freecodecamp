function StartPage(props) {
    
    return  (
        <div className="start-page-container">
            <h1 className="start-page-title">Quizzical</h1>
            <h3 className="start-page-desc">Test your trivia knowledge !!!</h3>
            <button className="start-button" onClick={props.startQuiz}>Start Quiz</button>
        </div>
    )
    
}

export default StartPage