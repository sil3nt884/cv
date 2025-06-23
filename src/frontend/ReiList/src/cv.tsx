import './App.css'

const CV = () => {
    return (
        <>
            {/* Main CV Content */}
            <div className="container" id="cv-content">
                {/* Header */}
                <h1 style={{ color: '#1959A8', fontSize: '22px', marginBottom: '4px' }}>Ricky Luu</h1>
                <div className="subtitle" style={{ color: '#666', fontSize: '12px', marginBottom: '24px' }}>
                    Software Developer &bull; London, UK <br />
                    <a href="mailto:ricky.luu911@gmail.com">ricky.luu911@gmail.com</a> &bull; 07375039206 &bull; GitHub: https://github.com/sil3nt884
                </div>

                {/* Profile */}
                <div className="section">
                    <div className="section-title" style={{ color: '#1959A8', fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>Profile</div>
                    <p style={{ fontSize: '13px' }}>
                        A software developer with experience across the entire stack — from cloud infrastructure and load balancers to front-end and Node.js. Strong drive to learn and apply new technologies. Practical experience with Kubernetes, container architectures, Java, SQL, JavaScript, and DevOps. Holds a BSc in Computer Science.
                    </p>
                </div>

                {/* Experience */}
                <div className="section">
                    <div className="section-title" style={{ color: '#1959A8', fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>Experience</div>

                    <div className="item">
                        <div>
                            <span className="item-title" style={{ fontWeight: 'bold' }}>AND Digital</span> – Developer
                            <span className="item-date" style={{ float: 'right', color: '#666', fontSize: '10px' }}>2020 – Present</span>
                        </div>
                        <ul>
                            <li>Developed backend for AND Digital's e-commerce bootstrap product</li>
                            <li>Worked with AWS Lambdas and Serverless Framework</li>
                            <li>Built and maintained CRM systems for clients</li>
                            <li>Worked with PostgreSQL and GraphQL</li>
                        </ul>
                        <p style={{ fontWeight: 'bold', color: '#1959A8', marginTop: '8px', marginBottom: '4px' }}>Responsibilities:</p>
                        <ul>
                            <li>Developed and maintained backend services using Node.js and TypeScript</li>
                            <li>Implemented RESTful APIs and GraphQL endpoints</li>
                            <li>Collaborated with cross-functional teams to deliver high-quality software solutions</li>
                            <li>Participated in code reviews and contributed to team knowledge sharing</li>

                          </ul>
                    </div>

                    <div className="item">
                        <div>
                            <span className="item-title" style={{ fontWeight: 'bold' }}>MailOnline</span> – Developer
                            <span className="item-date" style={{ float: 'right', color: '#666', fontSize: '10px' }}>2019 – 2020</span>
                        </div>
                        <ul>
                            <li>Built ETL pipelines in Node.js to move data between S3 and Real-Time Analytics (Apache Druid, Turnilo)</li>
                            <li>Contributed to commercial JavaScript code for ad rendering</li>
                            <li>Built POCs for picture-in-picture ad display concepts</li>
                            <li>Maintained Kubernetes clusters and deployed Docker containers via Docker Cloud</li>
                            <li>Built and managed EKS integration clusters and transformed data using Kafka Streams and KSQL</li>
                        </ul>
                        <p style={{ fontWeight: 'bold', color: '#1959A8', marginTop: '8px', marginBottom: '4px' }}>Responsibilities:</p>
                        <ul>
                            <li>Developed and maintained ETL pipelines using Node.js</li>
                            <li>Collaborated with data engineering teams to ensure data integrity and availability</li>
                            <li>Participated in the design and implementation of ad rendering solutions</li>
                            <li>Contributed to the maintenance and optimization of Kubernetes clusters</li>
                        </ul>
                    </div>

                    <div className="item">
                        <div>
                            <span className="item-title" style={{ fontWeight: 'bold' }}>MailOnline</span> – Application Support Engineer
                            <span className="item-date" style={{ float: 'right', color: '#666', fontSize: '10px' }}>2016 – 2019</span>
                        </div>
                        <ul>
                            <li>Supported Facebook Instant Articles and internal content tools</li>
                            <li>Monitored Linux production servers and load balancers</li>
                            <li>Resolved queries requiring Oracle DB updates</li>
                            <li>Created HTML/JavaScript snippets for specialized use cases</li>
                        </ul>
                        <p style={{ fontWeight: 'bold', color: '#1959A8', marginTop: '8px', marginBottom: '4px' }}>Responsibilities:</p>
                        <ul>
                            <li>Provided technical support for Facebook Instant Articles and internal content management systems</li>
                            <li>Monitored and maintained Linux production servers and load balancers</li>
                            <li>Resolved database-related queries and performed updates on Oracle DB</li>
                            <li>Developed HTML/JavaScript snippets for various use cases</li>
                        </ul>
                    </div>
                </div>

                {/* Education */}
                <div className="section">
                    <div className="section-title" style={{ color: '#1959A8', fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>Education</div>
                    <div className="item">
                        <span className="item-title" style={{ fontWeight: 'bold' }}>BSc in Computer Science</span>, Middlesex University
                        <span className="item-date" style={{ float: 'right', color: '#666', fontSize: '10px' }}>2011 – 2015</span>
                        <br />
                        <small>
                            Key Modules: Operating Systems & Architecture (First Class), Object-Oriented Software in Java (First Class), Distributed & Mobile Game Dev (First Class)
                        </small>
                    </div>
                </div>

                {/* Skills */}
                <div className="section">
                    <div className="section-title" style={{ color: '#1959A8', fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>Technical Skills</div>
                    <ul className="skills-list">
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>TypeScript</li>
                        <li>Java</li>
                        <li>React</li>
                        <li>SQL</li>
                        <li>GraphQL</li>
                        <li>AWS (EKS, Lambda)</li>
                        <li>Kafka</li>
                        <li>KSQL</li>
                        <li>Docker</li>
                        <li>Kubernetes</li>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>

                {/* Languages */}
                <div className="section">
                    <div className="section-title" style={{ color: '#1959A8', fontWeight: 'bold', fontSize: '14px', marginBottom: '10px' }}>Languages</div>
                    <ul className="info-list">
                        <li>English (Fluent)</li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CV;
