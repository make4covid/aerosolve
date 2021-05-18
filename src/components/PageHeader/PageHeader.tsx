import React from 'react';
import { SelectionSliderHeight } from '../SelectionSlider/SelectionHeight/SelectionSliderHeight';

export type PageHeaderProps = {
  title: string;
  description: string;
  details?: string;
};

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <div className="">
      <h1 className="s"></h1>
      <div className="flex">
        <div className="">{props.title}</div>|
        <div className="">
          {props.description}
          <SelectionSliderHeight header={'Hello World'} value={5} />
        </div>
      </div>
      <div className="flex">
        <div className="">{props.details}</div>|
        <div className="">{props.description}</div>
      </div>
    </div>
  );
};
