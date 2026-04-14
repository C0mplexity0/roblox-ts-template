import { Controller, OnStart } from "@flamework/core";
import { initReact } from "./main";

@Controller()
export class UIController implements OnStart {
	onStart(): void | Promise<void> {
		initReact();
	}
}
