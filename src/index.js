import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Counter extends React.Component {
  render() {
    return (
      <div className='counter'>
        <p>Words: {this.props.words}</p>
        <p>Characters: {this.props.characters}</p>
      </div>
    )
  }
}
class Info extends React.Component {
  render() {
    return (
      <div className='column'>
        <h1>WordCount</h1>
        <h2>Write text to count words...</h2>
        <p>A simple word counter that's minimalistic and easy to use.</p>
        <Counter words={this.props.words} characters={this.props.characters}/>
      </div>
    )
  }
}
class Input extends React.Component {
  render() {
    return (<div className='column'><textarea cols="30" rows="10" onChange={this.props.onChange} placeholder="Type here...">{this.props.value}</textarea></div>)
  }
}
class Page extends React.Component {
  constructor () {
    super();
    this.state = {
      text: "",
      words: 0,
      characters: 0
    }
  }
  onChange(e) {
    let text = e.target.value;
    this.setState({
      words: text.length === 0 ? 0 : text.split(" ").length,
      characters: text.length,
      text
    });
  }
  render() {
    return (
      <div className="main">
        <Input onChange={e => this.onChange(e)} value={null}/>
        <Info words={this.state.words} characters={this.state.characters}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById('root')
);
