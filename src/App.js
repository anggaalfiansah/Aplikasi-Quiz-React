import './App.css';
import Navbar from './components/Navbar';
import Soal from './components/Soal';

function App() {
  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="container py-5">
        <div className="mx-auto my-5 px-5 py-3 border border-secondary bg-light shadow rounded">
          <Soal />
        </div>
      </div>
    </div>
  );
}

export default App;
