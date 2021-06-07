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
    <div className="flex justify-between">
      <button
        onClick={(e) => {
          moveUp(e);
        }}
      >
        <img src={LeftArrow} />
      </button>
      <div>
        <button>
          <img className="cursor-pointer" src={I} />
        </button>
        <button>
          <img className="cursor-pointer" src={Ellipse} />
        </button>
      </div>
      <button
        onClick={(e) => {
          moveDown(e);
        }}
      >
        <img className="cursor-pointer" src={RightArrow} />
      </button>
    </div>
  );
};
