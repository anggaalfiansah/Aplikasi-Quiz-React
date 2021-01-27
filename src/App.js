import './App.css';
import Navbar from './components/Navbar';
import Soal from './components/Soal';

function App() {
  return (
    <div className="bg-secondary">
      <Navbar />
      <div className="container py-5">
        <Soal />
      </div>
    </div>
  );
}

export default App;
