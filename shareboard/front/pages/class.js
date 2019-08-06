import React from 'react';
import {Editor, EditorState, RichUtils} from 'draft-js';
import { Button } from 'antd';
import {stateToHTML} from 'draft-js-export-html';
function Class() {
    const [editorState, setEditorState] = React.useState(
        EditorState.createEmpty()
    );
    const onSubmit = () => {
        console.log(stateToHTML(editorState.getCurrentContent()));
    }
    const styleMap = {
        'STRIKETHROUGH': {
          textDecoration: 'line-through',
        },
        'Header-one': {
            fontSize: '40px',
        },
        'Header-two': {
            fontSize: '35px',
        },
        'Header-three': {
            fontSize: '30px',
        },
        'Header-four': {
            fontSize: '25px',
        },
        
    };

    const handleKeyCommand = command => {
        const newState = RichUtils.handleKeyCommand(
            editorState,
            command
        );
        if (newState) {
            setEditorState(newState);
            return "handled";
        }
        return "not-handled";
   };
    return (
        <div>
            <style jsx>
                {`
                    .button-Wrapper{
                        width: 100vw;
                        margin-top: 50px;
                        display: flex;
                        justify-content: center;
                        align-items: cetner;
                        
                    }
                    .text-Wrapper {
                        margin-left: 300px;
                        padding-top: 20px;
                        width: 70vw;
                        border-top: 1px solid #ddd;
                        margin-top: 20px;
                        font-size: 20px;
                    }
                `}
            </style>
            <div className="button-Wrapper">
                <Button type="link" style={{fontWeight:'bold', marginLeft: '450px'}} size="default" onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, "Header-one"))}>H1</Button>
                <Button type="link" style={{fontWeight:'bold', marginLeft: '10px'}} size="default" onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, "Header-two"))}>H2</Button>
                <Button type="link" style={{fontWeight:'bold', marginLeft: '10px'}} size="default" onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, "Header-three"))}>H3</Button>
                <Button type="link" style={{fontWeight:'bold', marginLeft: '10px'}} size="default" onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, "Header-four"))}>H4</Button>
                <Button type="link" style={{fontWeight:'bold', marginLeft: '10px'}} size="default" onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"))}>UL</Button>
                <Button type="link" style={{fontWeight:'bold', marginLeft: '10px'}} size="default" onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, "BOLD"))}>Bold</Button>
                <Button type="link" style={{fontWeight:'bold', marginLeft: '10px'}} size="default" onClick={() => setEditorState(RichUtils.toggleInlineStyle(editorState, "ITALIC"))}>Italic</Button>
                <Button type="primary" style={{marginLeft: '400px'}} onClick={onSubmit}>전송</Button>
            </div>
            <div className="text-Wrapper">
                <Editor
                    customStyleMap={styleMap}
                    handleKeyCommand={handleKeyCommand}
                    editorState={editorState}
                    onChange={setEditorState}
                />
            </div>
        </div>
  );
}

export default Class;
