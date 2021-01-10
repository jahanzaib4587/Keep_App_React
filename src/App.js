import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';

import 'bootstrap/dist/css/bootstrap.min.css'

import AddedNote from './AddedNote';
const App = (props) => {
  const [addnote, setAddNote] = useState([]);

  const addNote = (data) => {
    setAddNote((olditems) => {
      return [...olditems, data];
    })

  }
  const onDelete = (id) => {
    setAddNote((oldItems) => {
      return oldItems.filter((val, index) => {
        return index !== id;
      })

    })
  }
  return (
    <>
      <Header></Header>
      <Note notefunction={addNote}></Note>
      {/* <Cards></Cards> */}

      <div className="container mx-auto">
        <div className="row  p-2 text-center mx-auto">
          {addnote.map((val, index) => {
            return (
              <AddedNote
                title={val.title}
                note={val.note}
                id={index}
                key={index}
                ondelete={onDelete}
              ></AddedNote>
            )
          })}
        </div>

      </div>

    </>
  )
}

export default App;