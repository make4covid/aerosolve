import React, { CSSProperties } from 'react';
import { PageHeader } from 'components/PageHeader/PageHeader';
import { SelectionSliderHeight } from 'components/SelectionSlider/SelectionHeight/SelectionSliderHeight';

import { LeftPanel } from './LeftPanel/LeftPanel';
import { RightPanel } from './RightPanel/RightPanel';
import { PageFooter } from 'components/PageFooter/PageFooter';
import { SelectionCard } from './Selection/Selection';

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
    <div className="h-screen grid grid-rows-8 divide-gray-400 gap-4">
      <div className="row-span-2">
        <PageHeader
          title={'04/Area of Space'}
          question={'What is the target occupancy for this space?'}
          hours={6}
          people={30}
          description={''}
        />
      </div>

      <div className="row-span-3 position:relative">
        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <LeftPanel
              size={'small apartment'}
              description={'18 people or less'}
            />
          </div>
          <div className="col-span-1">
            <RightPanel />
          </div>
        </div>
      </div>
      <div className="row-span-2">
        <SelectionCard squareFeet={50} />
      </div>
      <div className="row-span-1">
        <PageFooter />
      </div>
    </div>
  );
};
