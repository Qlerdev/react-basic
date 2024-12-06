import { useState } from "react";

function StudentList() {
  // [{รหัสนักเรียน,{ชื่อนักเรียน},{},{}}]
  const [students, setStudents] = useState([
    { id: 1, name: "o" },
    { id: 2, name: "i" },
    { id: 3, name: "j" },
  ]);
  const [show, setShow] = useState(true); // ถ้ามีค่าเป็นจริงให้แสดงเนื้อหา ถ้าเท็จซ่อน

  function deleteStudent(id) {
    setStudents(students.filter((item) => item.id !== id));
  }

  return (
    <>
      <h1>จำนวนนักเรียน = {students.length}</h1>
      <button onClick={() => setShow(!show)}>สลับ</button>
      {show && (
        <ul>
          {students.map((item) => (
            <li key={item.id} className="px-5">
              <p>
                {item.id} - {item.name}
              </p>
              <button
                className="p-2 border rounded-md"
                onClick={() => {
                  deleteStudent(item.id);
                }}
              >
                ลบ
              </button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export default StudentList;
