export = getUserPageViews;
/**
 * Retrieves all PageViews of a user
 * @param {Number} userId get pageviews of user.
 * @return {Promise} A promise that resolves to a list of PageView objects: https://canvas.instructure.com/doc/api/users.html#PageView
 */
declare function getUserPageViews(userId: number, ...options: any[]): Promise<any>;
