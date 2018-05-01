import { Component, OnChanges, SimpleChanges, Input } from "@angular/core"

@Component({
    selector: 'star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
    startWidth: number;
    @Input() rating: number;

    ngOnChanges(changes: SimpleChanges): void {
         this.startWidth = this.rating * 86/5;
    }
}