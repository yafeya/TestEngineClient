import { Component, Input, OnInit } from '@angular/core';
import { TestSolution, RawArg, TestSolutionViewModel, RawArgViewModel } from '../../models/index';

const CannotRun = 'Cannot start/stop this solution, arguments not valid';

@Component({
    selector: 'solution-cofig',
    templateUrl: './solution.config.component.html',
    styleUrls: ['./solution.config.component.scss']
})
export class SolutionConfigComponent implements OnInit {

    @Input('Solution') set Solution(solution: TestSolutionViewModel) {
        if (solution != undefined) {
            this.mSolution = solution.RawModel;
            let configInfo = this.mSolution.Configuration;
            if (configInfo != undefined && configInfo.NeedArgs) {
                this.setArgs(configInfo.TemplateArgs);
            }
            else {
                this.clearArgs();
            }
        }
    }

    private mSolution: TestSolution;
    private mArgs: RawArgViewModel[];
    private mIsArgsEnabled: boolean;
    private mErrorMessage: string;
    private mIsOperationEnabled: boolean;

    private setArgs(templateArgs: RawArg[]) {
        let tempalteViewModels: RawArgViewModel[] = [];
        for (let raw of templateArgs) {
            let template = new RawArgViewModel(raw);
            tempalteViewModels.push(template);
        }
        this.mArgs = tempalteViewModels;
    }

    private clearArgs() {
        this.mArgs = undefined;
    }

    get Args(): RawArgViewModel[] {
        return this.mArgs;
    }

    get IsArgsEnabled(): boolean {
        return this.mArgs != undefined || this.mArgs != null;
    }

    get HasError(): boolean {
        return !this.mIsArgsEnabled;
    }

    get ErrorMessage(): string {
        return this.mErrorMessage;
    }

    ngOnInit(): void {

    }

    async Start(): Promise<void> {
        let valid = true;
        let args: RawArg[] = [];
        for (let arg of this.mArgs) {
            let ret = arg.Validate();
            valid = valid && ret;
        }
        if (!valid) {
            this.mIsOperationEnabled = valid;
            this.mErrorMessage = CannotRun;
        }
    }

    async Stop(): Promise<void> {

    }
}
