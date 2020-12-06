import React from "react";

export class Status extends React.Component {
    render() {
        return (
            <div id="status-type">
                <span>
                    {this.props.name}
                </span>
                <span className="operational">
                </span>
            </div>
        )
    }
}