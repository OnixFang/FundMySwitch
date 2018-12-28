import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {
    title = 'Chibi Barrage';
    goal: number = 50;
    current: number = 5;
    progress: number = (this.current * 100) / this.goal;
    progressBar = {
        width: String(this.progress + '%')
    };
}
