import React, { CSSProperties } from 'react';
import { PageHeader, PageHeaderProps } from 'components/PageHeader/PageHeader';
import { PageFooter } from 'components/PageFooter/PageFooter';

export type Ventilation_Filtration_Props = {
  header?: string;
  title: string;
  question: string;
  recommendation: string;
  hours: number;
  description: string;
};

export const Ventilation_Filtration: React.FC<Ventilation_Filtration_Props> = (
  props
) => {
  return (
    <div className="h-screen grid grid-rows-6 divide-gray-400 gap-4">
      <div className="row-span-1">
        <PageHeader
          title={'11/Ventilation+Filtration'}
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
