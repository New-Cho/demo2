import Header from "./layout/Header";
import Content from "./layout/Content";
import Footer from "./layout/Footer";
import Sidebar from "./layout/Sidebar";

function App() {
    return (
        <>
            <div className={"page-wrapper"} id={"main-wrapper"} data-layout={"vertical"} data-navbarbg={"skin6"}
                 data-sidebartype={"full"}
                 data-sidebar-position={"fixed"} data-header-position={"fixed"}>
                <Sidebar/>
                <div className={"body-wrapper"}>
                    <Header/>
                    <div className={"container-fluid"}>
                    <Content/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default App;
