import { ConfigInfo } from './ConfigInfo';
import { TestSolutionUrl } from './TestSolutionUrl';

export class TestSolution {
    Name: string;
    Description: string;
    Location: string;
    Configuration: ConfigInfo = new ConfigInfo();

    Url: TestSolutionUrl;
}

export class TestSolutionViewModel {
    constructor(solution: TestSolution) {
        this.RawModel = solution;
    }

    RawModel: TestSolution;
    IsSelected: boolean;
    OnSelectedChanged: (selected: boolean) => void;
}