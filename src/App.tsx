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
        <div className="grid grid-cols-4">
          <div >
            <Sidebar sidebarClassName="p-8 bg-gray-200" docked shadow={false} open sidebar={

                <div className="w-16 md:w-32 lg:w-48">
                  <div className="cursor-pointer">
                    <AerosolveLogo/>
                  </div>
                  <SidebarNavigation/>
                </div>
              }

            >
            </Sidebar>
          </div>
          {/*row-span-1 doesn't handle button? What is an alternative way to do this?*/}
            <PageManagement/>
        </div>
      </PageContextProvider>
    </Router>
  );
}


export default App;
