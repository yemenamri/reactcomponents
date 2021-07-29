import logo from './logo.svg';
import './App.css';
import ComponentFullName from './Component/Profile/FullName.js'
import ComponentAddress from './Component/Profile/Address.js'
import ComponentImage from './Component/Profile/ProfilePhoto.js'
function App() {
  return (
    <div className="App">
      <ComponentImage />
     <ComponentFullName />
     <ComponentAddress />
     
    </div>
  );
}

export default App;
