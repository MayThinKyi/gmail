import './App.css';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div className="App">
      <Header />
      {/* Main Component Start */}
      <div className='main'>
        <Sidebar/>
      </div>

    </div>
  );
}

export default App;