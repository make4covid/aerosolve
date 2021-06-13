import React, {CSSProperties, useEffect, useState} from 'react';
import { PageHeader, PageHeaderProps } from 'components/PageHeader/PageHeader';
import { PageFooter } from 'components/PageFooter/PageFooter';
import { InputLocation } from 'components/InputLocation/InputLocation';
import { LeftPanel } from '../Location/LeftPanel/LeftPanel';
import { RightPanel } from '../Location/RightPanel/RightPanel';
import {SelectionGroup} from "../../../components/SelectionGroup/SelectionGroup";
import {SelectionCard, SelectionOptions} from "../../../components/SelectionCard/SelectionCard";
import Kids from 'assets/images/kids.png';
import {StepViewProps} from "../../../data";
import {MainCard} from "./MainPanel/MainCard";

export type TypeOfSpaceProps = {
  header?: string;
  title: string;
  question: string;
  recommendation: string;
  hours: number;
  description: string;
};



let options: SelectionOptions[] =
    [

      {
        title: 'Living Room',
        rating: 'Lowest Risk',
        description: 'A living room is a small space usually occupied by closely related people. The space is also of low foot traffic and occupants are spaced far apart.',
        image: Kids
      },
      {
        title: 'Classroom',
        rating: 'Lowest Risk',
        description: 'blabla',
        image: Kids
      },
      {
        title: 'Place of Worship',
        rating: 'Medium Risk',
        description: 'blabla',
        image: Kids
      },
      {
        title: 'Restaurant',
        rating: 'Medium Risk',
        description: 'blabla',
        image: Kids
      },
      {
        title: 'Office',
        rating: 'Medium Risk',
        description: 'blabla',
        image: Kids
      },
      {
        title: 'Bus/Train',
        rating: 'Higher Risk',
        description: 'blabla',
        image: Kids
      },
      {
        title: 'Commercial Airline',
        rating: 'Higher Risk',
        description: 'blabla',
        image: Kids
      },
      {
        title: 'Museum/ Gallery',
        rating: 'Higher Risk',
        description: 'blabla',
        image: Kids
      },
      {
        title: 'Gym/ Fitness Center',
        rating: 'Higher Risk',
        description: 'blabla',
        image: Kids
      },
    ];

export const TypeOfSpace: React.FC<StepViewProps> = (props) => {


  const [selected, setSelected] = useState([] as number[]);


  return (
      <div className="w-full h-full my-4">
        { selected.length == 1 &&
        <div className="w-full lg:h-60 relative bg-gray-100 rounded-xl my-4">
          <MainCard title={options[selected[0]].title} description={options[selected[0]].description} image={options[selected[0]].image} rating={options[selected[0]].rating}/>
        </div>
        }
        { selected.length == 0 && <
            div className="w-full lg:h-60 relative bg-gray-300 rounded-xl my-4" >
          <MainCard title={options[0].title} description={options[0].description} image={options[0].image} rating={options[0].rating}/>
        </div>

        }
        <div className="w-full h-1/2 relative bg-white rounded-xl">
          <SelectionGroup options = {options} multi={false} cardCol={false}  columns={3} selected={selected} setSelected={setSelected} />
        </div>

      </div>
  );
};