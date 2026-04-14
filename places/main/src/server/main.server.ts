import { Flamework } from "@flamework/core";
import { makeHelloFromCommon } from "common/shared/module";
import { makeHello } from "shared/module";

print(makeHello("main.server.ts"));
print(makeHelloFromCommon("main.server.ts"));

Flamework.addPathsGlob("places/main/src/server/**/*");
Flamework.addPathsGlob("places/common/src/server/**/*");

Flamework.ignite();
