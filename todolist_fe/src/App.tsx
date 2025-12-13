import Login from "./components/login/Login"
import Task from "./components/task/Task"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import NotFound from "./components/commons/NotFound"
import type { CSSProperties } from "@mui/material"


const footerStyle: CSSProperties = {
  textAlign: "center",
  padding: "10px",
  backgroundColor: "#0a0a0a8c",
  position: "fixed",
  bottom: 0,
  width: "100%"
}

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/task" element={<Task />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
    <footer style={footerStyle}>
      <p>© 2025 Todo List. All rights reserved.</p>
    </footer>
    </>
  )
}

export default App
