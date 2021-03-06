import { createGlobalStyle, DefaultTheme, keyframes } from "styled-components";
import reset from "styled-reset";

// Media query
const deviceSizes = {
	mobile: 639,
	tablet: 767,
	laptop: 1023,
	wide: 1920,
};

const deviceMax = {
	mobile: `screen and (max-width: ${deviceSizes.mobile}px)`,
	tablet: `screen and (max-width: ${deviceSizes.tablet}px)`,
	laptop: `screen and (max-width: ${deviceSizes.laptop}px)`,
};

const deviceMin = {
	mobile: `screen and (min-width: ${deviceSizes.mobile + 1}px)`,
	tablet: `screen and (min-width: ${deviceSizes.tablet + 1}px)`,
	laptop: `screen and (min-width: ${deviceSizes.laptop + 1}px)`,
	wide: `screen and (min-width: ${deviceSizes.wide + 1}px)`,
};

export const defaultTheme: DefaultTheme = {
	bgColor1: "#4d5e65",
	bgColor2: "#706260",
	bgColor3: "#9a7951",
	accentColor: "#e4cbac",
	accentFont: '"Cormorant Garamond", "Nanum Myeongjo", serif',
	textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
	fullHeight: window.innerWidth > 639 ? "100vh" : `${window.innerHeight}px`,
	deviceScreenMax: deviceMax,
	deviceScreenMin: deviceMin,
};

//global
export const GlobalStyles = createGlobalStyle`
  ${reset}

	body, html{
		height:100%;
	}
  body{
    font-family: 'Noto Sans KR', sans-serif;  
		background-color:${(props) => props.theme.bgColor1};
		transition: background-color 0.5s;
		
	}

  main{
    width: auto;
    transition: all .5s;
  }

  a {
    text-decoration: none;
  }

	body::-webkit-scrollbar {
	width: 5px;
	height:5px;
	/* display: none; */
	}

	body::-webkit-scrollbar-thumb {
		background-color: rgba(255,255,255,0.7);
		height: 20px;
		border-radius: 10px;
	}

	body::-webkit-scrollbar-track {
		background-color: rgba(0,0,0,0.1);
	}

	.overflow-hidden{
		overflow:hidden;
	}
	.overflow-unset{
		overflow:unset;
	}

	.blind {
		position: absolute;
		width: 1px;
		height: 1px;
		clip: rect(0 0 0 0);
		overflow: hidden;
	}
`;
