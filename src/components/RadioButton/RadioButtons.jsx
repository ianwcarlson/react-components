import React, { PropTypes, PureComponent } from 'react';
import './RadioButton.css';
import autoBind from 'react-autobind';
import _ from 'lodash';

import theme from 'theme';

class RadioButton extends PureComponent {
  constructor(props) {
    super(props);
    autoBind(this);
  }

  _handleClick() {
    this.props.onClick({ id: this.props.id });
  }

  render() {
    const { active, label, size } = this.props;
    const innerCircleStyles = {
      transform: active ? 'scale(1)' : 'scale(0)',
      backgroundColor: active ? theme.primaryColor : theme.disabledColor,
    };
    const outerCircleStyles = {
      height: size,
      width: size,
      borderColor: active ? theme.primaryColor : theme.disabledColor,
      border: `1px solid ${active ? theme.primaryColor : theme.disabledColor}`,
    };

    return (
      <div
        onClick={this._handleClick}
        className={'radioButton'}
      >
        <div
          style={outerCircleStyles}
          className={'outerCircle'}
        >
          <div
            style={innerCircleStyles}
            className={'innerCircle'}
          />
        </div>
        <div>
          {label}
        </div>
      </div>
    );
  }
}

RadioButton.propTypes = {
  active: PropTypes.bool,
  onClick: PropTypes.func,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  label: PropTypes.string,
  size: PropTypes.string,
};

RadioButton.defaultProps = {
  size: '20px',
};

const RadioButtons = ({ config, onClick }) => {
  const radioButtons = _.map(config, (radioButton, idx) => (
    <RadioButton
      id={idx}
      key={idx}
      onClick={onClick}
      active={radioButton.isActive}
      label={radioButton.label}
    />
  ));

  return (
    <div className={'radioButtons'}>
      {radioButtons}
    </div>
  );
};

RadioButtons.propTypes = {
  onClick: PropTypes.func.isRequired,
  config: PropTypes.arrayOf(PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
};

export default RadioButtons;
