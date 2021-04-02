import './App.css';
import Header from './components/Header';
import Taskinput from './components/Taskinput';

function App() {
  return (
    <div className="container">
      <Header className='header'/>
      <Taskinput />
    </div>
  );
}

export default App;
