import { createClient } from '@supabase/supabase-js';

// Legge la variabile d'ambiente di Vite o usa un fallback fittizio valido per evitare il crash del blocco URL
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
