/// <reference path="../../typings/index.d.ts" />

import 'jquery/jquery';
import 'jquery-slimscroll/jquery-slimscroll';
import 'bootstrap/js/bootstrap';
import 'admin-lte/js/app';

import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {APP_ROUTER_PROVIDERS} from './app.routes';
import {RogueAppComponent} from './app';
import {PlatformInformationService} from './services/platformInformationService';


enableProdMode();

bootstrap(RogueAppComponent,
            [
                APP_ROUTER_PROVIDERS,
                PlatformInformationService
            ]);