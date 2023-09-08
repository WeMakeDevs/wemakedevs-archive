import { SingleCoursesPageHeader } from '@/content/courses/CoursesPageContent';

import arsalan from '@/assets/courses/testimonials/arsalan.jpg';
import Manoj from '@/assets/courses/testimonials/Manoj.jpg';
import muhammad from '@/assets/courses/testimonials/muhammad.jpg';

const DsaPageContent = {
  header: SingleCoursesPageHeader,
  content: {
    title: {
      highlight: 'Data Structures & Algorithms',
      normal: '(DSA) Course',
    },
    subtitle:
      'Master the thought process behind solving problems, and clear interviews of top tier companies......',
    videoLink: 'https://www.youtube.com/embed/rZ41y93P2Qo',
    buttons: [
      {
        name: 'Notes & Assignment',
        href: 'https://github.com/kunal-kushwaha/DSA-Bootcamp-Java',
      },
      {
        name: 'Playlist',
        href: 'https://www.youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ',
      },
    ],
    syllabus: [
      {
        title: 'Introduction to programming',
        description: 'Types of languages. Memory management.',
      },
      {
        title: 'Flow of program',
        description: 'Flowcharts, pattern questions and pseudocode.',
      },
      {
        title: 'Introduction to Java',
        description:
          'How Java works, setup installation, input and output, conditionals and loops, data types, and coding best practices.',
      },
      {
        title: 'Functions / Methods',
        description:
          'Introductiob to functions, scoping, shadowing, functional arguments, function overloading.',
      },
      {
        title: 'Arrays and ArrayList',
        description:
          'How arrays work in Java, memory management, input and output, ArrayList introduction.',
      },
      {
        title: 'Searching',
        description: 'Linear, binary, modified binary search.',
      },
      {
        title: 'Sorting',
        description:
          'Insertion, selection, bubble, cyclic, merge, quick, count, radix, and heap sort.',
      },
      {
        title: 'Time and space complexity',
        description:
          'Introduction, various cases, linear recurrence, divide-n-conquer recurrence, notations, solving recurrences, space complexity, NP-completeness.',
      },
      {
        title: 'Mathematics',
        description:
          'Bitwise operators, range of data types, prime numbers, factors, modulo properties, number theory.',
      },
      {
        title: 'Recursion',
        description:
          'Introduction, how to master, flow of program, tree building, tail recursion, sorting, string, array, pattern, subset questions.',
      },
      {
        title: 'Backtracking',
        description:
          'Introduction, Maze problems, N-queens, N-knights, sudoku solver.',
      },
      {
        title: 'Object oriented programming',
        description:
          'Introduction, classes, objects, this, properties, overloading, overriding, static, packages, access control, interfaces, abstract classes, annotations, singleton class, keywords, Object class, generics, expection handling, Vector class, Collections framework, lmabda expressions, enums.',
      },
      {
        title: 'Linked List',
        description:
          'Introduction, singly, doubly, circular, fast and slow pointer, cycle detection, reversal of Linked List, Linked List with recursion.',
      },
      {
        title: 'Stacks and Queues',
        description:
          'Introduction, push efficient, pop efficient, queue using stack and vice versa, circular queue.',
      },
      {
        title: 'Trees',
        description:
          'Introduction to binary trees, binary search tress, DFS, BFS, AVL trees, segment trees.',
      },
      {
        title: 'Hashmaps',
        description:
          'Introduction, theory, comparisions, limitations, map using Linked List, map using Hash, sorting, chaining, probing, huffman-encoder.',
      },
      {
        title: 'Dynamic programming',
        description:
          'Introduction, recursion, recursion + dp, iteration, iteration + space optimized, complexity analysis, 0/1 Knapsack, subset questions, unbounded knapsack, subsequence questions, string dp.',
      },
      {
        title: 'Heaps',
        description:
          'Introduction, theory, priority queue, heapsort, two heaps method, k-way merge, top-k elements, interval problems.',
      },
      {
        title: 'Graph theory',
        description:
          "Introduction, BFS, DFS, components, minimum spanning trees, Kruskal, Prims, Dijkstra's shortest path, topological sort, Bellman ford, A* pathfinding.",
      },
      {
        title: 'Additonal topics',
        description:
          "Greedy algorithms, tries, sliding window, two pointer, kadane's algorithm, and more!",
      },
    ],
    testimonials: [
      {
        src: arsalan,
        description:
          '#100DaysOfCode Resumed my DSA after so many days. Right Now learning String, Subset and Subsequence question from Recursion playlist of @kunalstwt #DSAWithKunal',
        from: 'ARSALAN',
        designation: '@Arsalan_0101',
      },
      {
        src: muhammad,
        description:
          'Started with #DSAWithKunal and #LearningWithApoorv and many other resources for Web development. I will now be shifting towards technical blogs about Web Development and DSA. Whatever I learn, will come in the form of blogs and threads.',
        from: 'MUHAMMAD NOORANI',
        designation: '@MuhammadN_twts',
      },
      {
        src: Manoj,
        description:
          "🎯 Thrilled to have cracked interview questions from major tech giants like Facebook, all thanks to the invaluable guidance of Kunal Kushwaha!🏆 I've compiled my solutions on GitHub for those prepping for technical interviews.     #interviewsuccess #DSAWithKunal",
        from: 'MANOJ KUMAR',
        designation: '@manojkumarbonala',
      },
    ],
    btnText: 'See more testimonials #DSAWithKunal',
    btnLink: 'https://twitter.com/search?q=%23DSAWithKunal&src=hashtag_click',
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

export default DsaPageContent;
