import React, { Component } from "react";
import Navigation from "./Components/Navigation";
import Clarifai from 'clarifai';
import Logo from "./Components/Logo/Logo";
import ImageLinkForm from "./Components/ImageLinkForm/ImageLinkForm";
import Rank from "./Components/Rank/Rank";
import Particles from "react-particles-js";
import FaceRecognition from "./Components/FaceRecognition/FaceRecognition";

import "./App.css";

const app = new Clarifai.App({
    apiKey: '510a96a14ebc4bb8b9d09911ed92c016'
   });

const particlesOptions = {
    particles: {
        number: {
            value: 200,
            density: {
                enable: true
            }
        }
    }
};

class App extends Component {
    constructor() {
        super();
        this.state = {
            input: "",
            imageURL: ""
        };
    }

    onInputChange = event => {
        this.setState({input: event.target.value});
    };

    onButtonSubmit = () => {
       this.setState({
           imageURL: this.state.input
       })
        app.models
            .predict(
                Clarifai.COLOR_MODEL,
                this.state.input
            )
            .then(
                function(response) {
                    console.log(response)
                },
                function(err) {
                    // there was an error
                }
            );
    };

    render() {
        return (
            <div className="App">
                <Particles className="particles" params={particlesOptions} />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm
                    onInputChange={this.onInputChange}
                    onButtonSubmit={this.onButtonSubmit}
                />
                <FaceRecognition imageURL ={this.state.imageURL} />
            </div>
        );
    }
}

export default App;
