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
        question={"About how is the space you're evaluating"}
        hours={6}
        people={30}
        description={'Why understanding the room type can help determine the risk in viral transmission'}
        />
        <br/>
        <div className="w-full lg:h-96 rounded-xl">
            <br/>
            <br/>
            <br/>
            <div className="flex">
                <div className="inline-block w-6/12 h-80 rounded-3xl">
                    <div className="w-2/3 h-full">
                        <LeftPanel
                        size={'small apartment'}
                        description={'18 people or less'}
                        />
                    </div>
                </div>
                <div className="inline-block rounded-xl">
                    <br/>

                    <RightPanel />
                </div>
            </div>
        </div>

        <br/>
        <div className="w-full h-64 relative bg-gray-300 rounded-xl">
            <PlainCard title={"Selection"}
                       description={""}
                       selectionSquareFt={true}
            />
        </div>
        <br/>
        <PageFooter />

    </div>
  );
};
