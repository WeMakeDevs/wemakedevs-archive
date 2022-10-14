import StructuredLearningIcon from '../../bin/structured-learning-icon.svg';
import NotesIcon from '../../bin/notes-icon.svg';
import AssignmentsIcon from '../../bin/assignment-icon.svg';
import DoubtSupportIcon from '../../bin/doubt-support-icon.svg';
import GuidanceIcon from '../../bin/guidance-icon.svg';
import ProjectsIcon from '../../bin/projects-icon.svg';

const InspireDataSource = function() {
    return [
        {
            title: "Structured Learning",
            description: "Learning made easy. Complete syllabus is covered while never compromising on quality.",
            icon: StructuredLearningIcon
        },
        {
            title: "Notes",
            description: "Get complete notes for all lectures so that you can focus on learning and practising.",
            icon: NotesIcon
        },
        {
            title: "Assignments",
            description: "Assignments and questions are provided to understand the concepts well.",
            icon: AssignmentsIcon
        },
        {
            title: "Doubt Support",
            description: "Clear all your doubts through LIVE discord support by talking to your peers and experts in our sever.",
            icon: DoubtSupportIcon
        },
        {
            title: "Guidance",
            description: "Get expert guidance with career, open source and internships, jobs around the world.",
            icon: GuidanceIcon
        },
        {
            title: "Projects",
            description: "Learn by doing and apply your knowledge via projects and open source contributions.",
            icon: ProjectsIcon
        }
    ]
}

export { InspireDataSource };