import React, {CSSProperties, useContext} from 'react'
import LeftArrow from "../../../icons/Left_Arrow.png"
import RightArrow from "../../../icons/Right_Arrow.png"
import I from "../../../icons/i.png"
import Ellipse from "../../../icons/Ellipse12.png"
import {PageContext} from "../../../context";




export const PageFooter: React.FC<{ } > = (props) => {
    // @ts-ignore
    const { contextState, updateContext } = useContext(PageContext);
    function moveUp(e:any){
        e.preventDefault();
        updateContext({
            type:'updateLeftPageState',
        })
    }
    function moveDown(e:any){
        e.preventDefault();
        updateContext({
            type:'updateRightPageState',
        })
    }
    return (
      <div className="flex justify-between">

          <button onClick={(e)=>{moveUp(e)}}><img src={LeftArrow}/></button>
          <div>
              <button><img className="cursor-pointer" src={I}/></button>
              <button><img className="cursor-pointer" src={Ellipse}/></button>
          </div>
          <button onClick={(e) =>{moveDown(e)}}><img className="cursor-pointer" src={RightArrow}/></button>
      </div>
    );
}

