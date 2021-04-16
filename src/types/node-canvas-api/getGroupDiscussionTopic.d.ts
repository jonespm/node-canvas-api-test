export = getGroupDiscussionTopic;
/**
 * Retrives a single discussion topic from a group
 * @param {Number} groupId the group id.
 * @param {Number} topicId the discussion topic id.
 * @return {Promise} A promise that resolves to a discussion topic Object
 */
declare function getGroupDiscussionTopic(groupId: number, topicId: number): Promise<any>;
