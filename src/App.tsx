import './App.css';
import SidebarGroup, {SidebarGroupProps} from 'components/SidebarGroup/SidebarGroup'
import { ItemStatus } from 'components/SidebarGroup/SidebarGroupItem/SidebarGroupItem';
import Sidebar from "react-sidebar"

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const group: SidebarGroupProps = { 
  header: "Group 1", 
  items: [
    {
      route: "/about", 
      status: ItemStatus.Inactive, 
      value: "About"
    },{
      route: "/", 
      status: ItemStatus.Inactive, 
      value: "Home"
    },{
      route: "/users", 
      status: ItemStatus.Inactive, 
      value: "users"
    }
  ]
}

function App() {
  return (
    <Router>
      <Sidebar sidebarClassName="p-8 bg-gray-200" docked shadow={false} open sidebar={<div className="App">
          <SidebarGroup items={group.items} header={group.header}/>
        </div>}>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      </Sidebar>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default App;
