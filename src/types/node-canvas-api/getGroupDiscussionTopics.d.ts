export = getGroupDiscussionTopics;
/**
 * Retrives all discussion topics in group
 * @param {Number} groupId the group id.
 * @return {Promise} A promise that resolves to a list of Discussion topics
 */
declare function getGroupDiscussionTopics(groupId: number): Promise<any>;
