import { ListGroupItem } from 'react-bootstrap'
import logo from '../images/hero.jpg'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

export default function Hero(props){
    return (
    <Card style={{ width: '22rem' }} className='border-0 bg-transparent'>

      <Card.Body style={{width: '16rem'}} className='mx-auto d-block'>
        <Card.Img variant="top" src={logo} className='img-thumbnail rounded-circle' />
      </Card.Body>

      <Card.Body className='text-center'>

        <Card.Title 
        className='hero--name fw-bold display-6 text-white'>
        {props.name}
        </Card.Title>

        <Card.Text 
        className='hero--profession fs-4 hero--text'>
          {props.profession}
        </Card.Text>

      </Card.Body>

        <ListGroup 
        horizontal 
        className="list-group-flush justify-content-center border-0 ">
            
            <ListGroupItem className='border-0 bg-transparent'>
            <a href='https://www.linkedin.com/in/zosimouy21/' 
            className='fs-2 ' 
            target='_blank' 
            rel="noreferrer">
            <i className='bi bi-linkedin'></i>
            </a>
            </ListGroupItem>

            <ListGroupItem className='border-0 bg-transparent'>
            <a href='https://github.com/pinkdollar123' 
            target='_blank' rel="noreferrer" 
            className='fs-2'>
            <i className="bi bi-github"></i>
            </a>
            </ListGroupItem>

            <ListGroupItem className='border-0 bg-transparent'>
            <a href='mailto:zorscode@gmail.com' 
            target='_blank' rel="noreferrer" 
            className='fs-2'>
            <i className="bi bi-envelope-at-fill"></i>
            </a>
            </ListGroupItem>

        </ListGroup>

      <Card.Body>
        <Card.Title 
        className='h1 fw-semibold text-white'>
        About Me</Card.Title>
        
        <Card.Text  
        className='fs-6'>
        {props.about}
        </Card.Text>
      </Card.Body>

    </Card>
    )
}