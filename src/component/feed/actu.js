import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby";
import moment from "moment/moment";
import 'moment/locale/fr';

const Actu = () => {
    const data = useStaticQuery(graphql`
    query {
        allDatoCmsActualite(sort: { date: DESC }) {
          edges {
            node {
              slug
              meta {
                createdAt(formatString: "MMM YYYY", locale: "fr")
                publishedAt(formatString: "ddd d", locale: "fr")
              }
              nomDeLArticle
              texteDeLArticle
              date (locale: "fr")
              imageDeLArticle {
                alt
                gatsbyImageData(width: 250, height: 170)
              }
            }
          }
        }
      }
    `)


  return(
 <>        <h2 className="text-2xl text-bleu-z font-semibold">
          Nos Dernières actualités
        </h2>
        <section className="flex flex-col md:grid grid-cols-3 items-center gap-20">
          {data.allDatoCmsActualite.edges.map(({ node }) => {
              const datejour = node.date
              const mois = moment(datejour).locale("fr").format("MMM YYYY");  
              const jour = moment(datejour).locale("fr").format("dddd DD"); 
            return (
              <Link to={node.slug}>
                <div className="flex flex-col p-5 gap-10 bg-bleu-z text-white">
                  <div className="flex flex-row gap-10 justify-between items-center">
                    <h3 className="text-xl">{node.nomDeLArticle}</h3>
                    <div className="flex flex-col p-2 text-center">
                      <p className="bg-orange-z p-4">{mois}</p>
                      <div className="bg-orange-z opacity-80 border-white border-t-2 py-5 px-5 flex flex-col">
                        <p>{jour}</p>
                      </div>
                    </div>
                  </div>
                  <figure className="m-auto">
                    <GatsbyImage
                      image={node.imageDeLArticle.gatsbyImageData}
                      alt={node.imageDeLArticle.alt}
                    />
                  </figure>
                </div>
              </Link>
            );
          })}
        </section>
        </>

  )
}
;

  

export default Actu;
