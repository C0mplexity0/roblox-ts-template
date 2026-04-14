import React, { StrictMode } from "@rbxts/react";
import { createPortal, createRoot } from "@rbxts/react-roblox";
import { Players } from "@rbxts/services";
import App from "./components/App";

export function initReact() {
	const root = createRoot(new Instance("Folder"));

	const playerGui = Players.LocalPlayer.WaitForChild("PlayerGui") as PlayerGui;
	const screenGui = new Instance("ScreenGui");
	screenGui.ResetOnSpawn = false;
	screenGui.Parent = playerGui;

	root.render(<StrictMode>{createPortal(<App />, screenGui)}</StrictMode>);
}
