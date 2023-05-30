import * as React from "react"
import Header from "./header/header"
import Footer from "./footer"
import CookieConsent from 'react-cookie-consent';



const Layout = ({ children }) => {

    return (
        
    <>
    <Header />
        <main className=" w-12/12 flex flex-col sm:mt-22  md:mt-0  m-auto font-sans  ">{children}</main>
     
       <Footer/>
       <CookieConsent
          location="bottom"
          buttonText="Accepter"
          declineButtonText="Refuser"
          cookieName="gatsby-gdpr-google-analytics">Avec votre accord, nous utilisons des cookies ou technologies similaires pour stocker et accéder à des informations personnelles comme votre visite sur ce site. Vous pouvez retirer votre consentement ou vous opposer aux traitements basés sur l'intérêt légitime à tout moment   dans notre politique de confidentialité sur ce site.</CookieConsent>
       <script async defer src="https://scripts.withcabin.com/hello.js"></script> 
    </>
    
    ) }

  
      export default Layout
      