﻿import { Component, OnChanges, SimpleChanges, Input, Output, EventEmitter } from "@angular/core"

@Component({
    selector: 'star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    startWidth: number;
    @Input() rating: number;
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(changes: SimpleChanges): void {
         this.startWidth = this.rating * 86/5;
    }

    onClick(): void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }

}