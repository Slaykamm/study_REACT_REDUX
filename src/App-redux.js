import React from 'react';
import { connect } from 'react-redux'



const ReduxApp = (props) => {

    console.log("test", props)

    return (

        <div>
            
        </div>
    );
};



export default connect(
    //mapStateToProps
    state => ({testStore: state}),

    //mapDispatchToProps
    dispatch => ({})
)(ReduxApp)