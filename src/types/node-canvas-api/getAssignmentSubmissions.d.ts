export = getAssignmentSubmissions;
/**
 * Retrieves all assignment submissions in a course
 * @param {Number} courseId the course id.
 * @param {Number} assignmentId the assignment id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Assignment submission objects: https://canvas.instructure.com/doc/api/submissions.html
 */
declare function getAssignmentSubmissions(courseId: number, assignmentId: number, ...options: any[]): Promise<any>;
