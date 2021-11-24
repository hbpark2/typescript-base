// 구글 애널리틱스
// 구글 통계 hook
import React from "react";

import analytics from "../analytics";
import { useLocation } from "react-router-dom";

export default function useGoogleAnalytics() {
	const location = useLocation();

	React.useEffect(() => {
		analytics.initGA();
	}, []);

	React.useEffect(() => {
		const currentPath = location.pathname + location.search;
		analytics.sendPageview(currentPath);
	}, [location]);
}
