import './App.css';

import Sidebar from "react-sidebar"
import { SidebarNavigation, NavGroup } from 'components/SubComponent/SidebarNavigation'
import React, { useState } from 'react';
import {AerosolveLogo} from "components/SubComponent/AerosolveLogo/AerosolveLogo"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";
import {TargetOccupancy} from "./components/SafetyGoal/TargetOccupancy/TargetOccupancy";
import {Location} from "./components/SpaceInformation/Location/Location"
import {TypeOfSpace} from "./components/SpaceInformation/TypeOfSpace/TypeOfSpace";
import {AreOfSpace} from "./components/SpaceInformation/AreaOfSpace/AreaOfSpace";
import {CeilingHeight} from "./components/SpaceInformation/CeilingHeight/CeilingHeight";
import {OccupantAgeGroup} from "./components/UsageAndBehavior/OccupantAgeGroups/OccupantAgeGroups";
import {VocalActivity} from "./components/UsageAndBehavior/VocalActivity/VocalActivity";
import {PhysicalActivity} from "./components/UsageAndBehavior/PhysicalActivity/PhysicalActivity";
import {TypeOfMask} from "./components/MaskUsage/TypeOfMask/TypeOfMask";
import {MaskFit} from "./components/MaskUsage/MaskFit/MaskFit";
import {Ventilation_Filtration} from "./components/Ventilation/Ventilation_Filtration";
import {PageHeaderProps} from "./components/SubComponent/PageHeader/PageHeader";
const defaultNavGroups: NavGroup[] = [
  { 
    header: "Safety Goal", 
    items: [
      {
        route: "/target-occupancy", 
        completed: false,
        active: false,
        value: "Target Occupancy"
      }
    ]
  },
  {
    header: "Space Informaiton",
    items: [
      {
        route: "/location",
        completed: false,
        active: false,
        value: "Location"
      },{
        route: "/type-of-space", 
        completed: false,
        active: false,
        value: "Type of Space"
      },{
        route: "/area-of-space", 
        completed: false,
        active: false,
        value: "Area of Space"
      },{
        route: "/ceiling-height", 
        completed: false,
        active: false,
        value: "Ceiling Height"
      }
    ]
  },
  {
    header: "Usage and Behavior",
    items: [
      {
        route: "/location",
        completed: false,
        active: false,
        value: "Occupant Age Groups"
      },{
        route: "/type-of-space",
        completed: false,
        active: false,
        value: "Vocal Activity"
      },{
        route: "/area-of-space",
        completed: false,
        active: false,
        value: "Physical Activity"
      }
    ]
  },
  {
    header: "Mask Usage",
    items: [
      {
        route: "/location",
        completed: false,
        active: false,
        value: "Types of Masks"
      },{
        route: "/type-of-space",
        completed: false,
        active: false,
        value: "Mask Fit"
      }
    ]
  },
  {
    header: "Ventilation",
    items: [
      {
        route: "/location",
        completed: false,
        active: false,
        value: "Ventilation + Filtration"
      }
    ]
  }
]

const TargetOccupancyDefaultProps={
  title:"01/Target Occupancy",
  question:"What is the target occupancy for this space",
  recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
  hours:8,
  description:""
}

const LocationDefaultProps={
  title:"02/Location",
  question:"Where is the occupied space located",
  recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
  hours:8, //Should update this from Promise call function
  description:"Different age groups of people have different risk levels in the events of an aerosol infection"
}

const TypeOfSpaceDefaultProps={
  title:"03/Type Of Space",
  question:"What is the typology of the occupied space?",
  recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
  hours:8, //Should update this from Promise call function
  description:"Why understading the room type can help determine the risk in viral transmission"
}
const AreaOfSpaceDefaultProps={
  title:"04/Are of Space",
  question:"About how large is the space you're evaluation?",
  recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
  hours:8, //Should update this from Promise call function
  description:"Why understading the room type can help determine the risk in viral transmission"
}

const CeilingHeightDefaultProps={
  title:"05/Ceiling Height",
  question:"About how tall, on average, is the ceiling in the space?",
  recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
  hours:8, //Should update this from Promise call function
  description:"Ceiling height provides accurate data to the calculation of room volume in air exchange rate"
}
const OccupantAgeGroupDefaultProps={
  title:"06/Occupant Age Groups",
  question:"About how tall, on average, is the ceiling in the space?",
  recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
  hours:8, //Should update this from Promise call function
  description:"Different age groups of people have different risk levels in the event of an aerosol infection"
}

const VocalActivityDefaultProps={
  title:"07/Vocal Activity",
  question:"What types of vocal activities are typical in the space?",
  recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
  hours:8, //Should update this from Promise call function
  description:""
}


const PhysicalActivityDefaultProps={
  title:"08/Physical Activity",
  question:"What types of physical activities are typical in the space?",
  recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
  hours:8, //Should update this from Promise call function
  description:"Challenging physical activity increases breathing rates, which means more aerosols are released into the air"
}

const MaskFitDefaultProps={
  title:"09/Mask Types",
  question:"What type of masks are worn by most occupants within the space?",
  recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
  hours:8, //Should update this from Promise call function
  description:"Masks are the most important factor in keeping your space safe and preventing virus tranmission between occupants"
}

const TypeOfMaskDefaultProps={
  title:"10/Mask Fit",
  question:"Quick survey of mask compliance among the occupants",
  recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
  hours:8, //Should update this from Promise call function
  description:"Wearing masks correctly is an effective way to prevent the aerosol transmission of coronavirus"
}

const Ventilation_Filtration_Default_Props={
  title:"11/Ventilation+Filtration",
  question:"Quick survey of the population of occupants in the space",
  recommendation:"This space is safe for 30 people for 6 out of 8 target hours",
  hours:8, //Should update this from Promise call function
  description:"Different age groups of people have different risk levels in the event of an aerosol infection"
}

function App() {
  const [navGroups,setNavGroups] = useState(defaultNavGroups)
  const [currentState,setCurrentState] = useState("")

  function handleChange(newValue: React.SetStateAction<string>){
    setCurrentState(newValue)
    //When click on a new value => Set it to Active (Not yet complete though)
    //Loop through the array and find index, change the index value and then update
    let newNavGroups = navGroups
    navGroups.map((item,index)=> {
        item.items.map((element,subIndex)=>{
            if(element.value === newValue){
              newNavGroups[index].items[subIndex].active = true
            }
        })
    })
    setNavGroups(newNavGroups)
  }

  return (
    <Router>
      <div className="grid grid-cols-2 divide-x divide-green-500">
        <div>
          <Sidebar sidebarClassName="p-8 bg-gray-200" docked shadow={false} open sidebar={
              <div>
                <div className="cursor-pointer">
                  <AerosolveLogo/>
                </div>
                <SidebarNavigation navGroups={navGroups} setNavGroups={setNavGroups} handleChange={handleChange}/>
              </div>
            }

          >
          </Sidebar>
        </div>

        <div>
        {currentState === "Target Occupancy" && <TargetOccupancy {...TargetOccupancyDefaultProps}/>}
        {currentState === "Location" && <Location {...LocationDefaultProps}/>}
        {currentState === "Type of Space" && <TypeOfSpace {...TypeOfSpaceDefaultProps}/>}
        {currentState === "Area of Space" && <AreOfSpace {...AreaOfSpaceDefaultProps}/>}
        {currentState === "Ceiling Height" && <CeilingHeight {...CeilingHeightDefaultProps}/>}
        {currentState === "Occupant Age Groups" && <OccupantAgeGroup {...OccupantAgeGroupDefaultProps}/>}
        {currentState === "Vocal Activity" && <VocalActivity {...VocalActivityDefaultProps}/>}
        {currentState === "Physical Activity" && <PhysicalActivity {...PhysicalActivityDefaultProps}/>}
        {currentState === "Types of Masks" && <TypeOfMask {...TypeOfMaskDefaultProps}/>}
        {currentState === "Mask Fit" && <MaskFit {...MaskFitDefaultProps}/>}
        {currentState === "Ventilation + Filtration" && <Ventilation_Filtration {...Ventilation_Filtration_Default_Props}/>}
        </div>

      </div>
    </Router>
  );
}


export default App;
