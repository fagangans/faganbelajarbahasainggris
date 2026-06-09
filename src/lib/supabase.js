import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://cibrkcfxeydwdwnwelmo.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNpYnJrY2Z4ZXlkd2R3bndlbG1vIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODAyMDcwNjYsImV4cCI6MjA5NTc4MzA2Nn0.blnU3qhQvPX3-N678kdqEGf-QjsNzdyXwnYCPVw2BiU';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
