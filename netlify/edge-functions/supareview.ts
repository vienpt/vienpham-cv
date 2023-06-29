import type { Context } from 'https://edge.netlify.com'
import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = Netlify.env.get("SUPABASE_URL")
const supabaseKey = Netlify.env.get("SUPABASE_KEY")
const supabase = createClient(supabaseUrl, supabaseKey)

export default async (request: Request, { cookies, geo, json}: Context) => {
  // send request to insert supabase
  const url = new URL(request.url)
  const score = Number(url.searchParams.get('score'))
  if (!score || undefined) return

  setTimeout(async () => {
    await supabase.from('ReviewResume')
      .insert(
        [
          {
            score: score,
            geo: JSON.stringify(geo)
          }
        ]
      )
      .select()

  })

  return json('Ok', { status: 200 })

}