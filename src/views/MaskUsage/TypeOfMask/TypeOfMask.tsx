import React, { CSSProperties } from 'react';
import { PageHeader, PageHeaderProps } from 'components/PageHeader/PageHeader';
import { PageFooter } from 'components/PageFooter/PageFooter';
import { NumberOfOccupants } from '../../SafetyGoal/TargetOccupancy/NumberOfOccupants/NumberOfOccupants';
import { HoursCard } from '../../SafetyGoal/TargetOccupancy/HoursCard/HoursCard';

export type TypeOfMaskProps = {
  header?: string;
  title: string;
  question: string;
  recommendation: string;
  hours: number;
  description: string;
};
export const TypeOfMask: React.FC<TypeOfMaskProps> = (props) => {
  return (
    <div className="h-screen grid grid-rows-6 divide-gray-400 gap-4">
      <div className="row-span-1">
        <PageHeader
          title={'09/Type Of Mask'}
          question={'What is the target occupancy for this space?'}
          hours={6}
          people={30}
          description={''}
        />
      </div>

      <div className="row-span-4"></div>

      <div className="row-span-1">
        <PageFooter />
      </div>
    </div>
  );
};
