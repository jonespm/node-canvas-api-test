export = getCourses;
/**
 * Retrieves all courses in a deptId
 * @param {Number} deptId the dept id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a Course object: https://canvas.instructure.com/doc/api/courses.html#Course
*/
declare function getCourses(deptId: number, ...options: any[]): Promise<any>;
