import logo from './logo.svg';
import './App.css';
import SidebarGroup from './components/SidebarGroup/SidebarGroup'
import {ReactComponent as CheckboxIcon} from './checkbox.svg'

function App() {
  return (
    <div className="App">
      <CheckboxIcon/>
      <SidebarGroup/>
    </div>
  );
}

export default App;
