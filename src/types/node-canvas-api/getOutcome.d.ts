export = getOutcome;
/**
 * Retrieves an outcome
 * @param {Number} outcomeId the outcome id.
 * @return {Promise} A promise that resolves to an Outcome object: https://canvas.instructure.com/doc/api/outcomes.html
*/
declare function getOutcome(outcomeId: number): Promise<any>;
