import * as React from "react"
import Layout from "../component/layout"
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";


const formation = ({data}) => {
  return (
    <Layout>
  <main className="flex flex-col gap-20 mb-20">
  <GatsbyImage
            className=" m-auto max-w-full"
            image={data.datoCmsListesFormation.imageFormation.gatsbyImageData}
            alt={data.datoCmsListesFormation.imageFormation.alt}
          />
          <article className="flex flex-col gap-20 w-10/12 m-auto">
            <section className="flex m-auto md:w-6/12 m-auto flex-row items-center gap-10">
	<h1 className="text-center text-3xl font-black">{data.datoCmsListesFormation.nomDeLaFormation}</h1>
  <button className="bg-bleu-z  p-2">S'inscrire</button>
  </section>
  <section className="flex flex-col gap-10 md:grid grid-cols-2 md:gap-20">
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl">Public cible</h2>
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsListesFormation.publicCible }}/> 

    </div>
    <div className="flex flex-col gap-5">
    <h2 className="text-2xl">Condition d'accès</h2>
    <div dangerouslySetInnerHTML={{ __html: data.datoCmsListesFormation.conditionDacces }}/> 

    </div>
  </section>
  <section className="flex flex-col gap-5">
  <h2 className="text-2xl">Objectifs communs à tous les cours de FLE</h2>
  <div dangerouslySetInnerHTML={{ __html: data.datoCmsListesFormation.objectifCommunTousLesCoursDeFle }}/> 
</section>
<section className="flex flex-col gap-5">
<h2 className="text-2xl">Organisation</h2>
<div dangerouslySetInnerHTML={{ __html: data.datoCmsListesFormation.organisation }}/> 
<h3 className="text-xl">Niveaux :</h3>
<div dangerouslySetInnerHTML={{ __html: data.datoCmsListesFormation.niveaux }}/> 
</section>

<section className="flex flex-col gap-10 md:grid grid-cols-2 md:gap-20">
    <div className="flex flex-col gap-5">
      <h2 className="text-2xl">Quel est mon niveau ?</h2>
      <div dangerouslySetInnerHTML={{ __html: data.datoCmsListesFormation.quelEstMonNiveau }}/> 

    </div>
    <div className="flex flex-col gap-5">
    <h2 className="text-2xl">Frais d'inscription</h2>
    <div dangerouslySetInnerHTML={{ __html: data.datoCmsListesFormation.fraisDInscription }}/> 
    <button className="bg-bleu-z  p-2">S'inscrire</button>


    </div>
  </section>
  </article>
</main>

</Layout>
  )
}

export const query = graphql`
  query formationQuery($url: String) {
    datoCmsListesFormation(slug: { eq: $url }) {
      conclusion
      conditionDacces
      fraisDInscription
      imageFormation {
        gatsbyImageData (height:400, width:1400)
        alt
      }
      niveaux
      nomDeLaFormation
      objectifCommunTousLesCoursDeFle
      organisation
      publicCible
      quelEstMonNiveau
      slug
    }


  }
  `;

export default formation

export const Head = () => <title>ASBL</title>
