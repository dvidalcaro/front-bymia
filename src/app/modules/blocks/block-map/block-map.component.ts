import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-block-map',
    templateUrl: './block-map.component.html',
    styleUrls: ['./block-map.component.scss']
})
export class BlockMapComponent {

    @Input() url = '';

    constructor() { }
}
