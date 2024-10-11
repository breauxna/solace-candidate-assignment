import { Advocate, specialties, Speciality } from "@/types/advocate";
import db from "..";
import { advocates } from "../schema";

const randomSpecialties = (): Speciality[] => {
  const random1 = Math.floor(Math.random() * 24);
  const random2 = Math.floor(Math.random() * (24 - random1)) + random1 + 1;

  return specialties.slice(random1, random2);
};

const advocateData: Advocate[] = [
  {
    firstName: "John",
    lastName: "Doe",
    city: "New York",
    degree: "MD",
    specialties: randomSpecialties(),
    yearsOfExperience: 10,
    phoneNumber: 5551234567,
  },
  {
    firstName: "Jane",
    lastName: "Smith",
    city: "Los Angeles",
    degree: "PhD",
    specialties: randomSpecialties(),
    yearsOfExperience: 8,
    phoneNumber: 5559876543,
  },
  {
    firstName: "Alice",
    lastName: "Johnson",
    city: "Chicago",
    degree: "MSW",
    specialties: randomSpecialties(),
    yearsOfExperience: 5,
    phoneNumber: 5554567890,
  },
  {
    firstName: "Michael",
    lastName: "Brown",
    city: "Houston",
    degree: "MD",
    specialties: randomSpecialties(),
    yearsOfExperience: 12,
    phoneNumber: 5556543210,
  },
  {
    firstName: "Emily",
    lastName: "Davis",
    city: "Phoenix",
    degree: "PhD",
    specialties: randomSpecialties(),
    yearsOfExperience: 7,
    phoneNumber: 5553210987,
  },
  {
    firstName: "Chris",
    lastName: "Martinez",
    city: "Philadelphia",
    degree: "MSW",
    specialties: randomSpecialties(),
    yearsOfExperience: 9,
    phoneNumber: 5557890123,
  },
  {
    firstName: "Jessica",
    lastName: "Taylor",
    city: "San Antonio",
    degree: "MD",
    specialties: randomSpecialties(),
    yearsOfExperience: 11,
    phoneNumber: 5554561234,
  },
  {
    firstName: "David",
    lastName: "Harris",
    city: "San Diego",
    degree: "PhD",
    specialties: randomSpecialties(),
    yearsOfExperience: 6,
    phoneNumber: 5557896543,
  },
  {
    firstName: "Laura",
    lastName: "Clark",
    city: "Dallas",
    degree: "MSW",
    specialties: randomSpecialties(),
    yearsOfExperience: 4,
    phoneNumber: 5550123456,
  },
  {
    firstName: "Daniel",
    lastName: "Lewis",
    city: "San Jose",
    degree: "MD",
    specialties: randomSpecialties(),
    yearsOfExperience: 13,
    phoneNumber: 5553217654,
  },
  {
    firstName: "Sarah",
    lastName: "Lee",
    city: "Austin",
    degree: "PhD",
    specialties: randomSpecialties(),
    yearsOfExperience: 10,
    phoneNumber: 5551238765,
  },
  {
    firstName: "James",
    lastName: "King",
    city: "Jacksonville",
    degree: "MSW",
    specialties: randomSpecialties(),
    yearsOfExperience: 5,
    phoneNumber: 5556540987,
  },
  {
    firstName: "Megan",
    lastName: "Green",
    city: "San Francisco",
    degree: "MD",
    specialties: randomSpecialties(),
    yearsOfExperience: 14,
    phoneNumber: 5559873456,
  },
  {
    firstName: "Joshua",
    lastName: "Walker",
    city: "Columbus",
    degree: "PhD",
    specialties: randomSpecialties(),
    yearsOfExperience: 9,
    phoneNumber: 5556781234,
  },
  {
    firstName: "Amanda",
    lastName: "Hall",
    city: "Fort Worth",
    degree: "MSW",
    specialties: randomSpecialties(),
    yearsOfExperience: 3,
    phoneNumber: 5559872345,
  },
];

export { advocateData };
