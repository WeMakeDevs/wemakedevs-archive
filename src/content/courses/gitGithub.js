import { SingleCoursesPageHeader } from '@/content/courses/CoursesPageContent';

const GitGithubPageContent = {
  header: SingleCoursesPageHeader,
  content: {
    title: {
      highlight: 'Git & Github',
      normal: 'Bootcamp',
    },
    subtitle:
      'Git is a popular version control system. GitHub is the largest host of source code in the world.',
    videoLink: 'https://www.youtube.com/embed/apGV9Kg7ics',
    buttons: [
      {
        name: 'Lecture',
        href: 'https://www.youtube.com/watch?v=apGV9Kg7ics',
      },
    ],
    syllabus: [
      {
        title: 'Introduction to version control and Git',
        description:
          "Explain what version control is and why it's important. Introduce Git as a version control system and its basic concepts such as commits, branches, and pull requests.",
      },
      {
        title: 'Setting up a GitHub account',
        description:
          'Explain how to sign up for a GitHub account and configure your profile.',
      },
      {
        title: 'Creating a repository',
        description:
          'Demonstrate how to create a repository on GitHub, including adding a README file and choosing a license.',
      },
      {
        title: 'Making changes to a repository',
        description:
          'Show how to make changes to a repository, including adding, editing, and deleting files. Explain the use of the Git command line interface to stage, commit, and push changes.',
      },
      {
        title: 'Branching and merging',
        description:
          'Explain the concept of branching in Git and demonstrate how to create, switch between, and merge branches.',
      },
      {
        title: 'Pull requests',
        description:
          'Explain what pull requests are and how they can be used to collaborate with others on a repository. Show how to create a pull request, review changes, and merge the changes into the master branch.',
      },
      {
        title: 'Issues and project management',
        description:
          'Demonstrate how to use the issue tracker and project management features in GitHub to track bugs, tasks, and progress.',
      },
      {
        title: 'GitHub Pages',
        description:
          'Explain what GitHub Pages are and how to use them to create a static website for your repository',
      },
      {
        title: 'GitHub Actions',
        description:
          'Introduce GitHub Actions, a powerful CI/CD tool, and demonstrate how to use it to automate tasks and deploy applications.',
      },
      {
        title: 'Collaborating on a repository',
        description:
          'Show how to collaborate with others on a repository, including forking a repository, contributing changes, and resolving merge conflicts.',
      },
    ],
    tweetId: [
      '1620824479395090435',
      '1620489706994806785',
      '1620828035804184579',
      '1617535692497883138',
      '1487399069383155716',
      '1544248976664567811',
    ],
  },

  faq: [
    {
      id: 'FAQ1',
      question: 'Are all of your courses free?',
      answer:
        'Yes! All of our courses are and will always be free as well as high quality. You can find those on our YouTube channel.',
    },
    {
      id: 'FAQ2',
      question: 'Is your community beginner friendly?',
      answer:
        'Yes! Even non-coders are welcome. Our courses are designed in such a way that anyone can get started with it. Even people who have never programmed before!',
    },
    {
      id: 'FAQ3',
      question: 'How do I join your community?',
      answer:
        'Make sure to join our Discord and Telegram channels. You can find us on all social media platforms as @wemakedevs',
    },
    {
      id: 'FAQ4',
      question: 'How do I get my doubts resolved?',
      answer:
        'Join our Discord community along with thousands of others and feel free to ask your doubts in the relevant channels.',
    },
    {
      id: 'FAQ5',
      question: 'Do you provide notes and assignments?',
      answer:
        "Yes. It's crucial to revise the topics and self practice after watching the tutorials and we provide materials for the same.",
    },
    {
      id: 'FAQ6',
      question: 'Do you provide mentorship and guidance?',
      answer:
        'Yes. That is the highlight of our community. Get expert guidance from industry experts from around the world. You can learn more and get inspired by their stories and roadmaps via the podcast Open Source Cafe.',
    },
  ],
};

export default GitGithubPageContent;
