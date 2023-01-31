import 'styled-components';
import { theme } from '../theme';

type Themetype = typeof theme

declare module 'styled-components' {
    export interface DefaultTheme extends Themetype {}

}