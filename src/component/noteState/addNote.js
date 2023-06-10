function addNote(props) {
    return ( 
        <div className="container is-fluid ">
        <div className="notification is-primary">
            <button onClick={props.onAddNote} className='button is-rounded button is-link is-outlined is-small '>add note</button>
            
        </div>
    </div>
     );
}

export default addNote;