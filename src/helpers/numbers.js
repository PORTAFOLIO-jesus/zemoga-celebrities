/**
 * 
 * @param {decimal number} num 
 * @returns number rounded with one decimals
 */
export function roundWithToDecimals(num) {
    return +(Math.round(num + "e+1") + "e-1");
}

/**
 * 
 * @param {number} goodVotes 
 * @param {number} badVotes 
 * @returns an object with percent, based in goodVotes and badVotes
 */
export function percentGoodBadVotes(goodVotes, badVotes) {
    const total = goodVotes + badVotes;
    const percentBadVotes = (100 * badVotes) / total;
    const percentGoodVotes = (100 * goodVotes) / total;
    const badPercentRounded = roundWithToDecimals(percentBadVotes);
    const goodPercentRounded = roundWithToDecimals(percentGoodVotes);

    return {
        badPercentRounded,
        goodPercentRounded
    }
}

