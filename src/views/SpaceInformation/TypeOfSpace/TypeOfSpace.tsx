import React, {CSSProperties, useState} from 'react';
import { PageHeader, PageHeaderProps } from 'components/PageHeader/PageHeader';
import { PageFooter } from 'components/PageFooter/PageFooter';
import { InputLocation } from 'components/InputLocation/InputLocation';
import { LeftPanel } from '../Location/LeftPanel/LeftPanel';
import { RightPanel } from '../Location/RightPanel/RightPanel';
import {SelectionGroup} from "../../../components/SelectionCardGroup/SelectionGroup";
import {SelectionOptions} from "../../../components/SelectionCard/SelectionCard";

export type TypeOfSpaceProps = {
  header?: string;
  title: string;
  question: string;
  recommendation: string;
  hours: number;
  description: string;
};

/*
const defaultTypeOfSpaceGroup: CardGroupItem[] = [
  {
    value: 'Living Room',
    risk: 'Low Risk',
    active: true,
    route: 'test',
    completed: true,
  },
  {
    value: 'Classroom',
    risk: 'High Risk',
    active: false,
    route: 'test',
    completed: false,
  },
  {
    value: 'Classroom1',
    risk: 'Medium Risk',
    active: false,
    route: 'test',
    completed: false,
  },
  {
    value: 'Classroom2',
    risk: 'High Risk',
    active: false,
    route: 'test',
    completed: false,
  },
];


 */


let options: SelectionOptions[] =
    [

        {
            title: 'Living Room',
            description: 'Lowest Risk'
        },
        {
            title: 'Classroom',
            description: 'Lowest Risk',
        },
        {
            title: 'Place of Worship',
            description: 'Medium Risk',
        },
        {
            title: 'Restaurant',
            description: 'Medium Risk',
        },
        {
            title: 'Office',
            description: 'Medium Risk',
        },
        {
            title: 'Bus/Train',
            description: 'Higher Risk',
        },
        {
            title: 'Commercial Airline',
            description: 'Higher Risk',
        },
        {
            title: 'Grocery Store',
            description: 'Higher Risk',
        },

    ];

export const TypeOfSpace: React.FC<TypeOfSpaceProps> = (props) => {
  const [selected, setSelected] = useState([] as number[]);
  return (
    <div className="w-full h-full">
        <PageHeader
          title={'03/Type of Space'}
          question={'What is the target occupancy for this space?'}
          hours={6}
          people={30}
          description={''}
        />
        <br/>
        <div className="w-full h-64 bg-gray-400 rounded-2xl">Living Room Description</div>
        <br/>
        <div className="">
        {/*<GroupSpace items={defaultTypeOfSpaceGroup} /> */}
            <SelectionGroup options = {options} multi={false} cardCol={false} columns={3} selected={selected} setSelected={setSelected}/>
        </div>
        <PageFooter />

    </div>
  );
};
