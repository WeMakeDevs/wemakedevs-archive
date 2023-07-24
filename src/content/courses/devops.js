import { SingleCoursesPageHeader } from '@/content/courses/CoursesPageContent';

const DevopsPageContent = {
  header: SingleCoursesPageHeader,
  content: {
    title: {
      highlight: 'DevOps',
      normal: 'Bootcamp',
    },
    subtitle:
      'Learn about DevOps, starting from the basics, going in depth into every topic, mastering multiple in-demand tools, and become a DevOps engineer',
    videoLink: 'https://www.youtube.com/embed/ZbG0c87wcM8',
    buttons: [
      {
        name: 'Notes & Assigment',
        href: 'https://github.com/kunal-kushwaha/DevOps-Bootcamp',
      },
      {
        name: 'Playlist',
        href: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnoqBXdMwUTRod4Gi3eac2Ak',
      },
    ],
    syllabus: [
      {
        title: 'Introduction to networking',
        description:
          'Networking fundamentals, OSI layer protocols, port forwarding, how the internet works, command line tools, and more.',
      },
      {
        title: 'Command line tools',
        description:
          'Various command line tools, bash scripting, regex, introduction to git, and more.',
      },
      {
        title: 'Kubernetes',
        description:
          'Introduction, architecture, set-up, objects, networking, storage, HA, monitoring, logging, production-ready applications.',
      },
      {
        title: 'Servers',
        description: 'Introduction to web-servers, Nginx, and more.',
      },
      {
        title: 'Infrastructure as code',
        description:
          'Infrastructure provisioning, Terraform, Pulumi, configuration management, and more.',
      },
      {
        title: 'Service mesh',
        description: 'Istio, Envoy, Linkerd, and more.',
      },
      {
        title: 'Working with cloud providers',
        description: 'Learn about cloud providers, design patterns, and more.',
      },
      {
        title: 'Chaos engineering',
        description: 'The next step in testing.',
      },
      {
        title: 'Introduction to Linux',
        description:
          'Learn about the essentials of working with Linux, including some important commands.',
      },
      {
        title: 'Docker',
        description:
          'Introduction to containers, hands-on demos, concepts, architecture, images, networking, best practices, development profiles, Docker Compose, Docker Swarm.',
      },
      {
        title: 'GoLang',
        description: 'Complete GoLang tutorial.',
      },
      {
        title: 'CI/CD',
        description:
          'Setting up a CI/CD pipeline, GitHub Actions, Circle CI, and more.',
      },
      {
        title: 'Monitoring and logging',
        description:
          'Monitoring tools and practices, Prometheus, Thanos, Grafana, Jaeger, New Relic, and more.',
      },
      {
        title: 'GitOps',
        description:
          'Manage infrastructure and application configurations using Git.',
      },
      {
        title: 'Testing',
        description: 'Create robust applications with application testing.',
      },
      {
        title: 'Cloud native tools deep dive',
        description:
          'Navigating the Cloud Native tools landscape with a hands-on deep dive to get you started with the use-cases and contributor journey of various projects',
      },
    ],
    tweetId: [
      '1620824479395090435',
      '1620081639199244288',
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
        'Make sure to join our Discord and Telegram channels. You can find us on all socials media platforms as @wemakedevs',
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

export default DevopsPageContent;
