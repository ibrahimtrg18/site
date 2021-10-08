import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import Project from "../components/Project";

export default function ProjectPage() {
  const data = useStaticQuery(graphql`
    query SiteProjects {
      site {
        siteMetadata {
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

  const { projects } = data.site.siteMetadata;

  return (
    <Layout>
      <Project projects={projects} />
    </Layout>
  );
}
