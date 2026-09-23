import "./Ajuda.css";
import Header from "../../components/Header/Index.jsx";
import PageWIP from "../../components/PageWIP/Index.jsx";

function ButtonAjuda() {
   return(
      <div className="app">
         <Header/>
         <main className="content-pages">
            <div className="content-pages-ajuda">

            <PageWIP />   
            </div>
         </main>
      </div>
   )
}


export default ButtonAjuda;