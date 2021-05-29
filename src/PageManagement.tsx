import React, {useContext, useState} from 'react';
import {TargetOccupancy} from "./components/SafetyGoal/TargetOccupancy/TargetOccupancy";
import {TypeOfSpace} from "./components/SpaceInformation/TypeOfSpace/TypeOfSpace";
import {AreOfSpace} from "./components/SpaceInformation/AreaOfSpace/AreaOfSpace";
import {CeilingHeight} from "./components/SpaceInformation/CeilingHeight/CeilingHeight";
import {OccupantAgeGroup} from "./components/UsageAndBehavior/OccupantAgeGroups/OccupantAgeGroups";
import {PhysicalActivity} from "./components/UsageAndBehavior/PhysicalActivity/PhysicalActivity";
import {VocalActivity} from "./components/UsageAndBehavior/VocalActivity/VocalActivity";
import {TypeOfMask} from "./components/MaskUsage/TypeOfMask/TypeOfMask";
import {MaskFit} from "./components/MaskUsage/MaskFit/MaskFit";
import {Ventilation_Filtration} from "./components/Ventilation/Ventilation_Filtration";
import {Location} from "./components/SpaceInformation/Location/Location"
import {PageContext} from "./context";
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


export const PageManagement: React.FC<{ } > = (props) => {
    // @ts-ignore
    const { contextState, updateContext } = useContext(PageContext);


    return <div className="m-12 max-h-screen">
        {contextState.page[contextState.index] === "Target Occupancy" && <TargetOccupancy {...TargetOccupancyDefaultProps}/>}
        {contextState.page[contextState.index] === "Location" && <Location {...LocationDefaultProps}/>}
        {contextState.page[contextState.index] === "Type of Space" && <TypeOfSpace {...TypeOfSpaceDefaultProps}/>}
        {contextState.page[contextState.index] === "Area of Space" && <AreOfSpace {...AreaOfSpaceDefaultProps}/>}
        {contextState.page[contextState.index] === "Ceiling Height" && <CeilingHeight {...CeilingHeightDefaultProps}/>}
        {contextState.page[contextState.index] === "Occupant Age Groups" && <OccupantAgeGroup {...OccupantAgeGroupDefaultProps}/>}
        {contextState.page[contextState.index] === "Vocal Activity" && <VocalActivity {...VocalActivityDefaultProps}/>}
        {contextState.page[contextState.index] === "Physical Activity" && <PhysicalActivity {...PhysicalActivityDefaultProps}/>}
        {contextState.page[contextState.index] === "Types of Masks" && <TypeOfMask {...TypeOfMaskDefaultProps}/>}
        {contextState.page[contextState.index] === "Mask Fit" && <MaskFit {...MaskFitDefaultProps}/>}
        {contextState.page[contextState.index] === "Ventilation + Filtration" &&
        <Ventilation_Filtration {...Ventilation_Filtration_Default_Props}/>}
    </div>;
}
