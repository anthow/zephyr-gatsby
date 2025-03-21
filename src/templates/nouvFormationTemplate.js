import * as React from "react";
import Layout from "../component/layout";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Seo from "../component/seo";
import { Link } from "gatsby";
import SliderFormation from "../component/slider/slider-formation";

const Nouveformation = ({ data }) => {
  return (
    <Layout>
        <Seo
          title={data.datoCmsPageNouvelleFormation.seo.title}
          description={data.datoCmsPageNouvelleFormation.seo.description}
        />
      <main className="flex flex-col gap-10 mb-20">
        <GatsbyImage
          className="m-auto w-full"
          image={data.datoCmsPageNouvelleFormation.imageFormation.gatsbyImageData}
          alt={data.datoCmsPageNouvelleFormation.imageFormation.alt}
        />
        <nav className="flex flex-col md:flex-row m-auto w-10/12 m-auto flex-row items-center justify-between md:gap-10">
          <figure>
            <GatsbyImage
              image={data.datoCmsPageNouvelleFormation.logoFormation.gatsbyImageData}
              alt={data.datoCmsPageNouvelleFormation.logoFormation.alt}
            />
          </figure>
          <ul className="flex text-bleu-z text-lg gap-10">
            <li className="menu hover:text-white">la formation</li>
            <li>Les ressources</li>
            <li>Les vidéos</li>
          </ul>
          <Link to="/inscription">
            <button className="bg-bleu-z text-white text-lg font-medium rounded-full py-1 px-4 hover:opacity-80">
              {data.datoCmsMenu.texteBoutonSInscrire}
            </button>
          </Link>
        </nav>
        <article className="flex flex-col gap-20 w-10/12 m-auto">
          <section className="flex flex-col gap-5">
            <h1 className="text-center text-orange-z text-3xl font-semibold">
              {data.datoCmsPageNouvelleFormation.titreFormation}
            </h1>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageNouvelleFormation.texteFormation,
              }}
            />
          </section>
          <section className="flex flex-col gap-10 md:grid grid-cols-2 md:gap-20">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z font-semibold">
                {data.datoCmsPageNouvelleFormation.titreUn}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsPageNouvelleFormation.texteUn,
                }}
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z font-semibold">
                {data.datoCmsPageNouvelleFormation.titreDeux}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsPageNouvelleFormation.texteDeux,
                }}
              />
            </div>
            <section className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z font-semibold">
                {data.datoCmsPageNouvelleFormation.titreTrois}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsPageNouvelleFormation.texteTrois,
                }}
              />
            </section>
            <section className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z font-semibold">
                {data.datoCmsPageNouvelleFormation.titreQuatre}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsPageNouvelleFormation.texteQuatre,
                }}
              />
            </section>
            <section className="flex flex-col gap-5">
              <h3 className="text-xl text-bleu-z font-semibold">
                {data.datoCmsPageNouvelleFormation.titreCinq}
              </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsPageNouvelleFormation.texteCinq,
                }}
              />
            </section>

            <div className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z font-semibold">
                {data.datoCmsPageNouvelleFormation.titreSix}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsPageNouvelleFormation.texteSix,
                }}
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z font-semibold">
                {data.datoCmsPageNouvelleFormation.titreSept}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsPageNouvelleFormation.texteSept,
                }}
              />
            </div>
          </section>
          <section className="flex gap-5 flex-col items-center w-10/12 m-auto">
            <h2 className="text-2xl text-bleu-z font-semibold">
              {data.datoCmsPageNouvelleFormation.titreHuit}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsPageNouvelleFormation.texteHuit,
              }}
              className="text-center"
            />
            <Link to="/inscription">
              <button className="bg-bleu-z text-white text-lg font-medium rounded-full py-1 px-4 hover:opacity-80">
                {data.datoCmsMenu.texteBoutonSInscrire}
              </button>
            </Link>
          </section>
        </article>
        <SliderFormation />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query formationQuery($slug: String) {
    datoCmsPageNouvelleFormation(slug: { eq: $slug }) {
      seo {
        description
        title
        image {
          gatsbyImageData
        }
      }
      imageFormation {
        gatsbyImageData(width: 1800, height: 500)
        alt
      }
      logoFormation {
        gatsbyImageData(width: 100)
        alt
      }
      slug
      titreFormation
      titreUn
      titreDeux
      titreTrois
      titreQuatre
      titreCinq
      titreSix
      titreSept
      titreHuit
      texteFormation
      texteUn
      texteDeux
      texteTrois
      texteQuatre
      texteCinq
      texteSix
      texteSept
      texteHuit
    }
    datoCmsMenu {
      texteBoutonSInscrire
    }
  }
`;

export default Nouveformation;
