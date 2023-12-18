import { useEffect, useState } from "react"
import Table from "./Table"
import HTML from './assets/html.png'
import CSS from './assets/css-3.png'
import JAVASCRIPT from './assets/java-script.png'

function App() {
  const [html, setHtml] = useState<string>("");
  const [css, setCss] = useState<string>("");
  const [js, setJs] = useState<string>("");
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
    <div className="grid grid-cols-2 gap-[1em] w-[90%] h-[90vh] mx-auto mt-[4em]">
      <div className="w-[100%] h-[92%] h-[93%] ">
        <Table displayName="HTML" onChange={setHtml} value={html} image={HTML} lang="xml"/>
        <Table displayName="CSS" onChange={setCss} value={css} image={CSS} lang="css"/>
        <Table displayName="JS" onChange={setJs} value={js} image={JAVASCRIPT}  lang="javascript"/>
      </div>
      <div className="w-[100%] h-[94%] bg-[#eee]">
        <h1 className="bg-[#000] text-[#a8acb9] py-[8px] text-center text-[20px]">Output</h1>
        <iframe srcDoc={srcDoc} title="output" sandbox="allow-scripts" width="100%" height="100%"/>
      </div>
    </div>
  )
}

export default App
