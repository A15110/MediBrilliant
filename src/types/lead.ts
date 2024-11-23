export interface Lead {
  id?: string;
  created_at?: string;
  full_name: string;
  email: string;
  practice_name: string;
  claims_volume: string;
  message: string;
  status: 'new' | 'contacted' | 'qualified' | 'proposal' | 'closed';
  notes?: string;
}