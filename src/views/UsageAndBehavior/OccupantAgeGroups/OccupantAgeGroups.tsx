import React, { CSSProperties, useState } from 'react';
import { PageHeader } from 'components/PageHeader/PageHeader';
import { SelectionSliderHeight } from 'components/SelectionSlider/SelectionHeight/SelectionSliderHeight';
import { NumberOfOccupants } from '../../SafetyGoal/TargetOccupancy/NumberOfOccupants/NumberOfOccupants';
import { GroupAge } from 'components/SelectionCardGroup/GroupAge';
import { CardGroupItem } from 'components/SelectionCardGroup/SelectionCardGroupItem/ItemAge';
import KidImage from 'assets/old/KidImage.png';
import { PageFooter } from 'components/PageFooter/PageFooter';
export type OccupantAgeGroupProps = {
  header?: string;
  title: string;
  question: string;
  recommendation: string;
  hours: number;
  description: string;
};

const DefaultOccupantAgeGroup: CardGroupItem[] = [
  {
    value: 'Living Room',
    age: '0 - 16 Years Old',
    risk: 'Low Risk',
    active: true,
    image: KidImage,
    route: 'test',
    completed: true,
  },
  {
    value: 'Classroom',
    age: '17 - 63 Years Old',
    risk: 'High Risk',
    active: false,
    image: KidImage,
    route: 'test',
    completed: false,
  },
  {
    value: 'Classroom1',
    age: '64+ Years Old',
    risk: 'Medium Risk',
    active: false,
    image: KidImage,
    route: 'test',
    completed: false,
  },
];

export const OccupantAgeGroup: React.FC<OccupantAgeGroupProps> = (props) => {
  const [mode, setMode] = useState(false);

  function handleSwitchMode() {
    setMode(!mode);
  }
  return (
    <div className="h-screen grid grid-rows-6 divide-gray-400 gap-4">
      <div className="row-span-1">
        <PageHeader
          title={'06/Occupant Age Groups'}
          question={'What is the target occupancy for this space?'}
          hours={6}
          people={30}
          description={''}
        />
      </div>

      <div className="row-span-4">
        <div>
          <div className="inline-block relative left-0">
            <p>Please select all that apply. Mouse button.</p>
          </div>

          <div className="relative inline-block float-right">
            <button
              onClick={handleSwitchMode}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Basic
            </button>

            <button
              onClick={handleSwitchMode}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
            >
              Advanced
            </button>
          </div>
        </div>

        <div>
          {!mode && (
            <div>
              <div className="">
                <GroupAge items={DefaultOccupantAgeGroup} />
              </div>
            </div>
          )}
        </div>

        <div>
          {mode && (
            <div>
              <div className="">
                <SelectionSliderHeight value={3} />
                <SelectionSliderHeight value={5} />
                <SelectionSliderHeight value={10} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="row-span-1">
        <PageFooter />
      </div>
    </div>
  );
};
