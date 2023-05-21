import './Home.css';
import Arrow from '../../components/Arrow';

function App() {
  return (
    <div className='App'>
      <div className='wrapper'>
        <div className='header_container'>
          <h1>What do you want to do today?</h1>
        </div>
        <div className='options'>
          <div>
            <Arrow isOrange isMassive />
            <a href='/timer'>Timer</a>
          </div>
          <div>
            <Arrow isBlue={false} />
            <a href='/todo'>To-do</a>
          </div>
          <a href='/both'>Both</a>
        </div>
      </div>
    </div>
  );
}

export default App;
