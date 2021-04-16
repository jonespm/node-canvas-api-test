export = getUsersInCourse;
/**
 * Retrieves all users in course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of User objects: https://canvas.instructure.com/doc/api/users.html#User
 */
declare function getUsersInCourse(courseId: number, ...options: any[]): Promise<any>;
