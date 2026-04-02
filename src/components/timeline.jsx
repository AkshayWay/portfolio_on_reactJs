import React, { Component } from "react";

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div
                className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Senior Software Engineer at Cognizant
                          <span> 2022-present</span>
                        </h2>
                        <p>
                          Designed and maintained a CMS using
                          microservices-based, event-driven architecture with
                          Node.js, TypeScript, and MongoDB.
                        </p>
                        <p>
                          Improved code reliability by writing unit tests with
                          Jest, achieving 85%+ coverage. Optimized backend
                          performance through Node.js refactoring and MongoDB
                          indexing.
                        </p>
                        <p>
                          Worked within Agile teams leveraging AWS-based CI/CD
                          pipelines. Utilized AI tools like GitHub Copilot and
                          Claude to accelerate development.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Senior Software Engineer at Tech Mahindra
                          <span> Nov 2021 - Oct 2023</span>
                        </h2>
                        <p>
                          Developed APIs in Node.js for multiple projects. Led a
                          team of 4 developers, handling environment setup, code
                          review, and deployment.
                        </p>
                        <p>
                          Maintenance and enhancement of application APIs using
                          APM logs and Kubernetes.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Senior Analyst/Software Developer at Capgemini India
                          <span> July 2018-present</span>
                        </h2>
                        <p>
                          I am working as a Software developer at Capgemini.
                        </p>
                        <p>
                          <span>DSG: </span>It is an E-commerce website. My
                          major part of the work has been into designing part
                          and enhancing SQL queries. Participated in project
                          automation.
                        </p>
                        <p>
                          <span>General Electronics: </span>It is a nuclear
                          plant-based website. My responsibilities are to make
                          validations on JavaScript/JQuery and C#. Create and
                          provide deployment packages on GitHub.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInTop"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>
                          Junior Software Developer at Konnect Consultancy
                          <span>Oct 2016- April 2018</span>
                        </h2>
                        <p>
                          The UK based firm, which served to be my first company
                          to work. It is a CRM website where I have majorly
                          worked on design(UI) part. Independently worked on
                          ASP.NET modules.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry animate-box"
                    data-animate-effect="fadeInLeft"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Education Details</h2>
                        <p>
                          I have completed my graduation in Information
                          Technology and mastered the same from the University
                          of Mumbai. Also, I have completed my schooling from
                          S.M. High School located in Sindhudurg district of
                          Maharashtra.
                        </p>
                      </div>
                    </div>
                  </article>
                  <article
                    className="timeline-entry begin animate-box"
                    data-animate-effect="fadeInBottom"
                  >
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none"></div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
