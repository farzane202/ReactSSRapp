

  const Index = ({categories}) => {
  return (
    <div>
        <h1> Category List SSG : </h1>
        <br/>
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

   export async function getStaticProps  () {
     const res = await fetch ('http://apitester.ir/api/categories')
     const categories = await res.json()
     return{
        props:{categories},
        revalidate:1
     }
   }




export default Index
