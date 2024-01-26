import "./App.css";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Routes, Route } from "react-router-dom";
import Players from "./components/Players";
import DetailPage from "./components/DetailPage";
import ContactPage from "./components/ContactPage";
function App() {
	return (
		<div>
			<Navigation />
			<Routes>
				<Route path="/" element={<Players />}></Route>
				<Route path="/detail/:id" element={<DetailPage />}></Route>
				<Route path="/contact" element={<ContactPage />}></Route>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
