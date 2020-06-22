import React , { useState, Component } from 'react';
import axios from "axios";
import './Styleaxis.css';
import Button from '@material-ui/core/Button';


const API = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

class Quotegen extends Component {

    state = {
        quotes: null,
        randomQuotes : null
    }


    componentDidMount() {
    
        fetch(API)
        .then(response => response.json())
        .then(data => this.setState({
            quotes: data.quotes
        }));
        
    }

    Checker = () => {
        return(console.log(this.state.quotes) );


    }

    randomQuoteHandler = () => {

        const randNumb =  Math.floor(Math.random() * this.state.quotes.length);
        const randomQuot = this.state.quotes[randNumb];
        this.setState({randomQuotes : randomQuot})
        console.log(randomQuot);
    }
    

render()
{

return (
<div className="container">
    <div class="ui card">
        <div class="content">
            
            <div class="header">
                {this.state.randomQuotes !== null && this.state.randomQuotes.quote}
            </div>
            
                <div class="description">
                    {this.state.randomQuotes !== null && this.state.randomQuotes.author} 
                </div>

      <br />
        
    <Button variant="contained" className="buttonstyle"  onClick ={this.randomQuoteHandler }> Random Quotes </Button>
        
        </div>
    </div>
</div>

);

}


}



export default Quotegen;