import {
  NextRequest,
  NextResponse,
} from "../../../../node_modules/next/server";
import { revalidateTag } from "../../../../node_modules/next/cache";

export async function POST(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");
  const secret = request.nextUrl.searchParams.get("secret");

  if (secret !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json(
      { status: 401, message: "Invalid Seccret" },
      {
        status: 401,
      }
    );
  }

  if (!tag) {
    return NextResponse.json(
      { status: 400, message: "Missing tag param" },
      {
        status: 400,
      }
    );
  }

  revalidateTag(tag);

  return NextResponse.json({ revalidate: true, now: Date.now() });
}
