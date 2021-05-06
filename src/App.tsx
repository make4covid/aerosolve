import './App.css';
import SidebarGroup, {SidebarGroupProps} from 'components/SidebarGroup/SidebarGroup'
import { ItemStatus } from 'components/SidebarGroup/SidebarGroupItem/SidebarGroupItem';

const group: SidebarGroupProps = { 
  header: "Group 1", 
  items: [{
    action: () => {}, 
    status: ItemStatus.Inactive, 
    value: "Item 1 in Group 1"
  }]
}

function App() {
  return (
    <div className="App">
      <SidebarGroup items={group.items} header={group.header}/>
    </div>
  );
}

export default App;
