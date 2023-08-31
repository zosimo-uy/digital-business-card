import { ListGroupItem } from 'react-bootstrap'
import logo from '../images/hero.jpg'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Link from './Link'
import { user } from '../data/user'

export default function Hero(props){

  const webLinks = user[0].web;
    
    const webMap = webLinks.map((webItem) => (
      <ListGroupItem className='border-0 bg-transparent'>
        <Link 
          key={webItem.id}
          linkedIn={webItem.linkedIn}
          gitHub={webItem.gitHub}
          mailTo={webItem.mailTo}
        />
      </ListGroupItem>
      
    ))

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
          {webMap}
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