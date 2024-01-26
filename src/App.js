import "./App.css";
// import Footer from "./components/Footer";
// import Main from "./components/Main";
// import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import NewsPage from "./components/NewsPage";
import ContactPage from "./components/ContactPage";
import DetailPage from "./components/DetailPage";

function App() {
	return (
		<>
			<NavBar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="news" element={<NewsPage />} />
				<Route path="/contacts" element={<ContactPage />} />
				<Route path="/detail/:id" element={<DetailPage />} />
			</Routes>
		</>
	);
}
export default App;
