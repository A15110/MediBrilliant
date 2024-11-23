import React from 'react';
import { useApi } from '../../hooks/useApi';
import { useApiContext } from '../../context/ApiContext';
import type { Lead } from '../../types/lead';

export default function LeadManagement() {
  const api = useApiContext();
  
  const { data: leads, loading, execute: fetchLeads } = useApi(
    api.leads.getAll,
    {
      errorMessage: 'Failed to fetch leads'
    }
  );

  const { execute: updateLead } = useApi(
    api.leads.update,
    {
      successMessage: 'Lead updated successfully',
      errorMessage: 'Failed to update lead',
      onSuccess: () => fetchLeads()
    }
  );

  React.useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const updateLeadStatus = async (id: string, status: Lead['status']) => {
    await updateLead(id, { status });
  };

  const addNote = async (id: string, note: string) => {
    await updateLead(id, { 
      notes: note,
      updated_at: new Date().toISOString()
    });
  };

  if (loading) return <div>Loading...</div>;

  // Rest of the component remains the same...
}