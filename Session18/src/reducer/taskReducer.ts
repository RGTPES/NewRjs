import type { Task } from "../interface/Task.interface";
type Action=
    {type: 'ADD_TASK';payload:Task;}|
    {type: 'UPDATE_TASK';payload:Task;}|
    {type: 'DELETE_TASK';payload:{id:number|string};}|
    {type: 'TOGGLE_TASK';payload:{id:number|string};}



export const TaskReducer = (state:Task[],action:Action):Task[]=>{
  
}    