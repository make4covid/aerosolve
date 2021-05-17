import React, { CSSProperties }from 'react'
import  {SelectionSliderHeight} from "../SelectionSlider/SelectionHeight/SelectionSliderHeight"
export type PageHeaderProps = {
    header?: string,
    title: string,
    question: string,
    recommendation: string,
    hours: number,
    description: string,
    style?: CSSProperties
}

export const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <div className="">
                <h1 className="s">
                    {props.header}
                </h1>
            <div className="flex">
              <div className="">
                    {props.title}
              </div>
                |
              <div className="">
                    {props.recommendation}
                    <SelectionSliderHeight  header={"Hello World"} value={5}/>
              </div>
            </div>
            <div className="flex">
                <div className="">
                    {props.question}
                </div>
                |
                <div className="">
                    {props.description}
                </div>
            </div>
        </div>
    );
}

