import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://jpzsdcvmndmedidebrcu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpwenNkY3ZtbmRtZWRpZGVicmN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NzcyOTAsImV4cCI6MjA2MTE1MzI5MH0.xSFKs1pTaItfyR1TgBfmpraxRkogsAMqY3mZGj3Aa0E";
export const supabase = createClient(supabaseUrl, supabaseKey);
