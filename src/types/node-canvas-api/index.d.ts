declare module 'node-canvas-api' {
    export var batchCopyCourseContent: (listOfSourceAndTargetCourseIds: any[]) => Promise<any>;
    export var copyCourseContent: (sourceCourseId: number, targetCourseId: number) => Promise<any>;
    export var createCourse: typeof import("./createCourse");
    export var createCustomGradebookColumn: typeof import("./createCustomGradebookColumn");
    export var createUserCourseEnrollment: typeof import("./createUserCourseEnrollment");
    export var createUserSectionEnrollment: typeof import("./createUserSectionEnrollment");
    export var deleteAllCustomGradebookColumns: (courseId: number) => Promise<any>;
    export var downloadFile: (fileId: number, path: string) => Promise<any>;
    export var deleteCustomGradebookColumn: typeof import("./deleteCustomGradebookColumn");
    export var getAccountIds: () => Promise<any>;
    export var getAccounts: typeof import("./getAccounts");
    export var getAllCoursesInAccount: (accountId: number, ...options: any[]) => Promise<any>;
    export var getAllCoursesInDept: (accountId: number, deptName: string, ...options: any[]) => Promise<any>;
    export var getAllCourseSyllabiInAccount: (accountId: number) => Promise<any>;
    export var getAnalytics: typeof import("./getAnalytics");
    export var getAssignments: typeof import("./getAssignments");
    export var getCourses: typeof import("./getCourses");
    export var getCoursesByUser: typeof import("./getCoursesByUser");
    export var getCustomGradeBookColumns: typeof import("./getCustomGradeBookColumns");
    export var getDeptIdsInAccount: (accountId: number) => Promise<any>;
    export var getProgress: typeof import("./getProgress");
    export var getSubaccounts: typeof import("./getSubaccounts");
    export var getSyllabusOfCourse: typeof import("./getSyllabusOfCourse");
    export var getUserPageViews: typeof import("./getUserPageViews");
    export var getUsersInAccount: typeof import("./getUsersInAccount");
    export var getUsersInCourse: typeof import("./getUsersInCourse");
    export var hideCustomGradebookColumn: typeof import("./hideCustomGradebookColumn");
    export var hideCustomGradebookColumnsByName: (courseId: number, ...gradebookColumnNames: any[]) => Promise<any>;
    export var putStudentNumberInExistingCustomColumn: (courseId: number, customGradeBookId: number) => Promise<any>;
    export var putStudentNumberInGradeColumn: typeof import("./putStudentNumberInGradeColumn");
    export var putStudentNumbersInGradebook: (courseId: number, columnTitle?: string, columnPosition?: number) => Promise<any>;
    export var showCustomGradebookColumn: typeof import("./showCustomGradebookColumn");
    export var showCustomGradebookColumnsByName: (courseId: number, ...gradebookColumnNames: any[]) => Promise<any>;
    export var checkProgressStatus: typeof import("./checkProgressStatus");
    export var getOptions: {
        users: {
            search: (term: any) => string;
            sort: {
                username: string;
                email: string;
                sis_id: string;
                last_login: string;
            };
            order: {
                asc: string;
                desc: string;
            };
            enrollmentType: {
                teacher: string;
                student: string;
                student_view: string;
                ta: string;
                observer: string;
                designer: string;
            };
            include: {
                email: string;
                enrollments: string;
                locked: string;
                avatar_url: string;
                test_student: string;
                bio: string;
                custom_links: string;
                current_grading_period_scores: string;
                term: string;
                students: string;
                user: string;
            };
            userIds: (id: any) => string;
            enrollmentState: {
                active: string;
                invited: string;
                rejected: string;
                completed: string;
                inactive: string;
            };
        };
        courses: {
            include: {
                needs_grading_count: string;
                syllabus_body: string;
                public_description: string;
                total_scores: string;
                current_grading_period_scores: string;
                term: string;
                course_progress: string;
                sections: string;
                storage_quota_used_mb: string;
                total_students: string;
                passback_status: string;
                favorites: string;
                teachers: string;
                observed_users: string;
            };
            state: {
                unpublished: string;
                available: string;
                completed: string;
                deleted: string;
            };
            enrollmentState: {
                active: string;
                invited_or_pending: string;
                completed: string;
            };
        };
        account: {
            with_enrollments: string;
            enrollment_type: (role: any) => string;
            published: string;
            completed: string;
            blueprint: string;
        };
        submissions: {
            rubric_assessment: string;
            submission_comments: string;
            submission: string;
        };
        quiz: {
            quiz: string;
        };
        rubric: {
            assessments: string;
            graded_assessments: string;
            peer_assessments: string;
            data_assessment: string;
        };
    };
    export var getUser: typeof import("./getUser");
    export var getRubricsInCourse: typeof import("./getRubricsInCourse");
    export var getRubric: typeof import("./getRubric");
    export var getAssignmentSubmissions: typeof import("./getAssignmentSubmissions");
    export var getEnrollmentsInCourse: typeof import("./getEnrollmentsInCourse");
    export var getSections: typeof import("./getSections");
    export var getDiscussionTopics: (courseId: number) => Promise<any>;
    export var getDiscussionTopic: (courseId: number, topicId: number) => Promise<any>;
    export var getFullDiscussion: (courseId: number, topicId: number) => Promise<any>;
    export var getSelf: typeof import("./getSelf");
    export var getOutcome: typeof import("./getOutcome");
    export var getQuizSubmissions: typeof import("./getQuizSubmissions");
    export var getQuizSubmissionEvents: typeof import("./getQuizSubmissionEvents");
    export var getQuizQuestions: typeof import("./getQuizQuestions");
    export var getCourseAnalytics: typeof import("./getCourseAnalytics");
    export var getPlannerItemsByUser: typeof import("./getPlannerItemsByUser");
    export var getGroupsInCourse: (courseId: number) => Promise<any>;
    export var getGroupDiscussionTopics: (groupId: number) => Promise<any>;
    export var getFullGroupDiscussion: (groupId: number, topicId: number) => Promise<any>;
    export var getGroupDiscussionTopic: (groupId: number, topicId: number) => Promise<any>;
    export var getQuizSubmission: (courseId: number, quizId: number, submissionId: any) => Promise<any>;
    export var postAssignmentSubmissionComment: typeof import("./postAssignmentSubmissionComment");
    export var deleteSubmissionComment: typeof import("./deleteSubmissionComment");
}