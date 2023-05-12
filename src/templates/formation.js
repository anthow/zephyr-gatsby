import * as React from "react";
import Layout from "../component/layout";
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Seo from "../component/seo";
import { Link } from "gatsby";
import SliderFooter from "../component/slider/slider-footer";

const formation = ({ data }) => {
  return (
    <Layout>
      <Seo
        title={data.datoCmsListesFormation.seo.title}
        description={data.datoCmsListesFormation.seo.description}
        image={data.datoCmsListesFormation.seo.image.gatsbyImageData}
      />
      <main className="flex flex-col gap-20 mb-20">
        <GatsbyImage
          className=" m-auto max-w-full"
          image={data.datoCmsListesFormation.imageFormation.gatsbyImageData}
          alt={data.datoCmsListesFormation.imageFormation.alt}
        />
        <article className="flex flex-col gap-20 w-10/12 m-auto">
          <section className="flex m-auto sm:flex-col  m-auto md:flex-row items-center gap-10">
            <h1 className="text-center text-orange-z text-3xl font-semibold">
              {data.datoCmsListesFormation.nomDeLaFormation}
            </h1>
            <Link to="/inscription">
              <button className="bg-bleu-z text-white text-lg font-medium rounded-full py-1 px-4 hover:opacity-80">
                {data.datoCmsMenu.texteBoutonSInscrire}
              </button>
            </Link>
          </section>
          <section className="flex flex-col gap-10 md:grid grid-cols-2 md:gap-20">
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z font-semibold">
                {data.datoCmsListesFormation.titreUn}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsListesFormation.publicCible,
                }}
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z font-semibold">
                {data.datoCmsListesFormation.titreDeux}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsListesFormation.conditionDacces,
                }}
              />
            </div>
            <section className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z font-semibold">
                {data.datoCmsListesFormation.titreTrois}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    data.datoCmsListesFormation.objectifCommunTousLesCoursDeFle,
                }}
              />
            </section>
            <section className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z  font-semibold">
                {data.datoCmsListesFormation.titreQuatre}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsListesFormation.organisation,
                }}
              />
              <h3 className="text-xl text-bleu-z font-semibold">
                {data.datoCmsListesFormation.titreCinq}
              </h3>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsListesFormation.niveaux,
                }}
              />
            </section>

            <div className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z  font-semibold">
                {data.datoCmsListesFormation.titreSix}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsListesFormation.quelEstMonNiveau,
                }}
              />
            </div>
            <div className="flex flex-col gap-5">
              <h2 className="text-2xl text-bleu-z  font-semibold">
                {data.datoCmsListesFormation.titreSept}
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: data.datoCmsListesFormation.fraisDInscription,
                }}
              />
            </div>
          </section>
          <section className="flex gap-5 flex-col items-center w-10/12 m-auto">
            <h2 className="text-2xl text-bleu-z  font-semibold">
              {data.datoCmsListesFormation.titreHuit}
            </h2>
            <div
              dangerouslySetInnerHTML={{
                __html: data.datoCmsListesFormation.conclusion,
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
        <SliderFooter />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query formationQuery($slug: String) {
    datoCmsListesFormation(slug: { eq: $slug }) {
      seo {
        description
        title
        image {
          gatsbyImageData
        }
      }
      conclusion
      conditionDacces
      fraisDInscription
      imageFormation {
        gatsbyImageData(aspectRatio: 3, height: 400)
        alt
      }
      niveaux
      nomDeLaFormation
      objectifCommunTousLesCoursDeFle
      organisation
      publicCible
      quelEstMonNiveau
      slug
      titreUn
      titreDeux
      titreTrois
      titreQuatre
      titreCinq
      titreSix
      titreSept
      titreHuit
    }
    datoCmsMenu {
      texteBoutonSInscrire
    }
  }
`;

export default formation;

export const Head = () => <title>ASBL</title>;
