import React, { CSSProperties, useContext } from 'react';
import LeftArrow from 'assets/old/Left_Arrow.png';
import RightArrow from 'assets/old/Right_Arrow.png';
import I from 'assets/old/i.png';
import Ellipse from 'assets/old/Ellipse12.png';
import { PageContext } from 'context';

export const PageFooter: React.FC<{}> = (props) => {
  // @ts-ignore
  const { contextState, updateContext } = useContext(PageContext);
  function moveUp(e: any) {
    e.preventDefault();
    updateContext({
      type: 'updateLeftPageState',
    });
  }
  function moveDown(e: any) {
    e.preventDefault();
    updateContext({
      type: 'updateRightPageState',
    });
  }
  return (
    <div className="relative flex space-around">
          <button className="absolute"
            onClick={(e) => {
              moveUp(e);
            }}
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
        onClick={(e) => {
          moveDown(e);
        }}
      >

        <img className="absolute cursor-pointer right-8 " src={RightArrow} />
      </button>
    </div>
  );
};
