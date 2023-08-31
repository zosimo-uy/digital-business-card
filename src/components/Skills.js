import  ListGroup  from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import {user} from '../data/user'

export default function Skills(){

    const skills = user[0].skills;
    // const techStacks = user[0].techStack;
    
    const mySkills = skills.map((skill, index) =>  
         <ListGroup.Item 
         key={index}
         className='border-0 text-center p-1 fw-medium bg-transparent'>
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
        <Card style={{ width: '22rem' }} className='border-0 bg-transparent p-2'>
            
            {/* <Button 
            onClick={handleChange}
            className='accents w-auto fs-6'>
            Show: {!show ? 'Skills' : 'Tech-Stack'}
            </Button> */}

            <Card.Title className='p-2 fw-semibold fs-3 text-white'>
            {/* {show ? "Skills" : "Tech-Stack"} */}
            Skills:
            </Card.Title>

            <Row md={1} sm={1}>
                <ListGroup 
                    className='flex-wrap'
                    variant='flush'
                    horizontal>
                    {/* {show ? mySkills : myTechStacks} */}
                    {mySkills}
                </ListGroup>
            </Row>
        </Card>
    )
}