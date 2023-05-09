import * as React from "react"
import Layout from "../component/layout"
import { graphql } from "gatsby";
import { GatsbyImage, StaticImage } from "gatsby-plugin-image";
import Seo from "../component/seo";
import SliderFooter from "../component/slider/slider-footer";

const blogPost = ({data}) => {
	
  return (
    <Layout>
		 <Seo
        title={data.datoCmsActualite.seo.title}
        description={data.datoCmsActualite.seo.description}
        image={data.datoCmsActualite.seo.image.gatsbyImageData}
      />
  <div className="flex flex-col gap-10 mb-20">
  <GatsbyImage
            className=" m-auto max-w-full"
            image={data.datoCmsActualite.imageDeLArticle.gatsbyImageData}
            alt={data.datoCmsActualite.imageDeLArticle.alt}
          />
		<article className="flex flex-col gap-10 w-10/12 m-auto">
		<section className="flex flex-col gap-2">
			<h1 className=" text-3xl text-bleu-z font-semibold">{data.datoCmsActualite.nomDeLArticle}</h1>
			<p className="italic">le {data.datoCmsActualite.date}</p>
			</section>

			<div dangerouslySetInnerHTML={{ __html: data.datoCmsActualite.texteDeLArticle }}/> 

			</article>

</div>
<SliderFooter />
</Layout>
  )
}
export const query = graphql`
query BlogQuery($slug: String) {
	datoCmsActualite(slug: { eq: $slug }) {
		seo {
			description
			title
			image {
			  gatsbyImageData
			}
		  }
		date(formatString: "  dddd DD MMMM YYYY", locale: "fr")
		imageDeLArticle {
		  alt 
		  gatsbyImageData(aspectRatio: 1.5, height:400)
		}
		nomDeLArticle
		slug
		texteDeLArticle
	}
}

`
export default blogPost

