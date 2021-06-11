import React, { CSSProperties } from 'react';
import { PageHeader } from 'components/PageHeader/PageHeader';
import { SelectionSlider } from 'components/SelectionSlider/SelectionSlider';
import { NumberOfOccupants } from '../../../components/NumberOfOccupants/NumberOfOccupants';
import { InputLocation } from 'components/InputLocation/InputLocation';
import { LeftPanel } from './LeftPanel/LeftPanel';
import { RightPanel } from './RightPanel/RightPanel';
import { PageFooter } from 'components/PageFooter/PageFooter';

export type LocationProps = {
  header?: string;
  title: string;
  question: string;
  recommendation: string;
  hours: number;
  description: string;
};

export const Location: React.FC<LocationProps> = (props) => {
  return (
    <div className="h-full width-full">
        <PageHeader
        title={'02/Location'}
        question={'What is the target occupancy for this space?'}
        hours={6}
        people={30}
        description={''}
        />
      <br/>
      <div className="w-full lg:h-20 relative  rounded-xl">
          <div className="h-16">
            <InputLocation location={'CO'} />
          </div>
      </div>
      <br/>

      <div className="w-full h-3/5 relative">
          <div className="w-full h-full flex flex-cols space-x-4">
            <div className="w-2/5">
                <LeftPanel
                title={'The COVID transmissive rate at your current\nlocation is at'}
                rate={'Low Risk'}
                description={'due to high vaccination rate'}
                />
            </div>
            <div className="flex-1 w-5/7">
                <RightPanel
                confirmed_case={11021}
                today_case={17}
                death_total_case={420}
                death_today_case={0}
                vaccination_rate={22}
                vaccination_total={1272898}
                relative_air_humidity={47}
            />
                </div>
          </div>
      </div>

      <div className="">
        <PageFooter />
      </div>
    </div>
  );
};
