import React from 'react';
import Axios from 'axios';
import Searchbar from './SearchBar';


class App extends React.Component {

    onSearchSubmit(term){
        console.log(term);
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <Searchbar onSubmit={this.onSearchSubmit}/>
            </div>
        );
    }
}


export default App;

