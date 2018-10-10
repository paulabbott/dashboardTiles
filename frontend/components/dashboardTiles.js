import React from "react";
import DashboardTile from "./dashboardTile";

var DashboardTiles = React.createClass({
  renderTitle: function() {
    return <div className="dashboard-tiles-title">{this.props.title}</div>;
  },

  renderItems: function() {
    return (
      <div>
        <div
          className="dashboard-tiles-items clearfix"
          style={{ marginBottom: "2em" }}
        >
          {this.renderDashboardTiles(0, 3)}
        </div>
        <div className="dashboard-tiles-items clearfix">
          {this.renderDashboardTiles(3, 6)}
        </div>
      </div>
    );
  },

  renderDashboardTiles: function(start, end) {
    console.log(start, end);
    console.log("titles=", this.props.tiles);
    console.log("slice=", this.props.tiles.slice(start, end));
    return _.map(this.props.tiles.slice(start, end), tile => {
      return <DashboardTile key={tile._id} tile={tile} />;
    });
  },

  render: function() {
    if (this.props.tiles.length === 0) {
      return null;
    }

    return (
      <div className="dashboard-tiles">
        {this.renderTitle()}
        {this.renderItems()}
      </div>
    );
  }
});

export default DashboardTiles;
