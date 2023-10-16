import "dotenv/config";
import {z} from "zod"

export const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  PORT: z.coerce.number().default(3333),
})
const _env = envSchema.safeParse(process.env)
if(_env.success === false) {
   console.error('⚠️  Invalid enviroment valiable', _env.error.format())
  throw new Error('invalid enviremoment variable')
}
export const env = _env.data;