import React from 'react';
import { Container, Row, Col, Card, Button, Navbar, Nav } from 'react-bootstrap';
import profileImage from '/Dagi_Girma.jpg';


const Home = () => {
  return (
    <>
      <Container fluid className="p-4">
        <div className="bg-primary text-white text-center rounded-lg p-5 mb-4">
          <h1 className="display-4">Welcome to BudgetWeb!</h1>
          <p className="lead">Your ultimate solution for managing and tracking your finances.</p>
        </div>

        {/* About Me Section */}
        <Row className="my-5">
          <Col md={4} className="d-flex justify-content-center">
            <img src={profileImage} roundedCircle width="300" height="300" />
          </Col>
          <Col md={8}>
            <Card >
              <Card.Body>
                <Card.Title>About Me</Card.Title>
                <Card.Text>
                  Hello, I'm Dagmawi Girma, a dedicated and innovative software engineer with a Bachelor’s degree in Computer Science and a minor in Mathematics. I thrive on tackling complex challenges and pushing the boundaries of technology.

                  My professional journey includes impactful roles as a Software Engineer at Travelers Insurance, where I excelled in developing and maintaining sophisticated full-stack applications. During my tenure as an intern at Travelers Insurance, I was part of the DevOps team, where I gained hands-on experience in optimizing application performance and streamlining development processes.

                  I also contributed to Celigo as a Support Engineer, where I was instrumental in automating processes and refining API configurations to enhance operational efficiency.

                </Card.Text>
                <div className="d-flex gap-2">
                  <Button variant="primary" href="https://drive.google.com/file/d/1KA5cJQtcHFZGpz1fGZH8buzreeQplhbp/view?usp=sharing" target="_blank" rel="noopener noreferrer">View Resume</Button>
                  <Button variant="secondary" href="https://drive.google.com/file/d/1A-RpY8zCOFbD2lZxaIwSXy6DvcHYnsLR/view?usp=sharing" target="_blank" rel="noopener noreferrer">View CV</Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        {/* My Work Section */}
        <Row className="my-5">
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header as="h5">Recent Projects</Card.Header>
              <Card.Body>
                <Card.Title>BudgetWeb App</Card.Title>
                <Card.Text>
                  A full-stack budgeting application that helps users track their expenses and manage their budgets with a modern and user-friendly interface.
                </Card.Text>
                <Button variant="success" href="https://github.com/Dagi-G/Budgeting-App-AWS_Deployed-" target="_blank" rel="noopener noreferrer">View on GitHub</Button>
              </Card.Body>
            </Card>
            <Card className="mb-4">
              <Card.Header as="h5">Autonomous Visual Servoing</Card.Header>
              <Card.Body>
                <Card.Title>Research Project</Card.Title>
                <Card.Text>
                  During my time at Augsburg University, I engineered a system for autonomous robots to detect and diagnose faults, enhancing self-repair capabilities.

                  I designed and implemented a reinforcement learning environment for an RVR robot, using visual servoing techniques to improve navigational accuracy.

                  I conducted experiments across various terrains, analyzed sensory data, and resolved complex hardware and software issues, which increased system reliability and reduced downtime by 30%.
                </Card.Text>
                <Card.Text>
                  <strong>Published Paper:</strong> "Autonomous Visual Servoing with Reinforcement Learning" by Dagmawi Girma and Dr. Amy Larson.
                </Card.Text>
                <Button variant="success" href="https://drive.google.com/file/d/1YBTHat3CuU4o0nhgIEpDPM_RWhCBM3hT/view?usp=sharing" target="_blank" rel="noopener noreferrer">Read Research Paper</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-4">
              <Card.Header as="h5">Technology Stack</Card.Header>
              <Card.Body>
                <Card.Text>
                  <ul>
                    <li><strong>Languages & Front-End:</strong> JavaScript, Python, Java, SQL, React, Bootstrap, Angular, C, HTML, CSS</li>
                    <li><strong >Back-End:</strong> Node.js, Express, REST API</li>
                    <li><strong>Database:</strong> MongoDB, SQL</li>
                    <li><strong>Cloud & DevOps:</strong> AWS, Git, Containers, Jenkins, GitHub Workflows, CI/CD</li>
                    <li><strong>Machine Learning & Computer Vision:</strong> TensorFlow, PyTorch, Reinforcement Learning Libraries, Visual Servoing Techniques</li>
                    <li><strong>Platform Skills:</strong> Salesforce, NetSuite, Jira, Zendesk, MuleSoft, Shopify, Postman, ElasticSearch</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>


        {/* Contact Section */}
        <Row className="text-center py-5">
          <Col>
            <h2>Contact Me</h2>
            <p>Feel free to reach out through the following channels:</p>
            <Button variant="outline-primary" href="https://www.linkedin.com/in/dagmawi-girma-89b6251bb/" target="_blank" rel="noopener noreferrer">LinkedIn</Button>
            <Button variant="outline-secondary" href="https://github.com/Dagi-G" target="_blank" rel="noopener noreferrer">GitHub</Button>
          </Col>
        </Row>

        {/* Footer */}
        <footer className="bg-dark text-white text-center py-3">
          <Container>
            <p>&copy; 2024 Dagmawi Girma. All Rights Reserved.</p>
          </Container>
        </footer>
      </Container>
    </>

  );
};

export default Home;
