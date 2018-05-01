import { Component, OnChanges, SimpleChanges } from "@angular/core"

@Component({
    selector: 'star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    startWidth: number;
    rating: number = 4;

    ngOnChanges(changes: SimpleChanges): void {
         this.startWidth = this.rating * 86/5;
    }
}