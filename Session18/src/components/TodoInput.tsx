import React, { useState } from 'react'

export default function TodoInput() {
  const [InputValue,setInputValue] = useState<string>("");
  const [isShowError,setIsShowError] = useState<boolean>(false);
  const handleChangeInput=(event: React.ChangeEvent<HTMLInputElement>)=>{
    if(event.target.value){
      
      setIsShowError(false);
    } else {
      setIsShowError(true);
    }
    setInputValue(event.target.value);
  }


  return (
    <div>
<form onSubmit={e => {
  e.preventDefault();
  if (InputValue) {
    console.log("Submitting:", InputValue);
    setInputValue("");
  } else {
    setIsShowError(true);
  }
}} className="d-flex mb-1">
    <input
    onChange={handleChangeInput}
    value={InputValue}
      type="text"
      className="form-control me-2"
      placeholder="Nhập công việc..."
    />
    <button type="submit" className="btn btn-primary" >
      Thêm
    </button>
  </form>
  {isShowError && (
    <p className="text-danger error-text mb-3 text-sm fs-6">
      Vui lòng nhập tên công việc!
    </p>
  )}

    </div>
  )
}
