import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://ujlcwubhgdbnducrtwnr.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVqbGN3dWJoZ2RibmR1Y3J0d25yIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc1ODY5NzgsImV4cCI6MjAxMzE2Mjk3OH0.foUASZR1NAlmqQbztczOH5Hc1EaCz59INfuOVACVmb8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
