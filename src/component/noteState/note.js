import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import AddNote from './addNote';


class Note extends Component {
    handleAddNote = () => {
        this.props.addNote()
    }

    handleDelete = (id) => {
        this.props.deleteNote(id)
    }
    render() { 

        const { notes } = this.props;
        const card = 
        notes.map(note=>{
           return(     
            <div className="container is-fluid " key={note.id}>
                <div className="notification is-primary">
                    {note.nome}
                    <button onClick={()=> this.handleDelete(note.id)} style={{float: "right"}} className='button is-rounded button is-danger is-outlined is-small '> delete</button>
                    <Link to={'/' + note.id}><button style={{float: "right"}} className='button is-rounded button is-link is-outlined is-small '>see</button></Link>
                </div>
                <br/>
            </div>
            )})
        return (
            <>
                <h1 className='title' style={{textAlign:"center"}}>Note</h1>
                {card}
                <AddNote
                    notes={notes}
                    onAddNote={this.handleAddNote}
                />
            </>
        );
    }
}
 
const mapStateToProps = (state) => {
    return{
        notes: state.notes,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addNote : () => {dispatch({type: 'ADD_NOTE'})},
        deleteNote : id => {dispatch({type: 'DELETE_NOTE', id : id})}
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(Note);