import React from 'react';
import {  Link } from "react-router-dom";
export class User extends React.Component{
    constructor(props){
        super(props)
        console.log('props')
        console.log(props)
       console.log(props.match.params.id)
    }
    render(){
        return(
            <h1>USER</h1>
            // <Link to={`${this.props.match.url}/rendering`}>Rendering with React</Link>
        )
    }
}
export default User