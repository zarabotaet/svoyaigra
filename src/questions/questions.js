import "./questions.scss";

const COLORS = ["red", "orange", "yellow", "green", "lblue", "blue", "violet"];

export const Questions = ({ themesLength }) => {
  return (
    <div className="questions">
      {Array.from({ length: themesLength ** 2 }, (_, i) => {
        const rowCount = Math.ceil((i + 1) / themesLength);
        const color = COLORS[i % themesLength];
        return (
          <button className={`questions__item questions__item--${color}`}>
            {rowCount}
          </button>
        );
      })}
    </div>
  );
};
