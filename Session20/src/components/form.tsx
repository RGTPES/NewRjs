import React, { useState } from 'react'


export default function form() {

const [form,setForm] =useState({
    userName: '',
    gender: 0,
    email: '',
    address: '',
})
const onChangeInfo = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const{name,value} = e.target;
    setForm({...form,[name]:value})

}
const onSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    console.log(form);
}


  return (
    <div>
      <form action="" onSubmit={(e)=>{e.preventDefault()}}>
    <input  type="text" placeholder='userName' name='userName' onChange={onChangeInfo}/>
    <input  type="text" placeholder='email' name='email' onChange={onChangeInfo}/>
    <input  type="text" placeholder='address' name='address' onChange={onChangeInfo}/>
    
    <input  type="radio" value='0' name='gender' onChange={onChangeInfo} />Nam
    <input  type="radio" value='1' name='gender' onChange={onChangeInfo} />Nu
    <input  type="radio" value='2' name='gender' onChange={onChangeInfo} />Khac
    <button type='submit' onClick={onSubmit}>
      Submit
    </button>
      </form>
    </div>
  )
}
