import styles from "./App.module.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className={`d-flex flex-column ${styles.appContainer}`}>
            <Header />
            <div className="flex-fill">
                <h1>App</h1>
            </div>
            <Footer />
        </div>
    );
}
export default App;
