import React from "react"
import { StaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"


const Footer = () => (
  <StaticQuery
  query={graphql`
  {
    datoCmsFooter {
		logoPartenaires {
            gatsbyImageData (height:120)
            alt
            
      }
    }
  }
  `}
    render={data => 

<>


<footer className="flex flex-col gap-20">
      <ul className="w-10/12 m-auto  flex flex-col md:flex-row flex-wrap items-center  gap-10">

{data.datoCmsFooter.logoPartenaires.map(node => 
        <li className=" place-self-center ">
          {/*}<a href={node.customData.url} rel="noreferrer" target="_blank" >{*/}

                <figure className="  ">
                <GatsbyImage image={node.gatsbyImageData} className=" "
                alt={node.alt}
                  />
                </figure>
               {/*} </a>{*/}
                </li>
            
            )}

</ul>
<article className=" bg-slate-400 p-2">
	<section className="w-10/12 m-auto flex flex-col md:grid grid-cols-3">
	<div className="col-span-2 items-center md:items-start	 text-center md:text-left flex gap-5 flex-col">
				<h2>Zéphyr ASBL</h2>
				<div>
					<p>Rue du Collège 31</p>
					<p>4600 Visé</p>
				</div>
				<p>0497 24 86 82</p>
				<div className="flex flex-row gap-2">
					<svg width="25" height="25" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"
						/></svg
					>
	
					<svg width="25" height="25" viewBox="0 0 24 24"
						><path
							fill="currentColor"
							d="M16.6 14c-.2-.1-1.5-.7-1.7-.8c-.2-.1-.4-.1-.6.1c-.2.2-.6.8-.8 1c-.1.2-.3.2-.5.1c-.7-.3-1.4-.7-2-1.2c-.5-.5-1-1.1-1.4-1.7c-.1-.2 0-.4.1-.5c.1-.1.2-.3.4-.4c.1-.1.2-.3.2-.4c.1-.1.1-.3 0-.4c-.1-.1-.6-1.3-.8-1.8c-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3c-.6.6-.9 1.3-.9 2.1c.1.9.4 1.8 1 2.6c1.1 1.6 2.5 2.9 4.2 3.7c.5.2.9.4 1.4.5c.5.2 1 .2 1.6.1c.7-.1 1.3-.6 1.7-1.2c.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2c5.5 0 9.9-4.4 9.9-9.9c.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3c-1.5 0-2.9-.4-4.2-1.1l-.3-.2l-3.1.8l.8-3l-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"
						/></svg
					>
				</div>
			</div>
            <ul className="col-span-1 flex items-center  flex-col">
                <li>Menu1</li>
                <li>Menu2</li>
                <li>Menu3</li>
                <li>Menu4</li>
                <li>Menu5</li>
            </ul>
                <ul className="col-span-1 flex items-center flex-col">
                    <li>Menu6</li>
                    <li>Menu7</li>
                    <li>Menu8</li>
                    <li>Menu9</li>
                </ul>
	</section>
</article>

</footer>



            
</>
        
     }

     
  ></StaticQuery>
)

export default Footer

