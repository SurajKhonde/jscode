import Header from "./Header";
import Code from "./Code";
import Result from "./Result";
import CodeMobile from "./CodeMobile";
const Home = () => { 
    return (
        <>
            <Header />
            <div className="hidden sm:block"><Code /></div>
            <div className=" sm:hidden">{<CodeMobile />}</div> 
            <Result/>
        </>
    )
}
export default Home;