import { createClient } from '@supabase/supabase-js'

const supabaseUrl='https://kutezewttyotehjuhbwc.supabase.co';
const supabaseAnonKey='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt1dGV6ZXd0dHlvdGVoanVoYndjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIyMzUyOTAsImV4cCI6MjAyNzgxMTI5MH0.Mh5uaj39Bw2RzzGTla1BGIPlJ6X6BxX506yBnpxQEY8'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

