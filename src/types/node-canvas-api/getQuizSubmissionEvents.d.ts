export = getQuizSubmissionEvents;
/**
 * Retrieves all quiz submission events in a course
 * @param {Number} courseId the course id.
 * @param {Number} quizId the quiz id.
 * @param {Number} submissionId the submission id.
 * @param {Array} options an array of options to include.
 * @return {Promise} A promise that resolves to a list of Quiz submission event objects: https://canvas.instructure.com/doc/api/submissions.html
 */
declare function getQuizSubmissionEvents(courseId: number, quizId: number, submissionId: number, ...options: any[]): Promise<any>;
