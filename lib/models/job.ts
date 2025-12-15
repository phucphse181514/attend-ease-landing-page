// TypeScript interfaces for Job API
export interface Job {
  jobId: string;
  jobTitle: string;
  jobDescription: string;
  jobOverview: string;
  jobResponsibility: string;
  jobBenefit: string;
  jobCode: string;
  trialPeriod: string;
  fromSalary: string;
  toSalary: string;
  address: string;
  positionName: string;
  status: string;
  requireSkill: string[];
  expirationDate: string;
  requireExperience: string;
}

export interface JobApiResponse {
  count: number;
  limit: number;
  page: number;
  data: Job[];
}
