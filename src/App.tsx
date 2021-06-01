import './App.css';

import Sidebar from 'react-sidebar';
import { SidebarNavigation } from 'components';
import React, { useContext, useState } from 'react';
import { AerosolveLogo } from 'components/AerosolveLogo/AerosolveLogo';
import { BrowserRouter as Router } from 'react-router-dom';

import { PageContext, PageContextProvider } from './context';
import { PageManagement } from './PageManagement';

const App: React.FC<{}> = (props) => {
  return (
    <Router>
      <PageContextProvider>
        <div className="max-h-screen max-w-screen">
          <Sidebar
            sidebarClassName="p-8 fixed w-1/6 left-0 bg-gray-200 max-w-xl"
            docked
            shadow={false}
            open
            sidebar={
              <div className="w-full cursor-pointer">
                <AerosolveLogo />
                <SidebarNavigation />
              </div>
            }
          >
            <PageManagement />
          </Sidebar>
        </div>
      </PageContextProvider>
    </Router>
  );
};

export default App;
