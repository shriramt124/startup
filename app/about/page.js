import { Suspense } from "react";
import AboutClientPage from "./AboutClient";

export const metadata = {
  title: "About Us - Leading Data Engineering & AI Solutions Company",
  description: "Learn about Eficsy's mission to transform businesses through data engineering, AI automation, and cutting-edge technology solutions. Meet our expert team of data engineers and AI strategists.",
  keywords: ["about eficsy", "data engineering company", "AI solutions team", "technology consulting", "data science experts"],
  openGraph: {
    title: "About Eficsy - Data Engineering & AI Experts",
    description: "Discover how Eficsy helps businesses leverage data and AI for competitive advantage.",
    url: "https://eficsy.com/about",
    type: "website",
  },
  alternates: {
    canonical: '/about',
  },
};

export default function AboutPage() {
  return <AboutClientPage />;
}