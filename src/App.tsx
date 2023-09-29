import { useEffect, useState } from "react"
import { MainStyle } from "./assets/styles/main"
import { Form } from "./components/form"
import { Header } from "./components/header"
import { ListCard } from "./components/listCard"
import { Total } from "./components/total"

interface CardData {
  title: string;
  value: string;
}

function App() {
  const [ cardArray, setCardArray ] = useState<CardData[]>([])

  const updateCards = (newstate: string) => {
    setCardArray(JSON.parse(newstate))
  }

  useEffect(() => {
    const dataCard = localStorage.getItem('cardData');
    if (dataCard) {
      setCardArray(JSON.parse(dataCard));
    }
  }, []);

  return (
    <>
      <Header/>
      <MainStyle>
        <section>
          <div className="container_form">
            <Form 
              onUpdate={updateCards}
            />
            <Total/>
          </div>
          <ListCard
            cardArray={JSON.stringify(cardArray)}
          />
        </section>
      </MainStyle>
    </>
  )
}

export default App
