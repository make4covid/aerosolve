import React, { CSSProperties, useState } from 'react';
import { PageHeader } from 'components/PageHeader/PageHeader';
import { SelectionSlider } from 'components/SelectionSlider/SelectionSlider';
import { NumberOfOccupants } from '../../../components/NumberOfOccupants/NumberOfOccupants';
import KidImage from 'assets/old/KidImage.png';
import { PageFooter } from 'components/PageFooter/PageFooter';
import {SelectionGroup} from "../../../components/SelectionCardGroup/SelectionGroup";
import {SelectionOptions} from "../../../components/SelectionCard/SelectionCard";
export type OccupantAgeGroupProps = {
  header?: string;
  title: string;
  question: string;
  recommendation: string;
  hours: number;
  description: string;
};

let options: SelectionOptions[] =
    [

        {
            title: 'Children/Teens\n0-16 Years Old',
            description: 'Lowest Risk',

        },
        {
            title: 'Adults\n17 - 63 Years Old',
            description: 'Medium Risk',
        },
        {
            title: 'Seniors\n64+ Years Old',
            description: 'Higher Risk',
        }
    ];


export const OccupantAgeGroup: React.FC<OccupantAgeGroupProps> = (props) => {
  const [mode, setMode] = useState(false);
  const [selected, setSelected] = useState([] as number[]);
  function handleSwitchMode() {
    setMode(!mode);
  }
  return (
    <div className="w-full h-full">

        <PageHeader
          title={'06/Occupant Age Groups'}
          question={'What is the target occupancy for this space?'}
          hours={6}
          people={30}
          description={''}
        />
      <br/>
      <div className="">
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
                {/*<GroupAge items={DefaultOccupantAgeGroup} />*/}
              </div>
            </div>
          )}
        </div>

        <div>
          {mode && (
            <div>
              <div className="">

              </div>
            </div>
          )}
        </div>
      </div>
      <br/>
        <SelectionGroup options = {options} multi={true} cardCol={false} columns={3} selected={selected} setSelected={setSelected}/>
      <br/>
      <PageFooter />

    </div>
  );
};
