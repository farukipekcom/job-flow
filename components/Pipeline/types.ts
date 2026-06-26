export type Job = {
  id: string;
  company: string;
  role: string;
  salary_range: string | null;
  interview_date: string | null;
  next_step_date: string | null;
  next_step_details: string | null;
  stage: string;
  color: string;
  location: string;
  work_type: string;
};

export type PipelineProps = {
  title?: string;
  subTitle?: string;
  data: Job[];
  locations: string[];
  statuses: string[];
  types: string[];
  error?: string;
};
