
import Carousel from 'react-bootstrap/Carousel'
import { proj } from '../data/projects'
import { useState } from 'react';
import  ListGroup  from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Link from './Link';
import Row from 'react-bootstrap/Row'


export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(proj[0]);

    const handleSelect = (selectedIndex) =>{
        setSelectedProject(proj[selectedIndex])
    }

    const myProjects = proj.map((item, index) => (
        <Carousel.Item key={index}
        className='p-2'>
            <img src={require(`../images/${item.coverImg}`)} className='object-fit-cover d-block w-100 border rounded-2' alt='Project Cover'/>
        </Carousel.Item>
    ));

    const myTechStack = selectedProject.stack.map((stack, index) => (
          <ListGroupItem 
          className='border-0 text-center p-1 fw-medium bg-transparent'
          key={index}>
            <p
            className='p-2 border rounded-3' 
            >
            {stack}
            </p>
          </ListGroupItem>
      ));

    return (
    <div>
        <h3 className=''>Projects</h3>
        <div>
            <h2 className="project-title fw-bold">
            {selectedProject.project}
            <Link 
                url={selectedProject.url}
                repo={selectedProject.repo}
            />
            </h2>

            <p className="project-role">
            Role: {selectedProject.role}
            <span className='fs-6 badge'>
            {selectedProject.position}
            </span>
            </p>

            <Row xs={1} md={1} sm={1}
            className='p-2'>
            <h4>Technologies</h4>
            <ListGroup 
            variant='flush' 
            horizontal
            className='my-2 flex-wrap'
            >
            {myTechStack}
            </ListGroup>
            </Row>
        </div>
        <Carousel 
            style={{maxWidth: "34rem"}}
            onSelect={handleSelect}
            activeIndex={proj.indexOf(selectedProject)}
            className='border border-2 border-light rounded-4'>
            {myProjects}
        </Carousel>
    </div>
    )
}