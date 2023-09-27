import { MainStyle } from "./assets/styles/main"
import { Form } from "./components/form"
import { Header } from "./components/header"
import { ListCard } from "./components/listCard"
import { Total } from "./components/total"

function App() {
  return (
    <>
      <Header/>
      <MainStyle>
        <section>
          <div className="container_form">
            <Form/>
            <Total/>
          </div>
          <ListCard/>
        </section>
      </MainStyle>
    </>
  )
}

export default App
