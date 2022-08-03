import './App.css';
import { MeteorProvider } from './config/meteor/MeteorServerProvider';
import Tasks from './component/Tasks';

function App() {

  return (
    <div className="App">
      <MeteorProvider>
        <Tasks />
      </MeteorProvider>
    </div>
  );
}

export default App;
