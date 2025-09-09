import React from 'react'
import Headers from './Header'
import FormProduct from './FormProduct'
import ListProduct from './ListProduct'
import Pagination from './Pagination'
export default function ProductManage() {
  return (
    <div>
    <Headers/>
    <FormProduct/>
    <ListProduct/>
    <Pagination/>
    </div>
  )
}
