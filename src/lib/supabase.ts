import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log('Supabase configuration:', {
  url: supabaseUrl ? 'Set' : 'Missing',
  key: supabaseAnonKey ? 'Set' : 'Missing'
});

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables:', {
    VITE_SUPABASE_URL: supabaseUrl ? 'Present' : 'Missing',
    VITE_SUPABASE_ANON_KEY: supabaseAnonKey ? 'Present' : 'Missing'
  });
  throw new Error('Missing Supabase environment variables. Please check your .env file.');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Test connection on initialization
supabase.from('winners').select('count').limit(1).then(
  ({ data, error }) => {
    if (error) {
      console.error('Supabase connection test failed:', error);
    } else {
      console.log('Supabase connection test successful');
    }
  }
).catch(err => {
  console.error('Supabase connection test error:', err);
});

export type Database = {
  public: {
    Tables: {
      winners: {
        Row: {
          id: string;
          guide_id: number;
          name: string;
          department: string;
          supervisor: string;
          timestamp: string;
          chat_ids: string[];
          created_at: string;
        };
        Insert: {
          id?: string;
          guide_id: number;
          name: string;
          department: string;
          supervisor: string;
          timestamp: string;
          chat_ids?: string[];
          created_at?: string;
        };
        Update: {
          id?: string;
          guide_id?: number;
          name?: string;
          department?: string;
          supervisor?: string;
          timestamp?: string;
          chat_ids?: string[];
          created_at?: string;
        };
      };
      losers: {
        Row: {
          id: string;
          guide_id: number;
          name: string;
          department: string;
          supervisor: string;
          timestamp: string;
          chat_ids: string[];
          created_at: string;
        };
        Insert: {
          id?: string;
          guide_id: number;
          name: string;
          department: string;
          supervisor: string;
          timestamp: string;
          chat_ids?: string[];
          created_at?: string;
        };
        Update: {
          id?: string;
          guide_id?: number;
          name?: string;
          department?: string;
          supervisor?: string;
          timestamp?: string;
          chat_ids?: string[];
          created_at?: string;
        };
      };
    };
  };
};