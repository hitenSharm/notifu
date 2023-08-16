import { Card } from './components/Cards/Card';

const cardData = {
  name: "VedL",
  author: "Gaurav S.",
  tradeName: "HDFC Bank",
  entry: "3140",
  current: "3140",
  target: "3140",
  sl: "3140"
}

function App() {
  return (
    <div>
      <Card {...cardData} />

      {/* Data can be passed as props */}
    </div>
  );
}

export default App;
