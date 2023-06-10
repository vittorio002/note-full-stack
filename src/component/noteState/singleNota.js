import React, { Component } from 'react';
import { connect } from 'react-redux';
import SingleId from './singleId';

class SingleNota extends Component {
    handleModify = (change, id, nome) =>{
        this.props.changeState(change, id, nome)

    } 

    render(){
        const { notes } = this.props;

        return (
            <>  
              <SingleId
                key={notes.id}
                notes={notes}
                onModify={this.handleModify}
              />
           
            </>
        );
    }
}
 
const mapStateToProps = (state) => {
    return{
        notes: state.notes
    }

}

const mapDispatchToProps = (dispatch) => {
    return{
        changeState : (change, id, nome) => {dispatch({type: 'CHANGE_STATE', change: change, id: id, nome: nome})},
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleNota);