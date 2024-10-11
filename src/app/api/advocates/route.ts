import { NextRequest } from "next/server";
import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";
import { Advocate } from "@/types/advocate";

export async function GET(req: NextRequest) {
  // Uncomment this line to use a database
  // const data = await db.select().from(advocates);
  const searchTerm = req.nextUrl.searchParams.get('query');

  let filteredAdvocates: Advocate[] = [];
  if (!searchTerm) {
    filteredAdvocates = advocateData;
  } else {
    console.log("filtering advocates for search term", searchTerm);
    filteredAdvocates = advocateData.filter((advocate) => {
      return (
        advocate.firstName.toLowerCase().includes(searchTerm) ||
        advocate.lastName.toLowerCase().includes(searchTerm) ||
        advocate.city.toLowerCase().includes(searchTerm) ||
        advocate.degree.toLowerCase().includes(searchTerm) ||
        advocate.specialties.findIndex((s) => s.toLowerCase().includes(searchTerm)) >= 0 ||
        advocate.yearsOfExperience.toString().toLowerCase().includes(searchTerm)
      );
    });
    }

  return Response.json({ data: filteredAdvocates });
}
