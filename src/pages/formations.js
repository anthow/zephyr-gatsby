import * as React from "react";
import Layout from "../component/layout";
import { graphql } from "gatsby";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../component/seo";
import SliderFooter from "../component/slider/slider-footer";

const formationPage = ({ data }) => (
  <Layout>
      <Seo
        title={data.datoCmsPageFormation.seo.title}
        description={data.datoCmsPageFormation.seo.description}
      />
    <main className="flex flex-col gap-10 md:gap-20 mb-20">
      <article className="w-10/12 m-auto flex flex-col items-center gap-10 md:gap-20 md:grid grid-cols-2">
        <figure className="">
          <GatsbyImage
            image={data.datoCmsPageFormation.imagePage.gatsbyImageData}
            alt={data.datoCmsPageFormation.imagePage.alt}
          />
        </figure>
        <section className="flex flex-col gap-5 ">
          <h1 className="text-3xl text-bleu-z font-semibold">
            {data.datoCmsPageFormation.titrePage}
          </h1>
          <div
            dangerouslySetInnerHTML={{
              __html: data.datoCmsPageFormation.textePage,
            }}
          />
        </section>
      </article>

      <section className="flex flex-col gap-20">
        {data.allDatoCmsListesFormation.edges.map(({ node }, i) =>
          i % 2 ? (
            <article
              className="w-10/12 md:w-12/12 m-auto flex flex-col items-center gap-10 md:gap-20 md:grid grid-cols-2"
              id=""
            >
              <figure className="order-2 md:order-1">
                <GatsbyImage
                  image={node.imageFormation.gatsbyImageData}
                  alt={node.imageFormation.alt}
                />
              </figure>

              <section className="flex flex-col gap-10 order-1 md:order-2">
                <div className="flex flex-col gap-5">
                  <h2 className="text-xl text-orange-z font-semibold">
                    {node.nomDeLaFormation}
                  </h2>
                  <div
                    className="flex flex-col gap-2"
                    dangerouslySetInnerHTML={{
                      __html: node.descriptionPageDAccueil,
                    }}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                  <Link to="/inscription">
                    <button className="bg-bleu-z rounded-full py-2 px-4 text-white font-semibold">
                      {data.datoCmsMenu.texteBoutonSInscrire}
                    </button>
                  </Link>
                  <Link to={node.slug}>
                    <button className="bg-orange-z rounded-full py-2 px-4 text-white font-semibold">
                      En savoir plus
                    </button>
                  </Link>
                </div>
              </section>
            </article>
          ) : (
            <article
              className="w-10/12 md:w-12/12 m-auto flex flex-col items-center gap-10 md:gap-20 md:grid grid-cols-2"
              id=""
            >
              <figure className="order-1 md:order-2">
                <GatsbyImage
                  image={node.imageFormation.gatsbyImageData}
                  alt={node.imageFormation.alt}
                />
              </figure>

              <section className="flex flex-col gap-10 order-2 md:order-1">
                <div className="flex flex-col gap-5">
                  <h2 className="text-xl text-orange-z font-semibold">
                    {node.nomDeLaFormation}
                  </h2>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: node.descriptionPageDAccueil,
                    }}
                  />
                </div>
                <div className="flex flex-col md:flex-row gap-5">
                  <Link to="/inscription">
                    <button className="bg-bleu-z rounded-full py-2 px-4 text-white font-semibold">
                      {data.datoCmsMenu.texteBoutonSInscrire}
                    </button>
                  </Link>
                  <Link to={node.slug}>
                    <button className="bg-orange-z rounded-full py-2 px-4 text-white font-semibold">
                      En savoir plus
                    </button>
                  </Link>
                </div>
              </section>
            </article>
          )
        )}
      </section>
    </main>
    <SliderFooter />
  </Layout>
);

export const query = graphql`
  query {
    datoCmsMenu {
      texteBoutonSInscrire
    }
    allDatoCmsListesFormation {
      edges {
        node {
          slug
          descriptionPageDAccueil
          imageFormation {
            alt
            gatsbyImageData(width: 800, height: 500)
          }
          nomDeLaFormation
        }
      }
    }
    datoCmsPageFormation {
      seo {
        description
        title
        image {
          gatsbyImageData
        }
      }
      titrePage
      textePage
      imagePage {
        gatsbyImageData
        alt
      }
    }
  }
`;

export default formationPage;

export const Head = () => <title>Formation</title>;
