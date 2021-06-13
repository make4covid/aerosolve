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
        <div className="relative flex space-around">
            <button className="absolute"
                    onClick={moveUp}
            >
                <img src={LeftArrow} />
            </button>
            <div>

                <button className="absolute left-16 cursor-pointer w-32 h-8 bg-yellow-500 rounded-lg">
                    <div className="flex -mt-1">
                        <p className="flex-1 m-2">i</p>
                        <p className="flex-1 m-2">Information</p>
                    </div>
                </button>
            </div>

            <button
                onClick={moveDown}
            >

                <img className="absolute cursor-pointer right-8 " src={RightArrow} />
            </button>
        </div>
    );
};