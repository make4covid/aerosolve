import React, { CSSProperties, useContext } from 'react';
import { PageHeader, PageHeaderProps } from 'components/PageHeader/PageHeader';
import { NumberOfOccupants } from './NumberOfOccupants/NumberOfOccupants';
import { HoursCard } from './HoursCard/HoursCard';
import { PageFooter } from 'components/PageFooter/PageFooter';

export type TargetOccupancyItem = {
  header?: string;
  title: string;
  question: string;
  recommendation: string;
  hours: number;
  description: string;
};

export const TargetOccupancy: React.FC<TargetOccupancyItem> = (props) => {
  return (
    <div className="h-screen grid grid-rows-10 divide-gray-400 gap-2">
      <div className="row-span-1.5">
        <PageHeader
          title={'01/Target Occupancy'}
          question={'What is the target occupancy for this space?'}
          hours={6}
          people={30}
          description={''}
        />
      </div>
      <div className="row-span-4 relative gap-2 relative">
        <NumberOfOccupants nOfOccupant={30} />
      </div>
      <div className="row-span-2.5 relative gap-2">
        <HoursCard hours={30} />
      </div>
      <div className="row-span-1.5 relative gap-2">
        <PageFooter />
      </div>
    </div>
  );
};
