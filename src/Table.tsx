import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/material.css'
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

    const handleChange = (editor: any, data: any, value: any) => {
        onChange(value);
    }
    return (
        <>
            <div className="text-[13px] text-[#a8acb9] flex items-center bg-[#000] gap-[10px] p-[8px] mt-[10px]">
                <img className="w-[13px] h-[13px]" src={image} alt="" />
                <h1 className="">{displayName}</h1>
            </div>
            <CodeMirror
             onBeforeChange={handleChange}
              value={value} className="pl-[10px] w-[100%] h-[26%] outline-none"
               options={{
                lineWrapping: true,
                lint: true,
                mode: lang,
                theme: 'material',
                lineNumbers: true,
            }}>
            </CodeMirror>
        </>
    )
}

export default Table;