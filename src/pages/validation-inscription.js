import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../component/layout";
import Seo from "../component/seo";
import { StaticImage } from "gatsby-plugin-image";
import SliderFooter from "../component/slider/slider-footer";

const activitePage = ({ data }) => (
  <>
    {/*}<Seo
      title={data.datoCmsPageActivite.seo.title}
      description={data.datoCmsPageActivite.seo.description}
      image={data.datoCmsPageActivite.seo.image.gatsbyImageData}
    />
{*/}
    <Layout>
      <main className="flex flex-col m-auto w-10/12 md:w-6/12   gap-10 items-center my-20">
        <StaticImage
          src="https://res.cloudinary.com/liono/image/upload/v1673538982/Z%C3%A9phyr/logo_zephyr_itor5r.png"
          alt="Logo Zéphyr"
          quality={95}
          formats={["auto", "webp", "avif"]}
          className="mr-2 md:mr-10 h-max w-1/2 md:w-1/4"
        />
        <article className=" flex flex-col items-center gap-10 p-10 rounded border border-bleu-z">
          <h1 className="text-xl text-bleu-z font-black">
            {data.datoCmsValidationFormulaireDInscription.titreDeLaValidation}
          </h1>
          <div
            className="flex flex-col gap-5"
            dangerouslySetInnerHTML={{
              __html: data.datoCmsValidationFormulaireDInscription.texteDeLaValidation,
            }}
          />
        
        </article>
        <SliderFooter />
      </main>
    </Layout>
  </>
);

export const query = graphql`
  query {
    datoCmsValidationFormulaireDInscription {
      texteDeLaValidation
      titreDeLaValidation
    }
  }
`;

export default activitePage;
