"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { withServerSafetyHoc } from "./withServerSafetyHoc";

type ApiKeysContextType = {
	mapboxApiKey: string;
	maptilerApiKey: string;
	tomtomApiKey: string;
};

const initialKeys = {
	mapboxApiKey: "",
	maptilerApiKey: "",
	tomtomApiKey: "",
};

const ApiKeysContext = createContext<ApiKeysContextType>(initialKeys);

type Props = {
	getApiKeys: () => Promise<unknown>;
	children: ReactNode;
};

const ApiContextProviderLocal = ({ children, getApiKeys }: Props) => {
	const [keys, setKeys] = useState<ApiKeysContextType>(initialKeys);

	useEffect(() => {
		if (!getApiKeys) {
			return;
		}
		getApiKeys().then((newKeys) => {
			setKeys(newKeys as ApiKeysContextType);
		});
	}, [getApiKeys]);

	const context = useMemo(() => keys, [keys]);

	return <ApiKeysContext value={context}>{children}</ApiKeysContext>;
};

export const useApiKeyContext = () => useContext(ApiKeysContext);

export const ApiContextProvider = withServerSafetyHoc(ApiContextProviderLocal);
