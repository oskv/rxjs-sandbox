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
    const { block } = this.props;
    const className = this.props.activeBlock.id === block.id ? 'active' : '';
    return (
      <div className={`block-wrapper ${className}`} onClick={this.select} >
        { block.type === 'text' && <Text block={block} />}
      </div>
    )
  }

  select() {
    const { block, dispatch } = this.props;
    dispatch(setActiveBlock(block));
  }
}

const mapStateToProps = state => ({
  activeBlock: state.activeBlock,
});

export default connect(mapStateToProps)(BlockWrapper);