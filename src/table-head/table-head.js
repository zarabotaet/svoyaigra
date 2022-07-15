import "./table-head.scss";

export const TableHead = ({ list }) => {
  return (
    <ul
      className="table-head"
      style={{
        gridTemplateColumns: `repeat(${list.length}, 1fr)`,
      }}
    >
      {list.map((item) => (
        <li className="table-head__item" key={item}>{item}</li>
      ))}
    </ul>
  );
};
