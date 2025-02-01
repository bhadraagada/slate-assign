// data.ts

// Define the interfaces (optional, but helps with TypeScript)
export interface School {
  id: number;
  name: string;
  location: string;
}

export interface Student {
  id: number;
  name: string;
  gender: "Male" | "Female";
  schoolId: number;
  parents: number[]; // Array of parent IDs
  achievements: number[]; // Array of achievement IDs
}

export interface Parent {
  id: number;
  name: string;
  email: string;
  studentIds: number[]; // Array of student IDs
}

export interface Achievement {
  id: number;
  title: string;
  description: string;
  year: number;
  studentId: number;
}

// Create data arrays for each entity

const schools: School[] = [
  { id: 1, name: "Greenwood High", location: "New York" },
  { id: 2, name: "Riverside Academy", location: "California" },
  { id: 3, name: "Lakeside Prep", location: "Texas" },
  { id: 4, name: "Mountainview School", location: "Florida" },
  { id: 5, name: "Sunrise Public", location: "Illinois" },
];

const students: Student[] = [];
const parents: Parent[] = [];
const achievements: Achievement[] = [];

const firstNamesMale = ["John", "Michael", "David", "Robert", "James"];
const firstNamesFemale = ["Mary", "Patricia", "Jennifer", "Linda", "Elizabeth"];
const lastNames = ["Smith", "Johnson", "Williams", "Brown", "Jones"];

let studentId = 1;
const studentsPerSchool = 20;

// Generate students for each school
for (const school of schools) {
  for (let i = 0; i < studentsPerSchool; i++) {
    const gender: "Male" | "Female" = i % 2 === 0 ? "Male" : "Female";
    const firstName =
      gender === "Male"
        ? firstNamesMale[i % firstNamesMale.length]
        : firstNamesFemale[i % firstNamesFemale.length];
    const lastName = lastNames[i % lastNames.length];

    students.push({
      id: studentId,
      name: `${firstName} ${lastName}`,
      gender,
      schoolId: school.id,
      parents: [], // To be populated later
      achievements: [], // To be populated later
    });
    studentId++;
  }
}

let parentId = 1;
// Assign parents to students based on a simple rule:
// - If (index % 3 === 1): one parent
// - If (index % 3 === 2): two parents
students.forEach((student, index) => {
  const mod = index % 3;
  if (mod === 1) {
    const parent: Parent = {
      id: parentId,
      name: `${student.name.split(" ")[0]} Sr.`,
      email: `${student.name.split(" ")[0].toLowerCase()}@example.com`,
      studentIds: [student.id],
    };
    parents.push(parent);
    student.parents.push(parent.id);
    parentId++;
  } else if (mod === 2) {
    const parent1: Parent = {
      id: parentId,
      name: `${student.name.split(" ")[0]} Sr.`,
      email: `${student.name.split(" ")[0].toLowerCase()}_father@example.com`,
      studentIds: [student.id],
    };
    parentId++;
    const parent2: Parent = {
      id: parentId,
      name: `${student.name.split(" ")[0]} Jr.`,
      email: `${student.name.split(" ")[0].toLowerCase()}_mother@example.com`,
      studentIds: [student.id],
    };
    parentId++;
    parents.push(parent1, parent2);
    student.parents.push(parent1.id, parent2.id);
  }
  // If mod === 0, the student gets no parent.
});

let achievementId = 1;
// Assign achievements based on a simple rule:
// - If (index % 3 === 1): one achievement
// - If (index % 3 === 2): two achievements
students.forEach((student, index) => {
  const mod = index % 3;
  if (mod === 1) {
    const achievement: Achievement = {
      id: achievementId,
      title: "Math Olympiad",
      description: "Scored highest in regional math olympiad.",
      year: 2022,
      studentId: student.id,
    };
    achievements.push(achievement);
    student.achievements.push(achievementId);
    achievementId++;
  } else if (mod === 2) {
    const achievement1: Achievement = {
      id: achievementId,
      title: "Science Fair",
      description: "Won first prize in the science fair.",
      year: 2022,
      studentId: student.id,
    };
    achievementId++;
    const achievement2: Achievement = {
      id: achievementId,
      title: "Art Competition",
      description: "Recognized for creativity in art.",
      year: 2023,
      studentId: student.id,
    };
    achievementId++;
    achievements.push(achievement1, achievement2);
    student.achievements.push(achievement1.id, achievement2.id);
  }
  // If mod === 0, no achievements are assigned.
});

// Combine everything into one JSON-like object
export const db = {
  schools,
  students,
  parents,
  achievements,
};
