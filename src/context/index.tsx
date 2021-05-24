import * as React from 'react'
import {useReducer} from "react";



const initialState  = {
    page: ['Target Occupancy', 'Location', 'Type of Space',
          'Area of Space','Ceiling Height','Occupant Age Groups','Vocal Activity','Physical Activity','Types of Masks','Mask Fit'
        ,'Ventilation + Filtration'],
    index:0,
    defaultNavGroups: [
    {
        header: "Safety Goal",
        items: [
            {
                route: "/target-occupancy",
                completed: false,
                active: false,
                value: "Target Occupancy"
            }
        ]
    },
    {
        header: "Space Information",
        items: [
            {
                route: "/location",
                completed: false,
                active: false,
                value: "Location"
            },{
                route: "/type-of-space",
                completed: false,
                active: false,
                value: "Type of Space"
            },{
                route: "/area-of-space",
                completed: false,
                active: false,
                value: "Area of Space"
            },{
                route: "/ceiling-height",
                completed: false,
                active: false,
                value: "Ceiling Height"
            }
        ]
    },
    {
        header: "Usage and Behavior",
        items: [
            {
                route: "/location",
                completed: false,
                active: false,
                value: "Occupant Age Groups"
            },{
                route: "/type-of-space",
                completed: false,
                active: false,
                value: "Vocal Activity"
            },{
                route: "/area-of-space",
                completed: false,
                active: false,
                value: "Physical Activity"
            }
        ]
    },
    {
        header: "Mask Usage",
        items: [
            {
                route: "/location",
                completed: false,
                active: false,
                value: "Types of Masks"
            },{
                route: "/type-of-space",
                completed: false,
                active: false,
                value: "Mask Fit"
            }
        ]
    },
    {
        header: "Ventilation",
        items: [
            {
                route: "/location",
                completed: false,
                active: false,
                value: "Ventilation + Filtration"
            }
        ]
    }
]

};


const actions = {
    updatePageState_: (list:Array<string>,currentTitle:string) => {
        let i = 0
        for(; i < list.length;i++){
            if(currentTitle === list[i]){
                break
            }
        }
        return i
    },
    updateLeftPageState:() =>{

    },

    updateRightPageState:()=>{

    },
    updatePageState:(defaultNavGroups:any,newValue:string)=>{
        alert("Plus new value " + newValue)
        let newNavGroups = defaultNavGroups
        defaultNavGroups.map((item:any,index:any)=> {
            item.items.map((element:any,subIndex:any)=>{
                if(element.value === newValue){
                    newNavGroups[index].items[subIndex].active = true
                }
            })
        })
        return newNavGroups
    }
};
let newValue: null = null
let newNavGroups: null = null

const PageContext = React.createContext(initialState);
const pageReducer = (state:any, action:any) => {
    switch (action.type) {
        case 'updateLeftPageState':
            if(state.index > 0){
                state.index = state.index - 1
            }
            newValue = state.page[state.index]
            newNavGroups = state.defaultNavGroups
            state.defaultNavGroups.map((item:any,index:any)=> {
                item.items.map((element:any,subIndex:any)=>{
                    if(element.value === newValue){
                        // @ts-ignore
                        newNavGroups[index].items[subIndex].active = true
                    }
                })
            })
            state.defaultNavGroups = newNavGroups
            return {...state}
        case 'updateRightPageState':
            if(state.index < state.page.length - 1) {
                state.index = state.index + 1
            }
            newValue = state.page[state.index]
            newNavGroups = state.defaultNavGroups
            state.defaultNavGroups.map((item:any,index:any)=> {
                item.items.map((element:any,subIndex:any)=>{
                    if(element.value === newValue){
                        // @ts-ignore
                        newNavGroups[index].items[subIndex].active = true
                    }
                })
            })
            state.defaultNavGroups = newNavGroups

            return {...state}
        case 'updatePageState':
            newValue = action.payload
            newNavGroups = state.defaultNavGroups
            state.defaultNavGroups.map((item:any,index:any)=> {
                item.items.map((element:any,subIndex:any)=>{
                    if(element.value === newValue){
                        // @ts-ignore
                        newNavGroups[index].items[subIndex].active = true
                    }
                })
            })
            state.defaultNavGroups = newNavGroups
            let i = 0
            for(; i < state.page.length;i++){
                if(newValue === state.page[i]){
                    break
                }
            }
            state.index=i
            return {...state}
        default:
            throw new Error();
    }
};
const PageContextProvider:React.FC<{ }> = props => {
    const [contextState, updateContext] = useReducer(pageReducer, initialState);
    return (
        // @ts-ignore
        <PageContext.Provider value={{ contextState, updateContext }}>
            {props.children}
        </PageContext.Provider>
    );
};
export { PageContext, PageContextProvider, actions};