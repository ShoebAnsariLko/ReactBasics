import React from 'react';

export class Home extends React.Component{
    constructor(props){
        super(props)
        console.log('props')
        console.log(props)
    }
    render(){
        return(
            <div>Home</div>
        )
    }
}
export default Home