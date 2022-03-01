import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

const matchReader = MatchReader.fromCsv('football.csv');
const summary = Summary.winsAnalyzesWithHtmlReport('Man United');

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);