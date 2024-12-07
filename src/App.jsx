// import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import AddForm from "./components/AddForm";
import { useState } from "react";

function App() {
  // [{รหัสนักเรียน,{ชื่อนักเรียน},{},{}}]
  function deleteStudent(id) {
    setStudents(students.filter((student) => student.id !== id));
  }
  const [students, setStudents] = useState([]);
  return (
    <div className="container">
      <Header title="Home" />
      <main>
        <AddForm students={students} setStudents={setStudents} />
        <StudentList students={students} deleteStudent={deleteStudent} />
      </main>
    </div>
  );
}

export default App;
