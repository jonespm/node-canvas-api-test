export = getAnalytics;
/**
 * Retrieves activity analytics for specified account.
 * @param {Number} accountId the account id.
 * @return {Promise} A promise that resolves to a list of Activity objects
 */
declare function getAnalytics(accountId: number): Promise<any>;
