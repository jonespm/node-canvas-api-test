export = getPlannerItemsByUser;
/**
 * Get the planner items for a user
 * @param {Number} userId the user id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to an array of planner items: https://canvas.instructure.com/doc/api/planner.html#method.planner.index
*/
declare function getPlannerItemsByUser(userId: number, ...options: any[]): Promise<any>;
