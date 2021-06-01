import React, { CSSProperties } from 'react';
import { PageHeader } from 'components/PageHeader/PageHeader';
import { SelectionSliderHeight } from 'components/SelectionSlider/SelectionHeight/SelectionSliderHeight';
import { NumberOfOccupants } from '../../SafetyGoal/TargetOccupancy/NumberOfOccupants/NumberOfOccupants';
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
    <div className="h-screen  grid grid-rows-11 divide-gray-400 gap-2 ">
      <div className="row-span-2">
        <PageHeader
          title={'02/Location'}
          question={'What is the target occupancy for this space?'}
          hours={6}
          people={30}
          description={''}
        />
      </div>

      <div className="row-span-1 relative">
        <InputLocation location={'CO'} />
      </div>
      <div className="row-span-6 relative">
        <div className="h-full w-full grid grid-cols-2">
          <div className="col-span-1">
            <LeftPanel
              rate={'Low Risk'}
              description={'due to high vaccination rate'}
            />
          </div>
          <div className="col-span-1">
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
      <div className="row-span-2 relative">
        <PageFooter />
      </div>
    </div>
  );
};
