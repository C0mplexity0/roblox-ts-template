import React from "@rbxts/react";
import { UIButton } from "./components/ui-components";

export default function App() {
	return <UIButton Text={"hello"} Size={new UDim2(0, 200, 0, 50)} Position={new UDim2(0.5, -100, 0.5, -25)} />;
}
