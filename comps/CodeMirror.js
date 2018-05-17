import { Component } from 'react'; 
import cm from 'codemirror'; 
import { getKey, isCtrlKey } from '../util/keys'; 

if(typeof window !== 'undefined') {
  require('codemirror/mode/markdown/markdown'); 
}
export default class CodeMirror extends Component {
  handleChange = () => {
    if(!this.editor) return; 
    const value = this.editor.getValue();
    if(value !== this.props.value) {
      this.props.onChange && this.props.onChange(value);
      if(this.editor.getValue() !== this.props.value) {
        if(this.state.isControlled) {
          this.editor.setValue(this.props.value);
        } else {
          this.props.value = value;
        }
      }
    }
  }
  checkSubmit = (cm, e) => {
    const key = getKey(e); 
    if(isCtrlKey(key)) {
      this.ctrlKey = true; 
    } else if(key === 13 && this.ctrlKey) {
      this.props.onSubmit(); 
    } 
  }
  handleKeyUp = (cm, e) => {
    if(isCtrlKey(getKey(e))) this.ctrlKey = false; 
  }
  componentDidMount() {
    if(typeof window === 'undefined') return;
    this.editor = cm.fromTextArea(this.textarea, this.props.options); 
    this.editor.on('change', this.handleChange); 
    if(typeof this.props.onSubmit === 'function') {
      this.editor.on('keydown', this.checkSubmit);
      this.editor.on('keyup', this.handleKeyUp); 
      this.setupSubmitKey = true; 
    }
  }
  componentWillUnmount() {
    if(this.setupSubmitKey) {
      this.editor.off('keydown', this.checkSubmit); 
      this.editor.off('keyup', this.handleKeyUp); 
      this.setupSubmitKey = false; 
    }
  }
  componentDidUpdate() {
    if(!this.editor || !this.props.value) return; 
    if(this.editor.getValue() !== this.props.value) {
      this.editor.setValue(this.props.value);
    }
  }
  render() {
    const { value, className, onChange } = this.props; 
    return (
      <div {...{className}}>
        <textarea {...{value, onChange}} ref={el => this.textarea = el} /> 
      </div>
    );
  }
}