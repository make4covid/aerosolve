import React, { CSSProperties } from 'react';
import { PageHeader } from 'components/PageHeader/PageHeader';
import { PageFooter } from 'components/PageFooter/PageFooter';

export type PhysicalActivityProps = {
  header?: string;
  title: string;
  question: string;
  recommendation: string;
  hours: number;
  description: string;
};

export const PhysicalActivity: React.FC<PhysicalActivityProps> = (props) => {
  return (
    <div className="h-screen grid grid-rows-6 divide-gray-400 gap-4">
      <div className="row-span-1">
        <PageHeader
          title={'08/Physical Activity'}
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