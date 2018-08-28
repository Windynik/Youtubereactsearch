import React,{Component} from 'react';

// const searchBar = () =>{

//     return <input ></input>;
// };
class searchBar extends Component{              // or extends React.Component. its the name! just syntactical sugar :D
    constructor (props)
    {
        super(props);
        this.state={term:''};
    }
    render(){
        
        return( <div className="search-bar">
            <input
             value={this.state.term}
             onChange={event=>this.onInputChange(event.target.value)} />
             
         </div>)
    }
onInputChange(term) 
{
    this.setState({term});
    this.props.OnSearchTermChange(term);
}
}

export default searchBar;
