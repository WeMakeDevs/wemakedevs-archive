import events_sema from '../../assets/events_sema.png'
import events_hashnode from '../../assets/events_hashnode.png'
import events_coding from '../../assets/events_coding.png'
import events_kubescape from '../../assets/events_kubescape.png'

export const events = [
    {
        title: "Hashnode Blogging Challenges",
        description: "Build your personal brand via theme-based blogging & win amazing prizes every week!",
        ongoing: true,
        image: events_hashnode,
        date: "Monthly",
        link: "/hashnode",
    },
    {
        title: "Sema mentorship series",
        description: "Learn how to utilise open source with some of the best practices, networking, resume tips, and more!",
        ongoing: false,
        image: events_sema,
        date: "2022"
    },
    {
        title: "Practice Your Coding Skills with Wilco",
        description: "Join Wilco to practice and acquire new dev skills in a “flight simulator”. Complete Wilco quests during August to win awesome prizes!",
        ongoing: false,
        image: events_coding,
        date: "5Sep-15Sep 2022",
    },
    {
        title: "Open Source Fest with Kubescape",
        description: "The Open Source Fest with Kubescape where you’ll get to contribute to real-world open source projects, get mentored, build your profile, enhance your skills and much more.",
        ongoing: false,
        image: events_kubescape,
        date: "Aug 2022",
    }
]