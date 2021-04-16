export = getCoursesByUser;
/**
 * Get all courses a user is enrolled in
 * @param {Number} userId the user id.
 * @return {Promise} A promise that resolves to an array of Course object: https://canvas.instructure.com/doc/api/courses.html
*/
declare function getCoursesByUser(userId: number): Promise<any>;
