import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Profile from "../components/Profile";

export default function Home() {
  const data = useStaticQuery(graphql`
    query SiteHome {
      site {
        siteMetadata {
          title
          about {
            avatar
            profile
          }
        }
      }
    }
  `);

  const { title, about } = data.site.siteMetadata;

  const profile = {
    title,
    image: about.avatar,
    description: about.profile,
  };

  return (
    <Layout>
      <Profile profile={profile} />
    </Layout>
  );
}
