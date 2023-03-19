import * as React from "react"
import Header from "./header/header"
import Footer from "./footer"

const Layout = ({ children }) => {

    return (
        
    <>
    <Header />
    <div className="mt-40 md:mt-0 min-h-screen flex flex-col h-screen">
      <section className="w-12/12  md:mt-0  m-auto font-sans">
        <main className="flex-1 md:mt-52">{children}</main>
       </section>
     
       </div>
       <Footer/>
    </>
    ) }

  
      export default Layout
      