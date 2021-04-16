export = getUser;
/**
 * Retrieves a user by the user ID
 * @param {Number} userId user ID.
 * @return {Promise} A promise that resolves to a User object: https://canvas.instructure.com/doc/api/users.html#User
 */
declare function getUser(userId: number): Promise<any>;
