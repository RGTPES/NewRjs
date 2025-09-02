import React, { useState } from 'react'

export default function fc() {
  const [count, setCount] = useState<number>(0);
  const handleChange  =()=>{
    setCount(count + 1);
  }
 const [input,setInput] = useState<string>("");
 const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
   setInput(e.target.value);
 }
 const [number,setNumber] = useState<number[]>([]);
 const [task,setTask] = useState({
  id: 0,
  name:'Quet nha',
  isComplete: false,
 })
  const HandleUp =()=>{
   setTask({...task,Deadline:'12'});
  }
const handleRandom =()=>{
setNumber([...number,Math.ceil(Math.random()*100)]);
}

const [User,setUser] = useState({
  name:'',
  email:'',
  address:'',
  gender:'',
});
const handleChangeName = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setUser({...User,name:e.target.value});
}

const handleChangeEmail = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setUser({...User,email:e.target.value});
}

const handleChangeAddress = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setUser({...User,address:e.target.value});
}

const handleChangeGender = (e:React.ChangeEvent<HTMLInputElement>)=>{
  setUser({...User,gender:e.target.value});
}

  return (
    <div>
      <form action="" onSubmit={(e)=>{e.preventDefault()}}>
    <input onChange={handleChangeName} type="text" placeholder='UserName'/>
    <input onChange={handleChangeEmail} type="text" placeholder='Email'/>
    <input onChange={handleChangeAddress} type="text" placeholder='Address'/>
    <input onChange={handleChangeGender} type="radio" value='Nam'/>Nam
    <input onChange={handleChangeGender} type="radio" value='Nu'/>Nu
    <input onChange={handleChangeGender} type="radio" value='Khac'/>Khac
    <button type='submit' onClick={() => console.log(JSON.stringify(User))}>
      Submit
    </button>
      </form>
    </div>
  )
}
