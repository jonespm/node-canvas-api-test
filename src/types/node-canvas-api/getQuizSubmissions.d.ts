export = getQuizSubmissions;
/**
 * Retrieves all quiz submissions in a course
 * @param {Number} courseId the course id.
 * @param {Number} quizId the quiz id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Quiz submission objects: https://canvas.instructure.com/doc/api/submissions.html
 */
declare function getQuizSubmissions(courseId: number, quizId: number, ...options: any[]): Promise<any>;
