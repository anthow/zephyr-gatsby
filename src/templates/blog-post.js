import * as React from "react"
import Layout from "../component/layout"
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";

const blogPost = ({data}) => {
  return (
    <Layout>
  <main className="flex flex-col gap-20 mb-20">
  <GatsbyImage
            className=" m-auto max-w-full"
            image={data.datoCmsActualite.imageDeLArticle.gatsbyImageData}
            alt={data.datoCmsActualite.imageDeLArticle.alt}
          />
		<article className="flex flex-col gap-20 w-10/12 m-auto">
		<section className="flex flex-col gap-2">
			<h1 className=" text-3xl font-black">{data.datoCmsActualite.nomDeLArticle}</h1>
			<p className="italic">{data.datoCmsActualite.date}</p>
			</section>

			<div dangerouslySetInnerHTML={{ __html: data.datoCmsActualite.texteDeLArticle }}/> 

			</article>

</main>

</Layout>
  )
}
export const query = graphql`
query BlogQuery($url: String) {
	datoCmsActualite(slug: { eq: $url }) {
		date
		imageDeLArticle {
		  alt
		  gatsbyImageData (height:400, width:1400)
		}
		nomDeLArticle
		slug
		texteDeLArticle
	}
}
`
export default blogPost

export const Head = () => <title>ASBL</title>
