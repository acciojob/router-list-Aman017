import React from 'react'
import { useParams } from 'react-router-dom'
import { items } from '../data/items'

const ItemDetails = () => {
    const {id} = useParams();
    const item =items.find(item => item.id === parseInt(id));

    if(!item){
        return <div>Item not found</div>
    }
  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  )
}

export default ItemDetails
