import Aurelia from 'aurelia';
import { RouterConfiguration } from '@aurelia/router-lite';

import '@material/web/all';
import 'bootstrap';

import 'bootstrap/dist/css/bootstrap.css';
import '@betsybot/betsy-web-components/dist/style.css';

import { App } from './app';
import * as Resources from './resources';


import * as BetsyWebComponentsPlugin from '@betsybot/betsy-web-components';

void Aurelia
    .register(
        RouterConfiguration.customize({
            //title: "Betsy Bot Admin Panel",
            useUrlFragmentHash: false,
        }),
    )
    .register(BetsyWebComponentsPlugin)
    .register(Resources)
    .app(App)
    .start();
