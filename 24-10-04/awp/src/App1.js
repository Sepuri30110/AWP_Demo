import { Component } from "react";
class App1 extends Component{
    constructor(){
        super();
        this.state={
            data:[
                {name:"CVR"},
                {name:"DS-A"}
            ]
        }
    }
    render(){
        return (
            <div>
                <SectionName/>
                <ul>
                    {
                       
                        this.state.data.map((item,index)=>{
                            return <List key={index} data={item}/>
                        })
                    }
                </ul>

            </div>
        )
}
}
    class SectionName extends Component{
    render(){
        return(
            <div>
                <h1>SectionName</h1>
            </div>
        )
    }
}
    class List extends Component{
        render(){
            return(
                 <li>{this.props.data.name}</li>
                
            
            )
        }
    }
export default App1;
