/** @format */

import React from "react";
import myphoto from "../../data/images/myphoto.png";
import Title from "../Titles/Title";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMountain,
  faGlobeAmericas,
  faPizzaSlice,
} from "@fortawesome/free-solid-svg-icons";

import {
  AboutMeSection,
  Image,
  TextAboutMe,
  BoxIcon,
  TextIcon,
  TextAbourtMeSecondary,
  TextAboutMeBottom,
  Box,
} from "./StyledAboutMeContainer.styled.js";

const AboutMe = () => {
  return (
    <>
      <AboutMeSection id="aboutme">
        <Title>About me</Title>
        <Image src={myphoto} alt="my photo" />

        <TextAboutMe>
          Hi! I'm Martyna. 3 years ago I decided to change my life, I wanted to
          change my boring job... I became interested in creating websites and
          it was a 10 shot! I love doing it, but sometimes I hate it :P what is
          normal or nor ?:D when something doesn't work... but satisfaction when it starts
          working? wonderful feeling!
          <TextAboutMeBottom>I want to develop!ツ</TextAboutMeBottom>
          <TextAbourtMeSecondary>and so besides</TextAbourtMeSecondary>
        </TextAboutMe>

        <BoxIcon>
          <Box>
            <FontAwesomeIcon
              className="iconFontAwesome--aboutMe"
              icon={faMountain}
              secondary
            />
            <TextIcon>I am mountain lover!</TextIcon>
          </Box>

          <Box>
            <FontAwesomeIcon
              className="iconFontAwesome--aboutMe"
              icon={faGlobeAmericas}
              secondary
            />
            <TextIcon>
              there is nothing better for me than exploring the world!
            </TextIcon>
          </Box>

          <Box>
            <FontAwesomeIcon
              className="iconFontAwesome--aboutMe"
              icon={faPizzaSlice}
              secondary
            />
            <TextIcon>I can't live without pizza</TextIcon>
          </Box>
        </BoxIcon>
      </AboutMeSection>
    </>
  );
};

export default AboutMe;
