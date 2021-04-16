export = getRubric;
/**
 * Retrieves a single rubric
 * @param {Number} courseId the course id.
 * @param {Number} rubricId the rubric id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a Rubric object: https://canvas.instructure.com/doc/api/rubrics.html
 */
declare function getRubric(courseId: number, rubricId: number, ...options: any[]): Promise<any>;
