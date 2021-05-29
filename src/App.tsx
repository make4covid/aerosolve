import './App.css';

import Sidebar from "react-sidebar"
import { SidebarNavigation, NavGroup } from 'components/SubComponent/SidebarNavigation'
import React, {useContext, useState} from 'react';
import {AerosolveLogo} from "components/SubComponent/AerosolveLogo/AerosolveLogo"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import {PageContext, PageContextProvider} from './context';
import {PageManagement} from "./PageManagement";

const App: React.FC<{ } > = (props) => {


  return (
    <Router>
      <PageContextProvider>
        <div className="max-w-screen max-h-screen">
            <Sidebar sidebarClassName="p-8 fixed w-1/6 left-0 bg-gray-200" docked shadow={false} open sidebar={
                  <div className="cursor-pointer">
                    <AerosolveLogo/>
                    <SidebarNavigation/>
                  </div>
              }

            >
            </Sidebar>

          {/*row-span-1 doesn't handle button? What is an alternative way to do this?*/}
          <div className="fixed w-5/6 right-0">
            <PageManagement/>
          </div>
        </div>
      </PageContextProvider>
    </Router>
  );
}


export default App;
