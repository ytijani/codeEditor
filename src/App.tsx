import { useEffect, useState } from "react"
import Table from "./Table"
import HTML from './assets/html.png'
import CSS from './assets/css-3.png'
import JAVASCRIPT from './assets/java-script.png'

function App() {
  const [html, setHtml] = useState();
  const [css, setCss] = useState();
  const [js, setJs] = useState();
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc( `
  <html>
    <body>${html}</body>
    <style>${css}</style>
    <script>${js}</script>
  </html>
  `)
    }, 300)
    return () => clearTimeout(timeout);
  },[html, css, js])

  
  return (
    <div className="h-[100vh] w-[100vw] flex gap-[16px] justify-center items-center mx-auto">
      <div className="w-[40%] flex flex-col justify-center h-[100%] ">
        <Table displayName="HTML" onChange={setHtml} value={html} image={HTML} lang="xml"/>
        <Table displayName="CSS" onChange={setCss} value={css} image={CSS} lang="css"/>
        <Table displayName="JS" onChange={setJs} value={js} image={JAVASCRIPT}  lang="javascript"/>
      </div>
      <div className="w-[43%] bg-[#eee] h-[53.3em]">
        <h1 className="bg-[#000] text-[#a8acb9] py-[8px] text-center text-[20px]">Output</h1>
        <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts"/>
      </div>
    </div>
  )
}

export default App
