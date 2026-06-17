import './App.css';
import Flashcard from '/home/marco/Web-Development-Project-2---Computer-Science-Trivia/computer-science-trivia/src/components/Flashcard.jsx';

const App = () => {
  
  
  return (
    <div className="App">
      <div class="header">
        <h2>Computer Science Quiz!</h2>
        <h4>This is an app testing your CS skills through trivia.</h4>
        <h5>
          Number of cards: 10
        </h5>
      </div>
      
      <Flashcard />

    </div>
  )
}

export default App;