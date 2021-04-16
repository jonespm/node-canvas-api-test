export = getDiscussionTopics;
/**
 * Retrives a single discussion topic
 * @param {Number} courseId the course id.
 * @param {Number} topicId the discussion topic id.
 * @return {Promise} A promise that resolves to a discussion topic Object
 */
declare function getDiscussionTopics(courseId: number, topicId: number): Promise<any>;
