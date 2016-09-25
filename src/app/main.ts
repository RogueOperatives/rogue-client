/// <reference path="../../typings/index.d.ts" />

import 'jquery/jquery';
import 'jquery-slimscroll/jquery-slimscroll';
import 'bootstrap/js/bootstrap';
import 'admin-lte/js/app';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { RogueAppModule } from './app.module';
import {RogueAppComponent} from './app';

import {PlatformInformationService} from './services/platformInformationService';

const platform = platformBrowserDynamic();
platform.bootstrapModule(RogueAppModule);
