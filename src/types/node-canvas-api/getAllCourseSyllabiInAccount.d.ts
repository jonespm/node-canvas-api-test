export = getAllCourseSyllabiInAccount;
/**
 * Returns the syllabi of all courses contained under an Account
 * If a course does not have a syllabus defined, the syllabus_body will have null.
 * @param {Number} accountId the account ID for Canvas
 * @return {Promise} A promise that resolves to an array of course objects, with syllabus
 */
declare function getAllCourseSyllabiInAccount(accountId: number): Promise<any>;
