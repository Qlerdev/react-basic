import { useState } from "react";
import "./StudentList.css";
import Item from "./Item";

function StudentList(props) {
  const [show, setShow] = useState(true); // ถ้ามีค่าเป็นจริงให้แสดงเนื้อหา ถ้าเท็จซ่อน
  const { students, deleteStudent } = props;

  return (
    <>
      <ul>
        <div className="header">
          <h1>จำนวนนักเรียน = {students.length}</h1>
          <button onClick={() => setShow(!show)}>สลับ</button>
        </div>

        {show && (
          <ul>
            {students.map((data) => (
              <Item key={data.id} data={data} deleteStudent={deleteStudent} />
            ))}
          </ul>
        )}
      </ul>
    </>
  );
}

export default StudentList;
