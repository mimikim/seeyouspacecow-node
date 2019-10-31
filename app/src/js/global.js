// global js file
import {Navigation} from './modules/navigation';
import {Analytics} from "./modules/analytics";

window.onload = function() {
  new Navigation;
  // Analytics disabled for github repo
  // new Analytics;
};
