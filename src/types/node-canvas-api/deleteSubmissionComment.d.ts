export = deleteSubmissionComment;
/**
 * Delete Submission comment
 * @param {Number} courseId the course ID of the target course.
 * @param {Number} assignmentId the assignment id.
 * @param {Number} userId the user id.
 * @param {Number} commentId the comment id.
 * @return {Promise} A SubmissionComment object: https://canvas.instructure.com/doc/api/submissions.html#SubmissionComment
 */
declare function deleteSubmissionComment(courseId: number, assignmentId: number, userId: number, commentId: number): Promise<any>;
