import React from "react";
import { graphql, useStaticQuery } from "gatsby";
// hooks
import { useScrollTo } from "../hooks/useScrollTo";

// components
import Layout from "../components/Layout";
import Profile from "../components/Profile";
import Project from "../components/Project";
import Contact from "../components/Contact";

export default function HomePage(props) {
  const {
    location: { state },
  } = props;

  useScrollTo(state && state.targetFragment);

  const data = useStaticQuery(graphql`
    query SiteHome {
      site {
        siteMetadata {
          title
          about {
            avatar
            profile
          }
          projects {
            image
            description
            link
            repo
            repoPrivate
            stacks
            title
          }
        }
      }
    }
  `);

  const { title, about, projects } = data.site.siteMetadata;

  const profile = {
    title,
    image: about.avatar,
    description: about.profile,
  };

  return (
    <Layout>
      <Profile profile={profile} />
      <Project projects={projects} />
      {/* <Contact /> */}
    </Layout>
  );
}
