import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Masonry } from 'masonry-layout';

@Component({
    selector: 'app-other-stuff',
    templateUrl: './other-stuff.component.html',
    styleUrls: ['./other-stuff.component.css']
})
export class OtherStuffComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        $(document).ready(function () {
            // init Masonry
            const elem = $('.masonry-container');
            var $grid = new Masonry(elem, {
                columnWidth: 200,
                itemSelector: '.masonry-item'
            });
            // layout Masonry after each image loads
            $grid.imagesLoaded().progress(function () {
                $grid.masonry('layout');
            });
        });
    }

}
