import React from 'react';

export default class Header extends React.Component {
    constructor(props){
        super(props)
            this.state={
                count:0
            }
        
    }
    // For counter
    // increase(){
    //     this.setState({
    //         count : this.state.count +1
    //     });
    // }
    render(){
        return(
            <header>
                <h1 className='task-header'>Task Tracker</h1>
            </header>
        )
    }
}

