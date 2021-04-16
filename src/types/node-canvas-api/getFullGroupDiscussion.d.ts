export = getFullGroupDiscussion;
/**
 * Retrives all discussion topics in group
 * @param {Number} groupId the group id.
 * @param {Number} topicId the discussion topic id.
 * @return {Promise} A promise that resolves to a discussion topic view object
 */
declare function getFullGroupDiscussion(groupId: number, topicId: number): Promise<any>;
