import React from "react";

import { css } from "@emotion/core";
import styled from "@emotion/styled";

import Container from "components/Container";
import { rhythm } from "../lib/typography";
import theme from "../../config/theme";
const image = require("../../static/images/elazizi.png");
const Avatar = styled.img`
  height: 160px;
  width: 160px;
  border-radius: 80px;
  border: 4px solid #fff;
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
  margin: auto;
`;
const Hero = () => (
  <section
    css={css`
      * {
        color: ${theme.colors.white};
      }
      width: 100%;
      background: ${theme.brand.primary};
      padding: 30px 0 30px 0;
      display: flex;
      margin-top: -60px;

      background-image: linear-gradient(
        179.3deg,
        rgba(80, 161, 252, 1) 0.3%,
        rgba(1, 98, 203, 1) 96.9%
      );
    `}
  >
    <Container
      css={css`
        display: flex;
        flex-direction: column;
      `}
    >
      <div
        css={css`
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          flex-wrap: wrap-reverse;
        `}
      >
        <div
          css={css`
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
          `}
        >
          <h2>
            <span
              css={css`
                font-size: 80px;
              `}
            >
              👋
            </span>
            <span> </span>Hello, I'm Youssouf ! <br />{" "}
          </h2>
          A Human first guy 🙌 , I'am a Full stack web developer 👨🏻‍💻 and OSS
          believers, I love working with react and ReactNative and I write my
          programming journey 👇👇👇.
        </div>
        <Avatar src={image} />
      </div>
    </Container>
    <div
      css={css`
        height: 150px;
        overflow: hidden;
      `}
    />
  </section>
);

export default Hero;
