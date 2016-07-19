import {Component} from '@angular/core';

import {BackButtonDirective} from '../../directives/backButtonDirective'

@Component({
    selector: 'rogue-header',
    templateUrl: 'app/components/header/header.html',
    directives: [BackButtonDirective]
})
export class RogueHeaderComponent {

}
