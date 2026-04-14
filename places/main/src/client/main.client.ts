import { Flamework } from "@flamework/core";
import { makeHelloFromCommon } from "common/shared/module";
import { makeHello } from "shared/module";

print(makeHello("main.client.ts"));
print(makeHelloFromCommon("main.client.ts"));

Flamework.addPathsGlob("places/main/src/client/**/*");
Flamework.addPathsGlob("places/common/src/client/**/*");

Flamework.ignite();
