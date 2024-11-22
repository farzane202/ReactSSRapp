import Link from "next/link"


const UserInfo = ({user}) => {
  return (
    <div>
       <h1> user Info : </h1>
         {/* user: {JSON.stringify(user)} */}
       <h2> Fullname : {user.name} </h2>
       <h3> Username : {user.username} </h3>
       <h3> Email : {user.email}  </h3>
       <br/>
       <Link href="/users"> Back to list </Link>
    </div>
  )
}
  
 export async function getStaticPaths(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json()

    const paths = users.map((user)=>`/users/${user.username}`)
    return {paths,fallback:false}
 }
  

 export async function getStaticProps({params}){
   const res = await fetch(`https://jsonplaceholder.typicode.com/users?username=${params.username}`)
   const user = await res.json()
   return{
    props:{
        user:user[0],
    },
   }
 }



export default UserInfo
