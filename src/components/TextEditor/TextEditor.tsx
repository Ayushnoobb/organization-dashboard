// TextEditor.tsx
import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface TextEditorProps {
  value: string;
  setValue: (value: string) => void;
}

const TextEditor: React.FC<TextEditorProps> = ({ value, setValue }) => {
  const handleChange = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className='tex-editor-box w-full mb-8'>
      <ReactQuill
        value={value} 
        onChange={handleChange}
        style={{height : '20vh'}}
      />
    </div>
  );
};

export default TextEditor;
