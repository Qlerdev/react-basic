import "./Item.css";
function Item(props) {
  const { data, deleteStudent } = props;
  return (
    <>
      <li key={data.id} className={data.gender}>
        <p>{data.name}</p>
        <button
          onClick={() => {
            deleteStudent(data.id);
          }}
          className="bg-red-500"
        >
          ลบ
        </button>
      </li>
    </>
  );
}

export default Item;
