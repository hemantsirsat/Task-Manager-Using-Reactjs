import React from 'react';
import Taskdisplay from './Taskdisplay.js';

export default class Taskinput extends React.Component{
    constructor(props){
        super(props)
            this.state={
                name:'',
                description:'',
                task:[]
            }
    }
    handlenameChange=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
    handledescriptionchange=(event)=>{
        this.setState({
            description:event.target.value
        })
    }
    handlesubmit=(event)=>{
        // item:{event.target.name,event.target.description}
        this.setState({
            task:[...this.state.task,{name:this.state.name,description:this.state.description}]
        })

        event.preventDefault()
    }
    handleremove=(item)=>{
        this.setState({
            task: this.state.task.filter((i)=>i.name!=item.name)
        })
    }
    render(){
        return(
            <div className='myForm'>
                <form onSubmit={this.handlesubmit}>
                    <label className='attribute'>
                        Task Name
                        <input type='text' name='name' className='name' value={this.state.name} onChange={this.handlenameChange}/>
                    </label>
                    <label className='attribute'>
                        Task Description
                        <textarea type='text' name='description' className='description' value={this.state.description} onChange={this.handledescriptionchange}/>
                    </label>
                    <input type='submit' className='submitbtn' value="Add task" />
                </form>
                {this.state.task.map((item)=>{
                    return(
                        <div className='individual-task'>
                            <Taskdisplay 
                            title={item.name}
                            description={item.description}
                            />
                            <button className='mark-as-read' onClick={()=>this.handleremove(item)}>Done</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}