import React from 'react'
import PropTypes from 'prop-types'
class Home extends React.Component{
    constructor(props){
        super()
        console.log(props)
    }
    render(){
        return(
        <div>
            <h3>{this.props.name}</h3>
        </div>
        )
    }
}

Home.propTypes={
    name:PropTypes.number
}

export default Home