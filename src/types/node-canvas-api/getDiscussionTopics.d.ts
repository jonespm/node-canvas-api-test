export = getDiscussionTopics;
/**
 * Retrives all discussion topics in course
 * @param {Number} courseId the course id.
 * @return {Promise} A promise that resolves to a list of Discussion topics
 */
declare function getDiscussionTopics(courseId: number): Promise<any>;
