"use client";
import parse from "html-react-parser";
import React, { useState } from "react";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";

const TextEditor = () => {
  const [body, setBody] = useState("");

  const handleBody = (e: string) => {
    console.log(e);
    setBody(e);
  };

  return (
    <div>
      <h2>Text Editor</h2>
      <ReactQuill
        placeholder="Write something..."
        modules={TextEditor.modules}
        formats={TextEditor.formats}
        onChange={handleBody}
        value={body}
      />

      <button
        onClick={(e) => {
          console.log(parse(body));
        }}
      >
        submit
      </button>

      <div>
        <h2>Raw Text</h2>
        {body}
        <h2>Rendered Text</h2>
        {parse(body)}
      </div>
    </div>
  );
};

TextEditor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
};

TextEditor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default TextEditor;
