/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import './src/assets/styles/_global.scss';
import { provideRedux } from './provide-redux-store';
export const wrapRootElement = provideRedux;
