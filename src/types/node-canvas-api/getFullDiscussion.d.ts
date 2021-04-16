export = getFullDiscussion;
/**
 * Retrives all discussion topics in course
 * @param {Number} courseId the course id.
 * @param {Number} topicId the discussion topic id.
 * @return {Promise} A promise that resolves to a discussion topic view object
 */
declare function getFullDiscussion(courseId: number, topicId: number): Promise<any>;
