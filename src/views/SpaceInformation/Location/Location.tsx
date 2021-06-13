import React, { CSSProperties } from 'react';
import { PageHeader } from 'components/PageHeader/PageHeader';
import { SelectionSlider } from 'components/SelectionSlider/SelectionSlider';
import { NumberOfOccupants } from '../../../components/NumberOfOccupants/NumberOfOccupants';
import { InputLocation } from 'components/InputLocation/InputLocation';
import { LeftPanel } from './LeftPanel/LeftPanel';
import { RightPanel } from './RightPanel/RightPanel';
import { PageFooter } from 'components/PageFooter/PageFooter';
import {StepViewProps} from "../../../data";

export type LocationProps = {
    header?: string;
    title: string;
    question: string;
    recommendation: string;
    hours: number;
    description: string;
};

export const Location: React.FC<StepViewProps> = (props) => {
    return (
        <div className="max-h-screen width-full">
            <div className="w-full lg:h-20 relative  rounded-xl my-8">
                <div className="h-16">
                    <InputLocation location={'CO'} />
                </div>
            </div>

            <div className="w-full lg:h-96 flex flex-cols space-x-4">
                <div className="flex-1 w-2/5">
                    <LeftPanel
                        title={'The COVID transmissive rate at your current\nlocation is at'}
                        rate={'Low Risk'}
                        description={'due to high vaccination rate'}
                    />
                </div>
                    <div className="flex-1 w-3/5 ">
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
    );
};