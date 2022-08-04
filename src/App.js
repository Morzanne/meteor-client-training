import './App.css';
import { MeteorProvider } from './config/meteor/MeteorServerProvider';
import Tests from './component/Tests';

function App() {

  return (
    <div className="App">
      <MeteorProvider>
        <Tests />
      </MeteorProvider>
    </div>
  );
}

export default App;
