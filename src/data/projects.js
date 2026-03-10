import councelling from "../assets/images/councelling.png";
import expensetracker from "../assets/images/expense-tracker.png";
import spotifyClone from "../assets/images/spotify-clone.png";
import kanban from "../assets/images/kanban-board.png";
import notes from "../assets/images/notes.png";

export const projects = [
  {
    id: 1,
    title: "Online Counselling Application",
    description:
      "A full stack counselling platform where users can book therapy sessions, make payments, and manage appointments securely.",
    category: "Full Stack",
    technologies: [
      "React",
      "Node.js",
      "MongoDB",
      "Express",
      "Stripe",
      "Tailwind CSS",
      "WEBRTC",
    ],
    image: councelling,
    demoUrl: "https://councelling121.netlify.app/",
    githubUrl: "https://github.com/Nithish259/councelling-app.git",
  },
  {
    id: 2,
    title: "Expense Tracker",
    description:
      "A MERN stack expense tracking application where users can record income and expenses, visualize spending patterns, and manage personal finances.",
    category: "Full Stack",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Chart.js",
      "Tailwind CSS",
    ],
    image: expensetracker,
    demoUrl: "https://expensetrackermern25.netlify.app/dashboard",
    githubUrl: "https://github.com/Nithish259/EXPENSETRACKER.git",
  },
  {
    id: 3,
    title: "Spotify Clone",
    description:
      "A music streaming application inspired by Spotify that allows users to browse albums, play songs, and manage playlists.",
    category: "Full Stack",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Tailwind CSS",
    ],
    image: spotifyClone,
    demoUrl: "https://spotify-clone-121.netlify.app/",
    githubUrl: "https://github.com/Nithish259/spotify-full-stack-clone.git",
  },
  {
    id: 4,
    title: "Kanban Board",
    description:
      "A drag-and-drop productivity board that helps users organize tasks using columns like To-Do, In Progress, and Done.",
    category: "Frontend",
    technologies: ["React", "Tailwind CSS", "React DnD", "Context API"],
    image: kanban,
    demoUrl: "https://taskmanagerkanban.netlify.app/",
    githubUrl: "https://github.com/Nithish259/kanban-board.git",
  },
  {
    id: 5,
    title: "Notes App",
    description:
      "A simple note-taking application that allows users to create, edit, delete, and organize notes with a clean UI.",
    category: "Frontend",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    image: notes,
    demoUrl: "https://notesapp121.netlify.app/",
    githubUrl: "https://github.com/Nithish259/notes-app.git",
  },
];

export const categories = ["All", "Frontend", "Full Stack"];
