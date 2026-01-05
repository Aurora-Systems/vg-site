import { createClient } from "@supabase/supabase-js"

const supabase_url = "https://hkcigjowgwoiwcjrvcgi.supabase.co"
const supabase_key = "sb_publishable_jyE2WoG0PzW65YJje3j1ZQ_HzvQjIb9"

export const supabase = createClient(supabase_url, supabase_key)