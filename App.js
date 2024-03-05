import "./index.css";

export default function App() {
  return (
    <div className="App">
      <FlashCards />
    </div>
  );
}

const questions = [
  {
    id: 3457,
    question: "What language is React based on?",
    answer: "JavaScript",
  },
  {
    id: 7336,
    question: "What are the building blocks of React apps?",
    answer: "Components",
  },
  {
    id: 8832,
    question: "What's the name of the syntax we use to describe a UI in React?",
    answer: "JSX",
  },
  {
    id: 1297,
    question: "How to pass data from parent to child components?",
    answer: "Props",
  },
  {
    id: 9103,
    question: "How to give components memory?",
    answer: "useState hook",
  },
  {
    id: 2002,
    question:
      "What do we call an input element that is completely synchronised with state?",
    answer: "Controlled element",
  },
];

const FlashCard = ({ selected, onSelect, question, answer }) => {
  const handleSelect = () => {
    onSelect(question);
  };

  return (
    <div className={selected ? "selected" : ""} onClick={handleSelect}>
      {selected ? answer : question}
    </div>
  );
};

const App = () => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleSelect = (card) => {
    setSelectedCard(card);
  };

  const flashcards = [
    { question: "What language is React based on?", answer: "JavaScript" },
    {
      question: "What are the building blocks of React apps?",
      answer: "Components",
    },
    {
      question:
        "What's the name of the syntax we use to describe a UI in React?",
      answer: "JSX",
    },
    {
      question: "How to pass data from parent to child components?",
      answer: "Props",
    },
    { question: "How to give components memory?", answer: "useState hook" },
    {
      question:
        "What do we call an input element that is completely synchronized with state?",
      answer: "Controlled element",
    },
  ];

  const flashcardsToShow = flashcards.slice(0, 6); // Merr 6 flashcards të parat

  return (
    <div className="flashcards">
      {flashcardsToShow.map((card, index) => (
        <FlashCard
          key={index}
          selected={selectedCard === card.question}
          onSelect={handleSelect}
          question={card.question}
          answer={card.answer}
        />
      ))}
    </div>
  );
};
