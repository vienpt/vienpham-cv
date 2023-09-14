// @ts-ignore
import type { Context } from 'https://edge.netlify.com'
// @ts-ignore
import { createClient } from 'https://esm.sh/@supabase/supabase-js';

const supabaseUrl = Deno.env.get("SUPABASE_URL")
const supabaseKey = Deno.env.get("SUPABASE_KEY")
const supabase = createClient(supabaseUrl, supabaseKey)

export default async (request: Request, { geo, json }: Context) => {
  // send request to insert supabase
  const url = new URL(request.url)
  const score = Number(url.searchParams.get('score'))
  if (!score || undefined) return

  const { error, status, statusText } = await supabase
    .from('ReviewResume')
    .insert(
      [
        {
          score: score,
          comment: url.searchParams.get('comment'),
          geo: JSON.stringify(geo)
        }
      ]
    )
    .select()

  if (error !== null) {
    throw new Error('Whoops!')
  }

  return json(statusText, { status })
}