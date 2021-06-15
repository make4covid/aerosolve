import React, { CSSProperties, useContext } from 'react';
import LeftArrow from 'assets/old/Left_Arrow.png';
import RightArrow from 'assets/old/Right_Arrow.png';


export const PageFooter: React.FC<{}> = (props) => {

    function moveUp() {
        //To do
    }
    function moveDown() {
        //To do
    }
    return (
        <div className="container relative  w-full h-8 inline-block mt-4">
            <div className="">
                <button className="w-8 h-8 z-10 float-left"
                        onClick={moveUp}
                >
                    <img src={LeftArrow} alt={""}/>
                </button>

                <button className="cursor-pointer w-32 h-8 bg-yellow-500 rounded-lg ml-4">
                    <div className="flex flex-row -mt-1">
                        <p className="flex-1 m-2">i</p>
                        <p className="flex-1 m-2">Information</p>
                    </div>
                </button>

                <button className="w-8 h-8 cursor-pointer float-right"
                        onClick={moveDown}
                >

                    <img  src={RightArrow} />
                </button>
            </div>
        </div>
    );
};