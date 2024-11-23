import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://cqeiwtgnseiydzpbfleh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNxZWl3dGduc2VpeWR6cGJmbGVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMzUxOTgsImV4cCI6MjA0NzYxMTE5OH0.-BLvwB586wUkciZJAvq0VEeibscohqhEBLWLnMOlA98';

export const supabase = createClient(supabaseUrl, supabaseKey);