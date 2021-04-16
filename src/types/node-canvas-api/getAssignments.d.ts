export = getAssignments;
/**
 * Retrieves all assignments in a course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Assignment objects: https://canvas.instructure.com/doc/api/assignments.html#Assignment
 */
declare function getAssignments(courseId: number, ...options: any[]): Promise<any>;
