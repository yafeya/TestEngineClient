import { Injectable } from '@angular/core';
import { HttpClient } from './httpclient';
import 'rxjs/add/operator/toPromise';

import { TestSolutionUrl, TestSolution, ConfigInfo, RawArg } from '../models/index';

@Injectable()
export class SolutionProvider {
    private mUrls: TestSolutionUrl[] = [];

    constructor(private httpClient: HttpClient) {

    }

    async Initialize(): Promise<void> {
        this.mUrls = await this.GetTestSolutionUrls();
    }

    async GetTestSolutions(): Promise<TestSolution[]> {
        let solutions: TestSolution[] = [];
        for (let url of this.mUrls) {
            let solution = await this.GetSolution(url);
            solutions.push(solution);
        }
        return solutions;
    }

    private async GetSolution(url: TestSolutionUrl): Promise<TestSolution> {
        let solution: TestSolution;
        let getSolutionUrl = `${url.DescriptionUrl}${'GetEngineDescription'}`;
        let response = await this.httpClient.Get(getSolutionUrl);
        if (response != undefined) {
            solution = new TestSolution();
            solution.Url = url;
            solution.Name = response.Name;
            solution.Description = response.Description;
            solution.Location = response.Location;

            let config: ConfigInfo = this.getConfiguration(response);
            solution.Configuration = config;
        }
        return solution;
    }

    private getConfiguration(response: any) {
        let config: ConfigInfo;
        let rawConfig = response.Configuration;
        if (rawConfig != undefined) {
            config = new ConfigInfo();
            config.NeedArgs = rawConfig.NeedArgs;
            config.LengthLimit = rawConfig.LengthLimit;
            let argsTemplate: RawArg[] = this.getArgsTemplate(rawConfig);
            config.TemplateArgs = argsTemplate;
        }
        return config;
    }

    private getArgsTemplate(rawConfig: any) {
        let argsTemplate: RawArg[];
        let rawTemplate = rawConfig.TemplateArgs;
        if (rawTemplate != undefined) {
            argsTemplate = [];
            for (let rawItem in rawTemplate) {
                let rawArg = rawTemplate[rawItem];
                let arg = new RawArg();
                arg.Name = rawArg.Name;
                arg.Type = rawArg.Type;
                argsTemplate.push(arg);
            }
        }
        return argsTemplate;
    }

    private async GetTestSolutionUrls(): Promise<TestSolutionUrl[]> {
        //ToDo: used to query the urls from server.
        let urls: TestSolutionUrl[] = [];
        urls.push(new TestSolutionUrl('http://127.0.0.1:8250/api/description/', 'http://127.0.0.1:8250/api/testengine'));
        urls.push(new TestSolutionUrl('http://127.0.0.1:9250/api/description/', 'http://127.0.0.1:9250/api/testengine'));
        return urls;
    }
}
