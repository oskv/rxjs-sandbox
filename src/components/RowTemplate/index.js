import React, {PureComponent} from 'react';
import Grid from '@material-ui/core/Grid';

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
      <Grid  container className='row-template'>
      { this.columns.map((column, i) =>
          <Grid key={i} item xs={this.getWidth(column.width)}>col</Grid>
      )}
      </Grid>
    );
  }
}