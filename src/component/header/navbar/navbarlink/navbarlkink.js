// NavbarLink.js

import React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { StaticQuery, graphql } from "gatsby";

const NavbarLink = () => (
  <StaticQuery
    query={graphql`
      query {
        datoCmsLienReseauxSociaux {
          facebook
          whatsapp
        }
        datoCmsMenu {
          texteAccueil
          texteActivit
          texteActualit
          texteAsbl
          texteBoutonFormation
          texteBoutonSInscrire
          texteContact
          texteFormation
          texteTMoignages
        }
      }
    `}
    render={(data) => (
      <nav className=" w-12/12 sm:mt-5 md:m-auto gap-5  flex flex-col md:flex-row md:justify-between items-center">
        <ul className="flex gap-5 flex-col text-center md:flex-row">
          <Link to="/" >
            {" "}
            <li className=" hover:text-bleu-z focus:text-orange-z">{data.datoCmsMenu.texteAccueil}</li>
          </Link>
          <Link to="/asbl">
            {" "}
            <li>{data.datoCmsMenu.texteAsbl}</li>
          </Link>
          <Link to="/formations">
            {" "}
            <li>{data.datoCmsMenu.texteFormation}</li>
          </Link>
          <Link to="/activites">
            {" "}
            <li>{data.datoCmsMenu.texteActivit}</li>
          </Link>
          <Link to="/temoignages">
            {" "}
            <li>{data.datoCmsMenu.texteTMoignages}</li>
          </Link>
          <Link to="/actu">
            {" "}
            <li>{data.datoCmsMenu.texteActualit}</li>
          </Link>
          <Link to="/contact">
            {" "}
            <li>{data.datoCmsMenu.texteContact}</li>
          </Link>
        </ul>
      
      </nav>
    )}
  ></StaticQuery>
);

export default NavbarLink;
