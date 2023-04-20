import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../component/layout";
import Seo from "../component/seo";
const activitePage = ({ data }) => (
  <>
    {/*}<Seo
      title={data.datoCmsPageActivite.seo.title}
      description={data.datoCmsPageActivite.seo.description}
      image={data.datoCmsPageActivite.seo.image.gatsbyImageData}
    />
{*/}
    <Layout>
      <main className="flex flex-col  gap-10  mb-20">
       votre inscription a bien été prise en compte, nous vous recontacterons le plus rapidement possible 
      </main>
    </Layout>
  </>
);

export const query = graphql`
  query {
    allDatoCmsListesActivite {
      edges {
        node {
          dateEtHeure(formatString: "dddd Do MMMM YY à h:mm  ", locale: "fr")
          description
          imageActivit {
            alt
            gatsbyImageData(width: 250, height: 250)
          }
          mailInscription
          nomDeLActivit
          smsInscription
        }
      }
    }
    datoCmsPageActivite {
      seo {
        description
        title
        image {
          gatsbyImageData
        }
      }
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
