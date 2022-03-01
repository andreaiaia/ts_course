import { MatchData } from "./MatchData";
import { WinsAnalyzes } from "./analyzers/WinsAnalyzes";
import { HtmlReport } from "./HtmlReport";

export interface Analyzer {
    run(matches: MatchData[]): string;
}

export interface OutputTarget {
    print(report: string): void;
}

export class Summary {
    static winsAnalyzesWithHtmlReport(team: string): Summary {
        return new Summary(
            new WinsAnalyzes(team),
            new HtmlReport()
        );
    }
    constructor(
        public analyzer: Analyzer, 
        public outputTarget: OutputTarget
    ){}

    buildAndPrintReport(matches: MatchData[]):void {
        const output = this.analyzer.run(matches);
        this.outputTarget.print(output);
    }
}