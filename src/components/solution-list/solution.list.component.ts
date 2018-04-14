import { Component, Input } from '@angular/core';
import { TestSolution } from '../../models/index';

@Component({
    selector: 'solution-list',
    templateUrl: './solution.list.component.html',
    styleUrls: ['./solution.list.component.scss']
})
export class SolutionListComponent {

    @Input('Solution') set Solution(solution: TestSolution) {
        
    }
}
