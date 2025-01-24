import Separator from "./components/Separator"
import Footer from "./layout/Footer/Footer"
import Header from "./layout/Header/Header"
import MainArea from "./layout/MainArea"

function App() {

  return (
      <div className="block">
        <Header />
        <div className="relative top-0 h-96">
        </div>
        <div className="relative top-0 h-12">
        </div>
       
        <MainArea />
  
        <Separator />
        <Footer />
      </div>
  )
}

export default App
