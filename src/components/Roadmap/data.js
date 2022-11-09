import React from "react";
import {
  Android,
  Backend,
  Blockchain,
  Devops,
  Devrel,
  FullStack,
  Frontend,
  OpenSource,
  Mentorship,
} from "../../assets/roadmaps/index";

export const mentorshipData = {
  title: "Learn, Apply, Get hired. All for free.",
  description:
    "Are you prepared to embark on your quest to receive mentoring and land a job? You've arrived exactly where you need to be. Follow the roadmaps, educate yourself, and then apply for positions.",
  image: Mentorship,
  link: "https://www.youtube.com/watch?v=9poQN8U1QTw",
};

export const roadmapsData = {
  title: "Roadmaps made by best in the industry",
  description:
    "The Community Classroom Mentorship Series is a tool that supports you on your path to employment. Learn from the road maps, submit applications to businesses, join communities, and you're ready to go.",
  roadmaps: [
    {
      title: "Open Source",
      description:
        "Always heard of open source but struggled to find correct resources and mentoring? We have an entire roadmap for you. You will join communities, collaborate and contribute to amazing projects following best practices.",
      link: "https://github.com/commclassroom/roadmaps/tree/main/Open-Source",
      image: OpenSource,
    },
    {
      title: "Frontend Development",
      description:
        "Frontend is face of any website or application, The roadmap will take you from understanding the basics to building simple frontend and then shifting towards different frameworks in the industry.",
      link:
        "https://github.com/commclassroom/roadmaps/tree/main/Frontend-Development",
      image: Frontend,
    },
    {
      title: "Backend Development",
      description:
        "Want to learn what happens at the backstage of any application? This roadmap will take you from understanding the logic behind backend to building your own API's, deployments with best practices.",
      link:
        "https://github.com/commclassroom/roadmaps/tree/main/Backend-Development",
      image: Backend,
    },
    {
      title: "Full Stack Development",
      description:
        "Full stack development is much more that just frontend and backend. This roadmap will help you build scalable full stack application along with deploying and maintaining practices.",
      link:
        "https://github.com/commclassroom/roadmaps/tree/main/Fullstack-Development",
      image: FullStack,
    },
    {
      title: "DevRel",
      description:
        "This roadmap will help you understand what DevRel is and if it fits your interest. It will also help you get started with your first steps to become a better DevRel at your career.",
      link: "https://github.com/commclassroom/roadmaps/tree/main/DevRel",
      image: Devrel,
    },
    {
      title: "DevOps",
      description:
        "DevOps is an emerging field, want to get started? This roadmap will get you started with absolute basics to advanced concepts like service mesh, containerization, orchastration etc.",
      link: "https://github.com/commclassroom/roadmaps/tree/main/DevOps",
      image: Devops,
    },
    {
      title: "Android Development",
      description:
        "Android development is evolving and products are improving. Want to get started? This roadmap will get you started with absolute basics to advanced concepts like layout & UI's,  event based programming, networking & api's etc.",
      link:
        "https://github.com/commclassroom/roadmaps/tree/main/Android-Development",
      image: Android,
    },
    {
      title: "Blockchain",
      description:
        "Blockchain is an emerging field, want to get started? This roadmap will get you started with absolute basics to advanced concepts like ethereum concepts, how to connect frontend with dapp, sdk's etc.",
      link: "https://github.com/commclassroom/roadmaps/tree/main/Blockchain",
      image: Blockchain,
    },
  ],
};
