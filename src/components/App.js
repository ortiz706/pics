import React from 'react';
import Axios from 'axios';
import Searchbar from './SearchBar';
import axios from 'axios';


class App extends React.Component {

    state = {images: [] }; 

    onSearchSubmit = async (term) => {
        const response = await axios.get('https://api.unsplash.com/search/photos',{
                params:{ query: term },
                headers:{
                    Authorization: 'Client-ID PqGubWZCrZJH_w5rOhspe_HBLsJs_mt-sQRzgpPKjEM'
                }
        });

        this.setState({images: response.data.results});
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <Searchbar onSubmit={this.onSearchSubmit}/>
                Found: {this.state.images.length} images
            </div>
        );
    }
}


export default App;

