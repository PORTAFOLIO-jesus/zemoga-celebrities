import { percentGoodBadVotes, roundWithToDecimals } from "../../../src/helpers/numbers";

describe('Testing functions of numbers helper', () => {

    test('should round a number with one decimal ', () => {
        const numberToRound = 2.56998;
        const actualValue = roundWithToDecimals(numberToRound);
        const expectedValue = 2.6;
        expect(actualValue).toBe(expectedValue);
    })

    test('should return a percet of bad votes, based in goodVotes and badVotes', () => {
        const goodVotes = 43;
        const badVotes = 23;
        const actualValue = percentGoodBadVotes(goodVotes, badVotes);
        const expectedValue = { badPercentRounded: 34.8, goodPercentRounded: 65.2 }
        expect(actualValue.badPercentRounded).toBe(expectedValue.badPercentRounded);
    })
    test('should return a percet of good votes, based in goodVotes and badVotes', () => {
        const goodVotes = 43;
        const badVotes = 23;
        const actualValue = percentGoodBadVotes(goodVotes, badVotes);
        const expectedValue = { badPercentRounded: 34.8, goodPercentRounded: 65.2 }
        expect(actualValue.goodPercentRounded).toBe(expectedValue.goodPercentRounded);
    })
})

