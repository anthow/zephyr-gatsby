import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../component/layout";
import Seo from "../component/seo";
const activitePage = ({ data }) => (
  <>
    <Seo
      title={data.datoCmsPageActivite.seo.title}
      description={data.datoCmsPageActivite.seo.description}
      image={data.datoCmsPageActivite.seo.image.gatsbyImageData}
    />
    <Layout>
      <main className="flex flex-col  gap-10  mb-20">
        <article className="w-10/12  m-auto  flex flex-col items-center gap-10 md:gap-20 md:grid grid-cols-2">
          <figure className="mb-5">
            <GatsbyImage
              image={data.datoCmsPageActivite.imagePage.gatsbyImageData}
              alt={data.datoCmsPageActivite.imagePage.alt}
            />
          </figure>
          <section className="flex flex-col gap-5 ">
            <h1 className="text-3xl font-black text-bleu-z">
              {data.datoCmsPageActivite.titrePage}
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageActivite.textePage,
              }}
            />
          </section>
        </article>

        <article className="w-10/12  m-auto" id="">
          <h2 className="text-2xl text-bleu-z font-black">
            Nos prochaines activités
          </h2>
        </article>
        <article className="w-10/12 m-auto flex flex-col md:grid md:grid-cols-2 gap-20">
          {data.allDatoCmsListesActivite.edges.map(({ node }) => {
            return (
              <section className="flex flex-col gap-5">
                <figure className="">
                  <GatsbyImage
                    image={node.imageActivit.gatsbyImageData}
                    alt={node.imageActivit.alt}
                  />
                </figure>
                <div className="flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-black text-bleu-z">
                      {node.nomDeLActivit}
                    </h3>
                    <p className="italic bg-orange-z w-max text-white font-black px-2">
                      {" "}
                      Le {node.dateEtHeure}
                    </p>
                  </div>
                  <div dangerouslySetInnerHTML={{ __html: node.description }} />
                  <div className="flex flex-col gap-2">
                    <p>Mail: {node.mailInscription}</p>
                    <p>SMS: {node.smsInscription}</p>
                  </div>
                </div>
              </section>
            );
          })}
        </article>
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
