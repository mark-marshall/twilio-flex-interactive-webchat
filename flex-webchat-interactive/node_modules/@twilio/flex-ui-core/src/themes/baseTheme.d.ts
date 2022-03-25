import { Theme, CoreThemeColors } from "../components/theme";
import { ThemeColorsDefinition } from ".";
/**
 * Creates a base theme for the colors passed.
 * @param  {CoreThemeColors} colors An object which specifies the base colors from 1 to 11.
 * @param  {boolean} lightTheme A boolean value used to set the contrast right.
 * @returns {Theme}
 *
 * @ignore
 */
export declare function createTheme(colors: CoreThemeColors, lightTheme: boolean): Theme;
declare const x: ThemeColorsDefinition;
export default x;
