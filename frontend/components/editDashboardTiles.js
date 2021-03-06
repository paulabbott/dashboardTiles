import React from 'react';
import LP from 'helpers/lp';
import {Form} from 'modules/form';

var EditDashboardTiles = React.createClass({

    render: function() {
        return (
            <div className="edit-dashboard-tiles">
                <Form
                    model={this.props.dashboardTiles}
                    schema={this.props.schema}
                    onUpdate={this.props.onUpdateField}
                    form={{actions:this.props.formActions}}
                    title={"Edit Dashboard Tiles"}
                />
            </div>
        );
    }

});

export default EditDashboardTiles;