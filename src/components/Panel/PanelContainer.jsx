import React from 'react';
import './PanelContainer.scss';

import theme from 'theme';

/**
 * Wrapper component that creates a standard look and feel for all
 * panel components.  Panel in this case means a bordered section of
 * a page.
 *
 * @param {Object} style Style overrides for the built-in styles for the div that
 * wraps the children
 * @param {string|number} [maxWidth='800px'] The maximum width of the wrapper container
 */
const PanelContainer = ({ style, maxWidth, children, headerComponent }) => {
  const containerStyles = {
    maxWidth,
    boxShadow: `0 1px 1px ${theme.panelDropShadowColor}`,
    backgroundColor: theme.panelBackgroundColor,
    border: `1px solid ${theme.panelBorderBolor}`,
  };
  const combinedStyles = Object.assign({}, containerStyles, style);
  return (
    <div style={combinedStyles} className={'panelContainer'}>
      <div
        className={'panelHeader'}
        style={{
          color: theme.panelHeaderTextColor,
          backgroundColor: theme.panelHeaderBackgroundColor,
          borderColor: theme.panelHeaderBorderColor,
        }}
      >
        {headerComponent}
      </div>
      <div className={'panelBody'}>
        {children}
      </div>
    </div>
  );
};

PanelContainer.defaultProps = {
  maxWidth: '800px',
};

PanelContainer.propTypes = {
  maxWidth: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.number,
  ]),
  style: React.PropTypes.object,
  children: React.PropTypes.node.isRequired,
};

export default PanelContainer;
