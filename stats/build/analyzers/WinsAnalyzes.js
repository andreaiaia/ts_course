"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalyzes = void 0;
var MatchResult_1 = require("../MatchResult");
var WinsAnalyzes = /** @class */ (function () {
    function WinsAnalyzes(team) {
        this.team = team;
    }
    WinsAnalyzes.prototype.run = function (matches) {
        var wins = 0;
        for (var _i = 0, matches_1 = matches; _i < matches_1.length; _i++) {
            var match = matches_1[_i];
            if ((match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin)
                || (match[2] === 'Man United' && match[5] === MatchResult_1.MatchResult.AwayWin)) {
                wins++;
            }
        }
        return "Team ".concat(this.team, " won ").concat(wins, " matches");
    };
    return WinsAnalyzes;
}());
exports.WinsAnalyzes = WinsAnalyzes;
