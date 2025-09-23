
export interface Task = {
    id:number,
    name:string,
    status:"ACTIVE" | "INACTIVE"
}

export interface initialStateType = {
 status:"idle"|"pending"|"Success"|"Failed",
 data:[],
    error:null|undefined|string,
}