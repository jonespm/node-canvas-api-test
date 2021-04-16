export = getSubaccounts;
/**
 * Retrieves all subaccounts in an account
 * @param {Number} accountId the course id.
 * @return {Promise} A promise that resolves to a Account object: https://canvas.instructure.com/doc/api/accounts.html#Account
 */
declare function getSubaccounts(accountId: number): Promise<any>;
