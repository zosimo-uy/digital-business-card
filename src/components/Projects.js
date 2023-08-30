
import Carousel from 'react-bootstrap/Carousel'
import { proj } from '../data/projects'
import { useState } from 'react';
import  ListGroup  from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Link from './Link';



export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(proj[0]);

    const handleSelect = (selectedIndex) =>{
        setSelectedProject(proj[selectedIndex])
    }

    const myProjects = proj.map((item, index) => (
        <Carousel.Item key={index}>
            <img src={require(`../images/${item.coverImg}`)} className='object-fit-cover d-block w-100' alt='Project Cover'/>
        </Carousel.Item>
    ));

    const myTechStack = selectedProject.stack.map((stack, index) => (
          <ListGroupItem 
          className='border-0 me-auto text-center p-1 fw-semibold bg-transparent'
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

            <ListGroup 
            variant='flush' 
            horizontal="sm"
            className='my-2 flex-wrap'
            >
            {myTechStack}
            </ListGroup>
        </div>
        <Carousel 
            style={{maxWidth: "34rem"}}
            onSelect={handleSelect}
            activeIndex={proj.indexOf(selectedProject)}
            className=''>
            {myProjects}
        </Carousel>
    </div>
    )
}