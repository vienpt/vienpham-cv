// @ts-ignore
import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = Deno.env.get("SUPABASE_URL")
const supabaseKey = Deno.env.get("SUPABASE_KEY")
const supabase = createClient(supabaseUrl, supabaseKey)

export default async () => {
  const { data, error } = await supabase.from('DataResume').select(`
    info:             metadata->info,
    about:            metadata->about,
    experiences:      metadata->experiences,
    education:        metadata->education,
    skill:            metadata->skill,
    interests:        metadata->interests
  `)

  if (error) {
    const err = Response.json("Whoops!", { statusCode: 500 });
    throw new Error(err)
  }

  return Response.json({ resume: data[0] });
}