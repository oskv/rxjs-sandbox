import React, { PureComponent } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';

export default class CommonBlockProperty extends PureComponent {

  constructor(props) {
    super(props);
    this.changeMargin = this.changeMargin.bind(this);
    this.state = {
      value: 0,
    };
  }

  render() {
    //const { block } = this.props;
    const { value } = this.state;

    return (
      <div className='common-properties'>
        <Typography variant="body2" className='label'>Padding</Typography>
        <Slider
          min={0}
          max={30}
          step={1}
          value={value}
          aria-labelledby="label"
          className='slider'
          onChange={this.changeMargin}
        />
      </div>
    )
  }

  changeMargin(event, value) {
    this.setState({ value });
  }
}