import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Header from "../Components/Layout/Header/Header";

import { GlobalStyles, defaultTheme } from "../Styles/theme";
import Routes from "./Routes";

const App: React.FC = () => {
	return (
		<BrowserRouter>
			<ThemeProvider theme={defaultTheme}>
				<GlobalStyles />
				<Header />
				<Routes />
			</ThemeProvider>
		</BrowserRouter>
	);
};

export default App;
