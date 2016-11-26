import React, { Component } from 'react';
import logo from './logo.svg';
import map from 'lodash/map';
import './App.css';

import theme from 'theme';

import RadioButtons from './components/RadioButton/RadioButtons.jsx';
import PanelContainer from './components/Panel/PanelContainer.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this._handleRadioClick = this._handleRadioClick.bind(this);

    this.state = {
      radioConfig: [
        { label: 'Apple', isActive: true },
        { label: 'Banana', isActive: false },
        { label: 'Pear', isActive: false },
      ]
    }
  }

  _handleRadioClick(meta){
    const radioConfig = map(this.state.radioConfig, (config, idx) => ({
      label: config.label,
      isActive: meta.id === idx,
    }));
    this.setState({ radioConfig })
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: theme.globalBackgroundColor,
          color: theme.globalTextColor,
        }}
        className="App"
      >
        <PanelContainer
          headerComponent={<div>Radio Buttons</div>}
        >
          <div> 
            <RadioButtons onClick={this._handleRadioClick} config={this.state.radioConfig} />
          </div>
        </PanelContainer>
      </div>
    );
  }
}

export default App;
