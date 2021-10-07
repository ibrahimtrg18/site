import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/Layout";
import ProjectList from "../components/ProjectList";

export default function Project() {
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
      <div className="project">
        <ProjectList projects={projects} />
      </div>
    </Layout>
  );
}
