import React, { CSSProperties } from 'react';
import { PageHeader } from 'components/PageHeader/PageHeader';
import { SelectionSlider } from 'components/SelectionSlider/SelectionSlider';

import { LeftPanel } from './LeftPanel/LeftPanel';
import { RightPanel } from './RightPanel/RightPanel';
import { PageFooter } from 'components/PageFooter/PageFooter';
import {PlainCard} from "../../../components/PlainCard/PlainCard";

export type AreaOfSpaceProps = {
  header?: string;
  title: string;
  question: string;
  recommendation: string;
  hours: number;
  description: string;
};
export const AreOfSpace: React.FC<AreaOfSpaceProps> = (props) => {
  return (
    <div className="w-full h-full">
        <PageHeader
        title={'04/Area of Space'}
        question={'What is the target occupancy for this space?'}
        hours={6}
        people={30}
        description={''}
        />
        <br/>
        <div className="w-full lg:h-96 flex flex-cols space-x-4">
            <div className="flex-2 w-2/7">
                <LeftPanel
                size={'small apartment'}
                description={'18 people or less'}
                />
            </div>
            <div className="flex-1 w-2/7">
                <RightPanel />
            </div>
        </div>
        <br/>
        <div className="w-full lg:h-64 bg-gray-300">
            <PlainCard title={"Target Number of Hours"}
                       description={"Target number of occupants intended for\n the space to be occupied in a single\nsetting."}
                       sqfeet={true}
            />
        </div>
        <br/>
        <PageFooter />

    </div>
  );
};
