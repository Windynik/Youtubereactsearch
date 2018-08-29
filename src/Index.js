import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import ytsearch from 'youtube-api-search';
import VideoList from './Components/Video_List';
import SearchBar from './components/Search_bar';
import VideoDetails from './Components/Video_details';
import _ from 'lodash';
const API_KEY="AIzaSyDgWabrbqYF1ZMHGrQRk0l5k6xGkx0H4Gk";


class App extends Component
{
    constructor(props){
        super(props);
        this.state=
        {
            videos:[],
            selectedVideo:null
        
        };
       
       
        
            ytsearch(
                {key:API_KEY,term:"Welcome to Youtube!"}
            ,
             (data)=>{this.setState({videos:data,selectedVideo:data[0]})}   
            );
        
    }
    videosearch(term){
        ytsearch(
            {key:API_KEY,term:term}
        ,
         (data)=>{this.setState({videos:data})}   
        );
    }
    
    render(){
        const videosearch = _.debounce((term)=>{this.videosearch(term)},300);          //gives a 300 miliseconds delay
        return <div>
       <SearchBar OnSearchTermChange ={ videosearch }/>
       <VideoDetails video = {this.state.selectedVideo}/>
       <VideoList 
       onSelectedVideo={selectedVideo=>this.setState({selectedVideo})}
       videos={this.state.videos} />              
    </div>;
    }
    
}
//passing information to child component.
/*Calling the search bar component at line 12.*/
ReactDOM.render(<App></App>,document.querySelector('.container'));  //Or <App /> which is a self closing tag and then puts it in the HTML container div