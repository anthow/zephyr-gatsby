// NavbarLink.js

import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";

const Logo = () => (
  <Link to="/">
  <figure className="">
    <StaticImage
      src="https://res.cloudinary.com/liono/image/upload/v1673538982/Z%C3%A9phyr/logo_zephyr_itor5r.png"
      alt="Logo Zéphyr"
      width={100}
      quality={95}
      formats={["auto", "webp", "avif"]}
      className="mr-2 md:hidden md:mr-10"
    />
  </figure>
</Link>
);

export default Logo;
