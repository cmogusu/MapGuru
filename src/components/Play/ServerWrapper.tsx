import { MapRenderContextProvider } from "@/context";

export const ServerWrapper = (props) => {
	if (typeof window === "undefined") {
		return props.children;
	}

	return <MapRenderContextProvider>{props.children}</MapRenderContextProvider>;
};
