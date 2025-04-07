import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import React from "react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Hero from "../components/Hero";
import Article from "../components/Article";
import PopularArtices from "../components/PopularArticles";
import AllArticles from "../components/AllArticles";




const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  hero : Hero,
 'all-articles': AllArticles,
  article: Article,
  'popular-articles': PopularArtices,
 
};

storyblokInit({
  accessToken: "6QGIP7L1V9eapEd9Vr025wtt",
  use: [apiPlugin],
  components,
  apiOptions: {
    region: "eu"
  }
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
