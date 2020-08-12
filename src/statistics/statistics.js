import "../vendor/normalize.css";
import "../style.css";

import Statistics from '../js/componets/Statistics';
import Store from '../js/modules/Store';

const store = new Store();

const statistics = new Statistics(store);

statistics.renderStatistics();