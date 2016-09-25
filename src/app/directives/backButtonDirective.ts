import {Directive, HostListener} from '@angular/core';
import {Location} from '@angular/common';

import {PlatformInformationService} from '../services/platformInformationService';

@Directive({
    selector: '[back-button]',
    host: {
        '[attr.hidden]': 'isHidden'
    },
    providers: [PlatformInformationService]
})
export class BackButtonDirective {
    public isHidden: boolean = true;

    constructor(private platformInformationService: PlatformInformationService,
                private location: Location) {
        this.setHidden();
    }

    private setHidden(): void {
        this.isHidden = this.platformInformationService.isWeb;
    }

    @HostListener('click')
    public onClick() {
        this.location.back();
    }
}
