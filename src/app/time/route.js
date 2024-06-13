export const dynamic = 'force-dynamic'
export async function GET() {
    return Response.json({
        currentTime : new Date().toLocaleTimeString()
    })
}