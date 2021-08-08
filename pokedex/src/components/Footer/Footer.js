import React from "react";
import {
  DivFooter,
  ImgPokemon,
  DivImg,
  DivText,
  Title,
  DivContainer
} from "./footerStyles";
import evee from "../../images/evee.png";
import sudo from "../../images/sudo.png";
import swinub from "../../images/swinub.png";

const Footer = () => {
  return (
    <DivFooter>
      <DivContainer>
      <DivImg>
        <ImgPokemon src={evee} />
        <ImgPokemon src={sudo} />
        <ImgPokemon src={swinub} />
      </DivImg>

      <DivText>
        <section>
          <Title>Desenvolvedora</Title>
          <p>Danielle Costa</p>
        </section>
      </DivText>
      </DivContainer>
    </DivFooter>
  );
};
export default Footer;
