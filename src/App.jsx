import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DateDay from './DateDay';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import {Form} from 'react-bootstrap'
import ListItem from './ListItems';
import InputButton from './InputButton';


const App = () => {

    const [isActive , setIsActive] = useState(false) ;

    const [inputList , setInputList] = useState("");

    const [Items , setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };

    const addItemToList = () =>{
        setItems((oldItems) =>{
            return [...oldItems,inputList]
        })
        setInputList("");
    };

    const deleteItem = (id) =>{
        console.log("Done");

        setItems((oldItems) => {
            return oldItems.filter((arrElem,index)=>{
                return index !== id ;
            })
        })
    };

    return <>
        <Container fluid className="main_div">
            <Row>
                <h1>ToDo List</h1>
            </Row>
            <Row>
                <Col className="center_div">
                    <Row className="py-5 px-2">
                        <Col className="todo_date">
                            <DateDay />
                        </Col>
                        <Col>
                            <InputButton setActive={setIsActive} activeStatus={isActive} />
                        </Col>
                        { isActive &&   

                            <div className="input_panel">
                                <Form>
                                    <input type="text" placeholder="Add a Item" className="todo_input" 
                                    onChange={itemEvent}
                                    value={inputList}
                                    />
                                    <Button className="btn-success" onClick={addItemToList} >Add</Button>
                                </Form>
                            </div>
                        }
                    </Row>
                    <ol>
                    {
                        Items.map( (itemValue , index) =>{
                            return <ListItem 
                            key={index} 
                            id={index} 
                            item={itemValue} 
                            onSelect={deleteItem}
                            />
                        })
                    }
                    </ol>
                </Col>
            </Row>
        </Container>
    </>
};

export default App;