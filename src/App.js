
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  Container  from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Hero from './components/Hero';
import {user} from './data/user'
import Skills from './components/Skills';
import Projects from './components/Projects';

// https://github.com/pinkdollar123/digital-business-card.git


function App() {
  const hero = user.map(item => {
    return (
      <Hero 
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <Container className='min-vh-100 mt-5 mb-5'>
      <Row>
        <Col md sm={6} 
        className='d-flex justify-content-center align-items-center '>
          {hero}
        </Col>
        <Col md sm={6} 
        className=''>
          <Row >
            <Col>
            <Skills />
            <Projects />
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
