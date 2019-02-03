import React from "react";

const TextPreviewer = props => (
  <div className="text-previewer">
    <div className="text-previewer__header">Previewer</div>
    <div id="preview" dangerouslySetInnerHTML={props.getMarkdownText()} />
  </div>
);
export default TextPreviewer;
