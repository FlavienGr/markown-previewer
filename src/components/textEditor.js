import React from "react";
import marked from "marked";
import TextPreviewer from "./textPreviewer";
import TextOrigin from "../textOrigin.md";

class TextEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      starterText: ""
    };
  }
  componentDidMount = () => {
    fetch(TextOrigin)
      .then(response => response.text())
      .then(text => {
        this.setState(() => ({
          text
        }));
      });
  };
  handleTextarea = e => {
    const text = e.target.value;

    this.setState(() => ({
      text
    }));
  };
  getMarkdownText = () => {
    const rawMarkup = marked(this.state.text, {
      breaks: true,
      gfm: true,
      sanitize: true
    });
    return { __html: rawMarkup };
  };

  render() {
    console.log(TextOrigin);
    return (
      <div className="text-editor">
        <div className="text-editor__box">
          <div className="text-editor__header">Editor</div>

          <textarea
            id="editor"
            onChange={this.handleTextarea}
            value={this.state.text}
          />
        </div>
        <TextPreviewer getMarkdownText={this.getMarkdownText} />
      </div>
    );
  }
}

export default TextEditor;
