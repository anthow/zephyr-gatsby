import * as React from "react"
import Header from "./header/header"
import Footer from "./footer"


const Layout = ({ children }) => {

    return (
        
    <>
    <Header />
        <main className=" w-12/12 flex flex-col sm:mt-22  md:mt-0  m-auto font-sans  ">{children}</main>
     
       <Footer/>
       <script async defer src="https://scripts.withcabin.com/hello.js"></script>
    </>
    
    ) }

  
      export default Layout
      