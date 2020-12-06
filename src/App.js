import React from "react";
import { Status } from './Status';
import './App.scss';
import axios from "axios";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [
        "Git Operations",
        "API Requests",
        "Webhooks",
        "null",
        "Issues",
        "Pull Requests",
        "GitHub Actions",
        "GitHub Packages",
        "GitHub Pages"
      ],
      status: [

      ]
    }
  }

  async handleClick() {
    const response = await axios.get('https://kctbh9vrtdwd.statuspage.io/api/v2/summary.json');
    let statusArr = [];
    response.data.components.map((x) => statusArr.push(
      x.status
    ))

    console.log(statusArr);
    this.setState({
      status: statusArr
    })
  }

  render() {
    return (
      <div id="App">
        <header>GitHub Status</header>
        <div id="status-body">
          <div>
            <Status name={this.state.name[0]}  status={(this.status) ? this.status[0] : "trash"}/>
            <Status name={this.state.name[1]}  status="Operational"/>
          </div>
          <div>
            <Status name={this.state.name[2]}  status="Operational"/>
            <Status name={this.state.name[4]}  status="Operational"/>
          </div>
          <div>
            <Status name={this.state.name[5]}  status="Operational"/>
            <Status name={this.state.name[6]}  status="Operational"/>
          </div>
          <div>
            <Status name={this.state.name[7]}  status="Operational"/>
            <Status name={this.state.name[8]} status="Operational"/>
          </div>
        </div>
        <div>
          <button onClick={(e) => { this.handleClick() }}>Refresh</button>
        </div>

      </div>
    );
  }
}