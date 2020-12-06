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
    response.data.components.map((x) => {
      if (x.name !== "Visit www.githubstatus.com for more information") statusArr.push(x.status);
    })

    console.log(statusArr);
    this.setState({
      status: statusArr
    })

    let index = 0;
    for (let e of document.getElementById('status-body').children) {
      let div1 = e.children[0].children[1];
      let div2 = e.children[1].children[1];
      if (statusArr[index] === "operational" && div1.classList.contains('operational')===false)
        div1.classList.toggle('operational');
      if (statusArr[index] === "operational" && div2.classList.contains('operational')===false)
        div2.classList.toggle('operational');
      index += 2;
    }

    this.forceUpdate();
    // document.getElementById('status-body').children[0].children[0];
  }

  render() {
    return (
      <div id="App">
        <header>GitHub Status</header>
        <div id="status-body">
          <div>
            <Status name={this.state.name[0]} status="operational" />
            <Status name={this.state.name[1]} status="operational" />
          </div>
          <div>
            <Status name={this.state.name[2]} status="operational" />
            <Status name={this.state.name[4]} status="operational" />
          </div>
          <div>
            <Status name={this.state.name[5]} status="operational" />
            <Status name={this.state.name[6]} status="operational" />
          </div>
          <div>
            <Status name={this.state.name[7]} status="operational" />
            <Status name={this.state.name[8]} status="operational" />
          </div>
        </div>
        <div>
          <button onClick={(e) => { this.handleClick() }}>Refresh</button>
        </div>

      </div>
    );
  }
}