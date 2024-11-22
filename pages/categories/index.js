import React from 'react'

const index = ({categories}) => {
  return (
    <div> 
      <h1>categorylist</h1>
      <ul>
        {
          categories.map(item=>
            <li key={item.id}> {item.categoryId} - {item.categoryName} </li>
          )
        }
      </ul>
    </div>
  )
}

 export async function getServerSideProps(){
    const res = await fetch('http://apitester.ir/api/categories')
    const categories = await res.json()
    return{
        props:{
            categories
        }
    }
 }


export default index
