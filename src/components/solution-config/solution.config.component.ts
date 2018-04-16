import { Component, Input } from '@angular/core';
import { TestSolution } from '../../models/index';
import { Router } from '@angular/router';

@Component({
    selector: 'solution-cofig',
    templateUrl: './solution.config.component.html',
    styleUrls: ['./solution.config.component.scss']
})
export class SolutionConfigComponent {
    constructor(private router: Router) {

    }

    NavigateToList() {
        this.router.navigate(['list']);
    }
}
