import type { JobApiResponse } from "@/lib/models/job";

const API_BASE_URL = "https://faceattendance.dev/v1/recruitment/tuyen-dung";

/**
 * Fetch all available jobs from the API
 * @returns Promise with job list data
 */
export async function fetchJobs(): Promise<JobApiResponse> {
  try {
    console.log("Fetching jobs from:", `${API_BASE_URL}/list-job-website`);

    const response = await fetch(`${API_BASE_URL}/list-job-website`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      cache: "no-store", // Disable cache for fresh data
    });

    console.log("Response status:", response.status);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: JobApiResponse = await response.json();
    console.log("Jobs fetched successfully:", data.count, "jobs");
    return data;
  } catch (error) {
    console.error("Error fetching jobs:", error);
    throw error;
  }
}

/**
 * Get the application link for a specific job
 * @param jobCode - The job code to apply for
 * @returns The application URL
 */
export function getJobApplicationLink(jobCode: string): string {
  return `https://it-human-resources.vercel.app/apply/${jobCode}`;
}
