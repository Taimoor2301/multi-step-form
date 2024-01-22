import { createContext, useContext, useState } from "react";

const dataContext = createContext();

export const useDataContext = () => useContext(dataContext);

const template = {
	name: "",
	email: "",
	phoneNumber: "",
	planName: "Arcade",
	planType: "monthly",
	planPrice: { priceMM: 9, priceYY: 90 },
	addons: [],
	addonPrice: 0,
};

export const Provider = ({ children }) => {
	const [data, setData] = useState(template);
	const [activePage, setActivePage] = useState(1);

	return <dataContext.Provider value={{ data, setData, activePage, setActivePage }}>{children}</dataContext.Provider>;
};
