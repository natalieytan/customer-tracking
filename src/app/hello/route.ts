export const dynamic = 'force-dynamic'; // static by default, unless reading the request
export const runtime = 'nodejs';
 
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
export function GET(_request: Request) {
  return new Response(`Hello from ${process.env.VERCEL_REGION}`);
}