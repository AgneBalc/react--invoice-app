import "styled-components";
import themes from "./themes";

declare module "styled-components" {
  export interface DefaultTheme extends themes {}
}
