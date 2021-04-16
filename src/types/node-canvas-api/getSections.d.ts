export = getSections;
/**
 * Retrieves all sections in course
 * @param {Number} courseId the course id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Section objects: https://canvas.instructure.com/doc/api/sections.html
 */
declare function getSections(courseId: number, ...options: any[]): Promise<any>;
