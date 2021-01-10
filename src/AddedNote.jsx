import React from 'react';
import './AddedNote.css'
import { Card } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
const AddedNote = (props) => {
    const deleteNote = () => {
        props.ondelete(props.id);
    }
    return (
        <>
            <Card style={{ width: '16rem' }} className="card overflow:hidden align-items-stretch">
                <Card.Body>
                    <Card.Title className="title">{props.title}</Card.Title>
                    <Card.Text className="cardText ">
                        {props.note}
                    </Card.Text>

                    <Card.Link href="#" className="delete row " onClick={deleteNote}>
                        <HighlightOffIcon></HighlightOffIcon>

                    </Card.Link>

                </Card.Body>
            </Card>
        </>
    )
}

export default AddedNote;