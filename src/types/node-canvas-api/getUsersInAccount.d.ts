export = getUsersInAccount;
/**
 * Retrieves all users under an Account
 * @param {Number} accountId the account id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of User objects: https://canvas.instructure.com/doc/api/users.html#User
 */
declare function getUsersInAccount(accountId: number, ...options: any[]): Promise<any>;
