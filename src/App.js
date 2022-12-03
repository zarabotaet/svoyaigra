import { QuestionsHead } from "./questions-head/questions-head";
import { Questions } from "./questions/questions";

const QuestionsHeadConfig = [
  "Цвета",
  "Цифры",
  "Люди",
  "Творения",
  "Места",
  "События",
  "Чудеса",
];

export const App = () => {
  return (
    <div className="container">
      <QuestionsHead list={QuestionsHeadConfig} />
      <Questions themesLength={QuestionsHeadConfig.length}/>
    </div>
  );
};
