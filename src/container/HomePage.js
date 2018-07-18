import React,{Component} from 'react';
import Home from '../component/Home';

class HomePage extends Component {

    constructor(props){
     super(props);
     this.state = {
         value:'Welcome to React'
     }
    }

    render(){
        return (
            <div>
               <Home data={this.state.value}/> 
            </div>
        )
    }

}
export default HomePage;
