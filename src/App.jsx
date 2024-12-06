// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <StudentList />
      </main>
    </div>
  );
}

export default App;
