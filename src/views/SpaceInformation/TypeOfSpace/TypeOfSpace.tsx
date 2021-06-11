import React, {CSSProperties, useEffect, useState} from 'react';
import { PageHeader, PageHeaderProps } from 'components/PageHeader/PageHeader';
import { PageFooter } from 'components/PageFooter/PageFooter';
import { InputLocation } from 'components/InputLocation/InputLocation';
import { LeftPanel } from '../Location/LeftPanel/LeftPanel';
import { RightPanel } from '../Location/RightPanel/RightPanel';
import {SelectionGroup} from "../../../components/SelectionCardGroup/SelectionGroup";
import {SelectionCard, SelectionOptions} from "../../../components/SelectionCard/SelectionCard";
import Kids from 'assets/images/kids.png';

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
        { selected.length == 1 &&
            <div className="w-full lg:h-40 relative bg-gray-300 rounded-xl">
                <SelectionCard selected={false} img={""} column={false} title={options[selected[0]].title} description={options[selected[0]].description}/>
            </div>
        }
        { selected.length == 0 && <
            div className="w-full lg:h-40 relative bg-gray-300 rounded-xl">
                <SelectionCard selected={false} img={""} column={false} title={ options[0].title} description={ options[0].description}/>
            </div>

        }
        <br/>
        <div className="w-full h-1/2 relative bg-gray-300 rounded-xl">
            <SelectionGroup options = {options} multi={false} cardCol={false} columns={3} selected={selected} setSelected={setSelected} />
        </div>
        <br/>
        <PageFooter />

    </div>
  );
};
