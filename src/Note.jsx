import React, { useState } from 'react';
import { Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import AddIcon from '@material-ui/icons/Add';
import './Note.css'
const Note = (props) => {
    const [data, setData] = useState({
        title: "",
        note: "",
    })
    const InputEvent = (event) => {

        const { name, value } = event.target;
        setData((oldvalues) => {
            return {
                ...oldvalues,
                [name]: value,

            };

        });


    }
    const addEvent = () => {
        props.notefunction(data);
        setData({
            title: "",
            note: "",
        });
    }
    return (
        <div className="main_div" >
            <Form className="form">
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Control name="title" type="text" placeholder="Title" className="title" maxlength="20" onChange={InputEvent} value={data.title} />
                    <Form.Control name="note" as="textarea" rows={4} className="note" maxlength="150" placeholder="Wrte a note..." onChange={InputEvent} value={data.note}  >


                    </Form.Control>

                </Form.Group>


            </Form>
            <div className="btn_holder">
                <button className="btn add_button" onClick={addEvent}>
                    <AddIcon></AddIcon>
                </button>
            </div>

        </div>
    )
}

export default Note;