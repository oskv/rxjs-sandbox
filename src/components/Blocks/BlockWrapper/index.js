import React, { PureComponent } from 'react'
import Text from '../Text';
import './styles.css'
import { connect } from "react-redux";
import { setActiveBlock } from "../../../actions";

class BlockWrapper extends PureComponent {
  constructor(props) {
    super(props);
    this.select = this.select.bind(this);
  }

  render() {
    const { options } = this.props;
    const className = this.props.activeBlock.id === options.id ? 'active' : '';
    return (
      <div className={`block-wrapper ${className}`} onClick={this.select} >
        { options.type === 'text' && <Text options={options} />}
      </div>
    )
  }

  select() {
    const { options, dispatch } = this.props;
    dispatch(setActiveBlock(options.id));
  }
}

const mapStateToProps = state => ({
  activeBlock: state.activeBlock,
});

export default connect(mapStateToProps)(BlockWrapper);