import {
  NextRequest,
  NextResponse,
} from "../../../../../node_modules/next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();
  return NextResponse.json({
    status: 200,
    mesagge: "Success",
    data: req,
  });
}
