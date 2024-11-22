import "@/styles/globals.css";
import Link from "next/link";


export default function App({ Component, pageProps }) {
  return (
     <>
     <br/>
      <h1 style={{textAlign:'center'}}>Nextjs static SSR App</h1>
      <br/>
       <ul style={{textAlign:'center'}}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/users">Users</Link></li>
        <li><Link href="/categories">categories</Link></li>
        <li><Link href="/categories_ssg">categories ssg</Link></li>
       
       </ul>


     <Component {...pageProps} />
     </>

  )
  
  
  
}
