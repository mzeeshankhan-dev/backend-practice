import express from "express";
import "dotenv/config";

const app = express();
const port = process.env.PORT || 3000;

app.get("/api/users", (req, res) => {

  const users = [
    {
      id: 1,
      name: "Ali Khan",
      email: "ali@example.com",
      age: 22,
      city: "Mingora",
      role: "Frontend Developer",
    },
    {
      id: 2,
      name: "Ahmed Raza",
      email: "ahmed@example.com",
      age: 25,
      city: "Peshawar",
      role: "Backend Developer",
    },
    {
      id: 3,
      name: "Usman Malik",
      email: "usman@example.com",
      age: 21,
      city: "Islamabad",
      role: "UI Designer",
    },
    {
      id: 4,
      name: "Hassan Ali",
      email: "hassan@example.com",
      age: 24,
      city: "Lahore",
      role: "Full Stack Developer",
    },
    {
      id: 5,
      name: "Bilal Ahmed",
      email: "bilal@example.com",
      age: 23,
      city: "Karachi",
      role: "React Developer",
    },
    // {
    //   id: 6,
    //   name: "Hamza Khan",
    //   email: "hamza@example.com",
    //   age: 26,
    //   city: "Swat",
    //   role: "Node.js Developer",
    // },
    // {
    //   id: 7,
    //   name: "Saad Hussain",
    //   email: "saad@example.com",
    //   age: 20,
    //   city: "Mardan",
    //   role: "Student",
    // },
    // {
    //   id: 8,
    //   name: "Zain Abbas",
    //   email: "zain@example.com",
    //   age: 27,
    //   city: "Rawalpindi",
    //   role: "Software Engineer",
    // },
    // {
    //   id: 9,
    //   name: "Danish Iqbal",
    //   email: "danish@example.com",
    //   age: 22,
    //   city: "Quetta",
    //   role: "Web Developer",
    // },
    // {
    //   id: 10,
    //   name: "Fahad Noor",
    //   email: "fahad@example.com",
    //   age: 28,
    //   city: "Multan",
    //   role: "MERN Developer",
    // },
  ];
  res.send(users);
});

app.listen(port, () => {
  console.log(`Server listen on http://localhost:${port}`);
});
