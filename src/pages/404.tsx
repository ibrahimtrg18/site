import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { Container } from "../components/Base/Container";
import Layout from "../components/Layout/Layout";

const Content = styled.div`
  display: grid;
  height: 100vh;
  align-items: center;
  justify-content: center;
`;

const NotFoundPage = () => {
  return (
    <Layout navbar={false}>
      <Container>
        <Content>
          <div>
            <h1>404, Not Found</h1>
            <Link to="/">Go Back</Link>
          </div>
        </Content>
      </Container>
    </Layout>
  );
};

export default NotFoundPage;
