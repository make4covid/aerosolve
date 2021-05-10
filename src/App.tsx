import './App.css';

import Sidebar from "react-sidebar"
import { SidebarNavigation, NavGroup } from 'components/SidebarNavigation'
import React, { useState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

const defaultNavGroups: NavGroup[] = [
  { 
    header: "Safety Goal", 
    items: [
      {
        route: "/target-occupancy", 
        completed: true,
        value: "Target Occupancy"
      }
    ]
  },
  {
    header: "Space Informaiton",
    items: [
      {
        route: "/location",
        completed: true,
        value: "Location"
      },{
        route: "/type-of-space", 
        completed: true,
        value: "Type of Space"
      },{
        route: "/area-of-space", 
        completed: true,
        active: true,
        value: "Area of Space"
      },{
        route: "/ceiling-height", 
        completed: false,
        value: "Ceiling Height"
      }
    ]
  }
]

function App() {
  const [navGroups] = useState(defaultNavGroups)

  return (
    <Router>
      <div className="App">
        <Sidebar sidebarClassName="p-8 bg-gray-200" docked shadow={false} open sidebar={
            <SidebarNavigation navGroups={navGroups}/>
          }>
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
      </div>
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
