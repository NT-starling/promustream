//import solid from "solid-start/vite";
//import { defineConfig } from "vite";
//export default defineConfig({
  //plugins: [solid()],
//});
import solid from "solid-start/vite";
import staticAdapter from "solid-start-static";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/promustream/",
  // insert your github project name between slashes above
  plugins: [solid({ adapter: staticAdapter() })],
});
