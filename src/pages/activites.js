import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../component/layout";

const activitePage = ({ data }) => (
  <Layout>
    <main className="flex flex-col gap-10 md:gap-20 mb-20">
      <article
        className="w-10/12  m-auto  flex flex-col items-center gap-10 md:gap-20 md:grid grid-cols-2"
        id=""
      >
        <figure className="">
        <GatsbyImage image={data.datoCmsPageActivite.imagePage.gatsbyImageData} alt={data.datoCmsPageActivite.imagePage.alt} />

        </figure>
        <section className="flex flex-col gap-5 ">
          <h1 className="text-3xl">{data.datoCmsPageActivite.titrePage}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsPageActivite.textePage,
            }}
          />
        </section>
      </article>

      <article className="w-10/12  m-auto" id="">
        <h2 className="text-2xl">Nos prochaines activités</h2>
      </article>
      <article className="w-10/12 m-auto flex flex-col md:grid md:grid-cols-4 gap-10">
        {data.allDatoCmsListesActivite.edges.map(({ node }) => {
          return <section>
		  <figure className="flex flex-col gap-5">
           
		  <GatsbyImage image={node.imageActivit.gatsbyImageData} alt={node.imageActivit.alt} />
  
		  </figure>
		<div className="flex flex-col gap-2">
		<h3>{node.nomDeLActivit}</h3>
		<p> Le {node.dateEtHeure}</p>
		</div>
		<div dangerouslySetInnerHTML={{ __html: node.description }}/> 
		<div className="flex flex-col gap-2">
		<p>Mail: {node.mailInscription}</p>
		<p>SMS: {node.smsInscription}</p>
		</div>
		</section>
        })}
      </article>
    </main>
  </Layout>
);

export const query = graphql`
  query {
    allDatoCmsListesActivite {
      edges {
        node {
          dateEtHeure(formatString: "dddd Do MMMM YY à h:mm  ",locale: "fr")
          description
          imageActivit {
            alt
            gatsbyImageData (width: 250, height: 150)
          }
          mailInscription
          nomDeLActivit
          smsInscription
        }
      }
    }
    datoCmsPageActivite {
      textePage
      titrePage
      imagePage {
        alt
        gatsbyImageData
      }
    }
  }
`;

export default activitePage;

export const Head = () => <title>Nos activités</title>;
