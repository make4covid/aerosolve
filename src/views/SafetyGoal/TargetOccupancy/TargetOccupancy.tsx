import React, { CSSProperties, useContext } from 'react';
import { PageHeader, PageHeaderProps } from 'components/PageHeader/PageHeader';
import { NumberOfOccupants } from '../../../components/NumberOfOccupants/NumberOfOccupants';
import { HoursCard } from './HoursCard/HoursCard';
import { PageFooter } from 'components/PageFooter/PageFooter';
import {PlainCard} from "../../../components/PlainCard/PlainCard";

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
    <div className="w-full h-full">
        <PageHeader
          title={'01/Target Occupancy'}
          question={'What is the target occupancy for this space?'}
          hours={6}
          people={30}
          description={''}
        />

      <br/>
      <div className="w-full h-96 relative bg-gray-300 rounded-xl">
        <PlainCard title={"Target Number of Occupants\n"}
                   description={`Target number of occupants~\n
                                intended for the space to be~\n
                                occupied in a single setting.~\n
                                `}
                   occupants={true}
        />
      </div>
      <br/>
      <div className="w-full h-64 relative bg-gray-300 rounded-xl">
        <PlainCard title={"Target Number of Hours"}
                   description={"Target number of occupants intended for\n the space to be occupied in a single\nsetting."}
                   hours={true}
        />
      </div>
      <br/>
      <PageFooter />

    </div>
  );
};
