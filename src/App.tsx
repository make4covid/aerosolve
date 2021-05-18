import './App.css';

import Sidebar from 'react-sidebar';
import { SidebarNavigation, NavGroup } from 'components/SidebarNavigation';
import React, { useState } from 'react';
import { AerosolveLogo } from 'components/AerosolveLogo/AerosolveLogo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from 'react-router-dom';

import {
  TargetOccupancy,
  Location,
  TypeOfSpace,
  AreaOfSpace,
  CeilingHeight,
  OccupantAgeGroup,
  VocalActivity,
  PhysicalActivity,
  TypeOfMask,
  MaskFit,
  VentilationFiltration,
} from 'views';

import { headers, navGroupsInitial } from 'data';
import { PageHeader } from 'components/PageHeader/PageHeader';

function App() {
  const [navGroups, setNavGroups] = useState(navGroupsInitial);
  const [currentState, setCurrentState] = useState('');

  function handleChange(newValue: React.SetStateAction<string>) {
    setCurrentState(newValue);
    //When click on a new value => Set it to Active (Not yet complete though)
    //Loop through the array and find index, change the index value and then update
    let newNavGroups = navGroups;
    navGroups.map((item, index) => {
      item.items.map((element: any, subIndex: any) => {
        if (element.value === newValue) {
          newNavGroups[index].items[subIndex].active = true;
        }
      });
    });
    setNavGroups(newNavGroups);
  }

  return (
    <Router>
      <Sidebar
        sidebarClassName="p-8 bg-gray-200 w-1/6 max-w-2xl"
        docked
        shadow={false}
        open
        sidebar={
          <div>
            <div className="cursor-pointer">
              <AerosolveLogo />
            </div>
            <SidebarNavigation
              navGroups={navGroups}
              setNavGroups={setNavGroups}
              handleChange={handleChange}
            />
          </div>
        }
      >
        <Switch>
          <Route path="/target-occupancy">
            <PageHeader {...headers.TargetOccupancyHeader} />
            <TargetOccupancy />
          </Route>
          <Route path="/target-occupancy">
            <PageHeader {...headers.LocationHeader} />
            <Location />
          </Route>
          <Route path="/target-occupancy">
            <PageHeader {...headers.TargetOccupancyHeader} />
            <TargetOccupancy />
          </Route>
          <Route path="/target-occupancy">
            <PageHeader {...headers.TargetOccupancyHeader} />
            <TargetOccupancy />
          </Route>
          <Route path="/target-occupancy">
            <PageHeader {...headers.TargetOccupancyHeader} />
            <TargetOccupancy />
          </Route>
          <Route path="/target-occupancy">
            <PageHeader {...headers.TargetOccupancyHeader} />
            <TargetOccupancy />
          </Route>
          <Route path="/target-occupancy">
            <PageHeader {...headers.TargetOccupancyHeader} />
            <TargetOccupancy />
          </Route>
        </Switch>
      </Sidebar>
      {/* </div> */}
      {/* 
        <div>
          {currentState === 'Target Occupancy' && (
            <TargetOccupancy {...headers.TargetOccupancyHeader} />
          )}
          {currentState === 'Location' && (
            <Location {...headers.LocationHeader} />
          )}
          {currentState === 'Type of Space' && (
            <TypeOfSpace {...headers.TypeOfSpaceHeader} />
          )}
          {currentState === 'Area of Space' && (
            <AreaOfSpace {...headers.AreaOfSpaceHeader} />
          )}
          {currentState === 'Ceiling Height' && (
            <CeilingHeight {...headers.CeilingHeightHeader} />
          )}
          {currentState === 'Occupant Age Groups' && (
            <OccupantAgeGroup {...headers.OccupantAgeGroupHeader} />
          )}
          {currentState === 'Vocal Activity' && (
            <VocalActivity {...headers.VocalActivityHeader} />
          )}
          {currentState === 'Physical Activity' && (
            <PhysicalActivity {...PhysicalActivityHeader} />
          )}
          {currentState === 'Types of Masks' && (
            <TypeOfMask {...TypeOfMaskHeader} />
          )}
          {currentState === 'Mask Fit' && <MaskFit {...MaskFitHeader} />}
          {currentState === 'Ventilation + Filtration' && (
            <VentilationFiltration {...Ventilation_Filtration_Default_Props} />
          )}{' '}
        </div> */}
      {/* </div> */}
    </Router>
  );
}

export default App;
