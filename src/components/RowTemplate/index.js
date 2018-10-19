import React, {PureComponent} from 'react';
import './styles.css'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default class RowTemplate extends PureComponent {
  constructor(props) {
    super(props);
    this.columns = props.columns;
  }

  getWidth = (width) => {
    return  Math.round(width / 100 * 12);
  };

  render() {
    return (
      <Paper className="row-template">
        <Grid  container className='grid' justify="center">
        { this.columns.map((column, i) =>
            <Grid key={i} item xs={this.getWidth(column.width)}>
              <span className="col"/>
            </Grid>
        )}
        </Grid>
      </Paper>
    );
  }
}