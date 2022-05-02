import classNames from "classnames";
import { graphql, useStaticQuery } from "gatsby";
import React, { useMemo } from "react";

import { Container } from "../../Base/Container";
import { Section } from "../../Base/Section";
import CardProject from "../../Core/CardProject/CardProject";
import { Content, ProjectContent, ProjectList } from "./Project.styles";

interface Project {
  name: string;
  url: string;
  image: string;
}

interface ProjectCategory {
  work: Array<Project>;
  personal: Array<Project>;
}

const Project = (_: any, ref: React.ForwardedRef<HTMLElement>) => {
  const data = useStaticQuery(query);
  const files: Array<any> = data.allFile.edges;

  const project: ProjectCategory = useMemo(
    () => data.site.siteMetadata.project,
    []
  );
  const projectWork: Array<Project> = useMemo(() => project.work, []);
  const projectPersonal: Array<Project> = useMemo(() => project.personal, []);

  const renderProject = (projects: Array<Project>) =>
    projects.map((project, i) => {
      const file = files.find(
        (file) => `${file.node.name}.${file.node.extension}` === project.image
      );

      return (
        <CardProject
          key={i}
          title={project.name}
          image={file.node.publicURL}
          url={project.url}
        />
      );
    });

  return (
    <Section ref={ref}>
      <Container>
        <Content>
          <h3 className={classNames("title")}>Project</h3>
          <ProjectContent>
            <h6 className={classNames("title")}>Personal</h6>
            <ProjectList>{renderProject(projectPersonal)}</ProjectList>
          </ProjectContent>
          <ProjectContent>
            <h6 className={classNames("title")}>Work / Contribute</h6>
            <ProjectList>{renderProject(projectWork)}</ProjectList>
          </ProjectContent>
        </Content>
      </Container>
    </Section>
  );
};

export default React.forwardRef(Project);

const query = graphql`
  query {
    site {
      siteMetadata {
        project {
          work {
            name
            url
            image
          }
          personal {
            name
            url
            image
          }
        }
      }
    }
    allFile {
      edges {
        node {
          name
          extension
          publicURL
        }
      }
    }
  }
`;
