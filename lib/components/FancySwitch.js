import React, {
  PropTypes as PT
} from 'react'

import switchStyles from './switchStyles';

import cs from 'classnames';

import {
  shouldComponentUpdate as scu
} from 'react-addons-pure-render-mixin';

let _id = 0;
function _genID() {
  return _id++;
}

class FancySwitch extends React.Component {

  static propTypes = {
    defaultChecked: PT.bool,

    label: PT.string,
    labelPosition: PT.oneOf(['top', 'right', 'bottom', 'left']),

    effect: PT.oneOf(Object.keys(switchStyles)),

    onChange: PT.func,
    onFocus: PT.func,
    onBlur: PT.func
  }

  static defaultProps = {
    defaultChecked: false,

    label: 'Checkbox label',
    labelPosition: 'left',

    effect: 'echo',

    // no-ops
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {}
  };

  constructor (props) {
    super(props);
    // TODO: performance gains?
    this.shouldComponentUpdate = scu.bind(this);

    // unique id for all instances
    this._id = _genID();

    // TODO: Test if autofocus still works?
    this.state = {
      isFocused: false,
      // Note: resorting to anti pattern of setting inital state from prop
      fiChecked: this.props.defaultChecked
    }

  }

  /**
   * Callback used get our switch's backing input element.
   * @param {DOMElement} c the mounted input created by a switch style
   */
  setRef (c) {
    this._input = c
  }

  onChange (e) {
    // Set focus whenever a user interacts with our switch
    (this._input.focus());
    this.setState({fiChecked: e.target.checked});

    // Inform our parents if needed
    this.props.onChange(e);
  }

  onFocus (e) {
    this.setState({isFocused: true});

    // Inform our parents if needed
    (this.props.onFocus(e));
  }

  onBlur (e) {
    this.setState({isFocused: false});
    // Inform our parents if needed
    (this.props.onBlur(e));
  }

  onMouseDown (e) {
    // Prevent flick of  focus styling due to the focused element switching
    e.preventDefault();
  }

  render () {
    // we pull out values even if not using in this render
    // so we can limit what we pass down in ...otherProps
    const {
      label,
      labelPosition,
      checked: propCheck,
      effect,
      defaultChecked,
      ...otherProps
    } = this.props;
    const {
      isFocused,
      fiChecked
    } = this.state;

    // lock in a value no matter what our internal state is
    const checked = this.props.checked || fiChecked || '';

    const outerCss = cs('fi-switch', 'fi-switch--' + effect, 'fi-switch--label-' + labelPosition, isFocused == true && 'fi-switch--focused', checked == true && 'fi-switch--checked');

    const labelCss = cs([
      'fi-switch__label',
      'fi-switch__label--' + effect
    ]);

    // minimizing id clashes with other code
    const htmlFor = 'fi-switch-id-' + this._id;

    // setting otherProps first so they can be overridden as needed
    const switchProps = {
      ...otherProps,
      htmlFor,
      checked,
      // ES7 binding
      setRef: :: this.setRef,
      onBlur: :: this.onBlur,
      onFocus: :: this.onFocus,
      onChange: :: this.onChange
    }
    // React Template Component
    const switchComponent = switchStyles[effect](switchProps);

    return (
      <label onMouseDown={this.onMouseDown} role="checkbox" aria-labelledby={htmlFor} className={outerCss}>
        <label className={labelCss} aria-label={label} htmlFor={htmlFor}>
          {label}
        </label>
        {switchComponent}
      </label>
    );
  }
}

export default FancySwitch;