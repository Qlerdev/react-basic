import { useState } from "react";
import "./AddForm.css";
function AddForm(props) {
  const { students, setStudents } = props;
  const [name, setName] = useState("");
  const [gender, setGender] = useState("male");
  function saveStudent(e) {
    e.preventDefault();
    if (!name) {
      alert("กรุณาป้อนชื่อ");
    } else {
      const newStudent = {
        id: Math.floor(Math.random() * 1000),
        name: name,
        gender: gender,
      };
      setStudents([...students, newStudent]); //....students(space operator) คือ students ค่าเดิมที่เก็บในรูปแบบ Array newStudent คือนำค่า Student ค่าใหม่มาใส่
      setName(""); //reset ค่าใน input
      setGender("ชาย");
    }
  }
  return (
    <section className="container">
      <form onSubmit={saveStudent}>
        <label htmlFor="name">ชื่อนักเรียน</label>
        <input
          type="text"
          name="name"
          className="border"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        ></input>
        <select
          name="sex"
          id="sex"
          className="border-4 text-[18px] p-[7px] m-[10px] rounded-[12px]"
          value={gender}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        >
          <option value="male">ชาย</option>
          <option value="female">หญิง</option>
        </select>
        <button type="submit" className="text-lg py-[7px] px-[10px] m-[10px] bg-green-500 text-white ">
          บันทึก
        </button>
      </form>
    </section>
  );
}

export default AddForm;
