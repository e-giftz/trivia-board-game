import Header from './components/Header'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className="container">
      <Header />
      <Button>Start Game</Button>
    </div>
  );
}

export default App;
