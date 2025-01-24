import Separator from "./components/Separator"
import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header/Header"
import MainArea from "./layout/MainArea"

function App() {

  return (
      <div className="static p-12">
        <Header />
        <MainArea />
        <Separator />
        <Separator />
        <Separator />
        <Footer />
      </div>
  )
}

export default App
