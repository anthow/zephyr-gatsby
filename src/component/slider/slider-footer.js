import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const SliderFooter = () => (
  <StaticQuery
    query={graphql`
      {
        datoCmsFooter {
          logoPartenaires {
            gatsbyImageData(height: 100)
            alt
          }
        }
       
      }
    `}
    render={(data) => (
      <>
          <ul className="w-10/12 m-auto  my-20  flex flex-col md:flex-row flex-wrap justify-center justify-items-stretch items-center  gap-5">
            {data.datoCmsFooter.logoPartenaires.map((node) => (
              <li className=" place-self-center ">
                {/*}<a href={node.customData.url} rel="noreferrer" target="_blank" >{*/}

                <figure className="  ">
                  <GatsbyImage
                    image={node.gatsbyImageData}
                    className=" "
                    alt={node.alt}
                  />
                </figure>
                {/*} </a>{*/}
              </li>
            ))}
          </ul>
      </>
    )}
  ></StaticQuery>
);

export default SliderFooter;