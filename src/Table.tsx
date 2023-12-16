import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
import 'codemirror/mode/xml/xml'
import 'codemirror/mode/javascript/javascript'

import {UnControlled as CodeMirror} from 'react-codemirror2'
import React from 'react';

interface TableProps {
    displayName: string;
    onChange: (value: string) => void;
    value: string;
    image: string;
    lang: string;
}

const Table: React.FC<TableProps> = (props : TableProps) => {

    const { displayName, onChange, value, image, lang } = props;

    return (
        <>
            <div className="text-[13px] text-[#a8acb9] flex items-center bg-[#000] gap-[10px] z-10">
                <img className="w-[13px] h-[13px]" src={image} alt="" />
                <h1 className="">{displayName}</h1>
            </div>
            <CodeMirror
              value={value}
               className=""
                options={{
                lineWrapping: true,
                lint: true,
                mode: lang,
                theme: 'material',
                lineNumbers: true,
            }}
            onChange={(editor, data, value) => {
                onChange(value);
            }}
            >
            </CodeMirror>
        </>
    )
}

export default Table;