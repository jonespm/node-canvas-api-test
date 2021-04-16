export = getQuizQuestions;
/**
 * Retrieves all questions in a quiz.
 * @param {Number} courseId the course id.
 * @param {Number} quizId the quiz id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Quiz submission objects: https://canvas.instructure.com/doc/api/submissions.html
 */
declare function getQuizQuestions(courseId: number, quizId: number, ...options: any[]): Promise<any>;
