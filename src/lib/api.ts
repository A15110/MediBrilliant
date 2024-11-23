import { supabase } from './supabase';
import type { Lead } from '../types/lead';

export const api = {
  leads: {
    async create(lead: Omit<Lead, 'status'>) {
      const { data, error } = await supabase
        .from('leads')
        .insert([{ ...lead, status: 'new' }])
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    },

    async getAll() {
      const { data, error } = await supabase
        .from('leads')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw new Error(error.message);
      return data;
    },

    async update(id: string, updates: Partial<Lead>) {
      const { data, error } = await supabase
        .from('leads')
        .update(updates)
        .eq('id', id)
        .select()
        .single();

      if (error) throw new Error(error.message);
      return data;
    },

    async delete(id: string) {
      const { error } = await supabase
        .from('leads')
        .delete()
        .eq('id', id);

      if (error) throw new Error(error.message);
      return true;
    }
  },

  analytics: {
    async getDashboardStats() {
      const { data: leads, error: leadsError } = await supabase
        .from('leads')
        .select('status');

      if (leadsError) throw new Error(leadsError.message);

      const stats = {
        total: leads?.length || 0,
        new: leads?.filter(l => l.status === 'new').length || 0,
        qualified: leads?.filter(l => l.status === 'qualified').length || 0,
        conversion: leads?.filter(l => l.status === 'closed').length || 0
      };

      return stats;
    }
  },

  services: {
    async getServiceDetails(serviceId: string) {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('id', serviceId)
        .single();

      if (error) throw new Error(error.message);
      return data;
    }
  }
};

export class APIError extends Error {
  constructor(
    message: string,
    public status: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = 'APIError';
  }
}