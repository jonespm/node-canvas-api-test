export = getQuizSubmission;
/**
 * Retrives a single submission
 * @param {Number} courseId the course id.
 * @param {Number} quizId the quiz id.
 * @return {Promise} A promise that resolves to a submission Object
 */
declare function getQuizSubmission(courseId: number, quizId: number, submissionId: any): Promise<any>;
