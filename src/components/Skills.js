import  ListGroup  from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
// import Button from 'react-bootstrap/Button'
import {user} from '../data/user'
// import { useState } from 'react';

export default function Skills(){
    // const [show, setShow] = useState(true)

    // function handleChange(){
    //     setShow(prevState => !prevState)
    // }

    const skills = user[0].skills;
    // const techStacks = user[0].techStack;
    
    const mySkills = skills.map((skill, index) =>  
         <ListGroup.Item 
         key={index}
         className='border-0 me-auto text-center p-1 fw-semibold bg-transparent'>
         <p className='p-2 border rounded-3'>{skill}</p>
         </ListGroup.Item>
    )

    // const myTechStacks = techStacks.map((techs, index) =>  
    //      <ListGroup.Item 
    //      key={index}
    //      className='border rounded-3 text-center p-2 fw-medium bg-transparent m-1 text-white'>
    //      {techs}
    //      </ListGroup.Item>
    // )

    return(
        <Card style={{ width: '22rem' }} className='border-0 bg-transparent'>
            
            {/* <Button 
            onClick={handleChange}
            className='accents w-auto fs-6'>
            Show: {!show ? 'Skills' : 'Tech-Stack'}
            </Button> */}

            <Card.Title className='p-2 fw-semibold fs-3 text-white'>
            {/* {show ? "Skills" : "Tech-Stack"} */}
            Skills:
            </Card.Title>

            <ListGroup horizontal='sm' className='list-group-flush flex-wrap'>
            {/* {show ? mySkills : myTechStacks} */}
            {mySkills}
            </ListGroup>
        </Card>
    )
}