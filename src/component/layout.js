import * as React from "react"
import Header from "./header/header"
import Footer from "./footer"

const Layout = ({ children }) => {

    return (
        
    <>
    <Header />
    <div className=" mt-10 min-h-screen flex flex-col h-screen">
    <section className=" fullheader w-12/12 m-auto fixed bg-white z-50 font-sans">
      </section>
      <section className="w-12/12 mt-24 md:mt-0  m-auto font-sans">
        <main className="flex-1 md:mt-52">{children}</main>
       </section>
     
       </div>
       <Footer/>
    </>
    ) }

  
      export default Layout
      