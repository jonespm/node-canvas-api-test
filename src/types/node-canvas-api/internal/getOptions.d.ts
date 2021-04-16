export namespace users {
    function search(term: any): string;
    namespace sort {
        const username: string;
        const email: string;
        const sis_id: string;
        const last_login: string;
    }
    namespace order {
        const asc: string;
        const desc: string;
    }
    namespace enrollmentType {
        const teacher: string;
        const student: string;
        const student_view: string;
        const ta: string;
        const observer: string;
        const designer: string;
    }
    namespace include {
        const email_1: string;
        export { email_1 as email };
        export const enrollments: string;
        export const locked: string;
        export const avatar_url: string;
        export const test_student: string;
        export const bio: string;
        export const custom_links: string;
        export const current_grading_period_scores: string;
        export const term: string;
        export const students: string;
        export const user: string;
    }
    function userIds(id: any): string;
    namespace enrollmentState {
        const active: string;
        const invited: string;
        const rejected: string;
        const completed: string;
        const inactive: string;
    }
}
export namespace courses {
    export namespace include_1 {
        export const needs_grading_count: string;
        export const syllabus_body: string;
        export const public_description: string;
        export const total_scores: string;
        const current_grading_period_scores_1: string;
        export { current_grading_period_scores_1 as current_grading_period_scores };
        const term_1: string;
        export { term_1 as term };
        export const course_progress: string;
        export const sections: string;
        export const storage_quota_used_mb: string;
        export const total_students: string;
        export const passback_status: string;
        export const favorites: string;
        export const teachers: string;
        export const observed_users: string;
    }
    export { include_1 as include };
    export namespace state {
        export const unpublished: string;
        export const available: string;
        const completed_1: string;
        export { completed_1 as completed };
        export const deleted: string;
    }
    export namespace enrollmentState_1 {
        const active_1: string;
        export { active_1 as active };
        export const invited_or_pending: string;
        const completed_2: string;
        export { completed_2 as completed };
    }
    export { enrollmentState_1 as enrollmentState };
}
export namespace account {
    export const with_enrollments: string;
    export function enrollment_type(role: any): string;
    export const published: string;
    const completed_3: string;
    export { completed_3 as completed };
    export const blueprint: string;
}
export namespace submissions {
    const rubric_assessment: string;
    const submission_comments: string;
    const submission: string;
}
export namespace quiz {
    const quiz_1: string;
    export { quiz_1 as quiz };
}
export namespace rubric {
    const assessments: string;
    const graded_assessments: string;
    const peer_assessments: string;
    const data_assessment: string;
}
