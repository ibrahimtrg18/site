import React from "react";
import Layout from "../components/Layout";

export default function Project() {
  return (
    <Layout>
      <section>
        My Projects:
        <ul>
          <li>
            <a
              href="http://talky.ibrahimtarigan.me"
              target="_blank"
              rel="noreferrer"
            >
              Talky Server
            </a>
          </li>
          <li>
            <a
              href="http://myroute.ibrahimtarigan.me"
              target="_blank"
              rel="noreferrer"
            >
              My Route
            </a>
          </li>
        </ul>
      </section>
    </Layout>
  );
}
