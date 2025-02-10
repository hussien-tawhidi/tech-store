import { dbConnect } from "@/lib/db";
import Product from "@/model/Product";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");
  const category = searchParams.get("category");
  const allResults = searchParams.get("allResults") === "true"; // Check if full results are requested

  if (!query) {
    return new Response(JSON.stringify([]), { status: 200 });
  }

  try {
    await dbConnect();

    const filter: any = { name: { $regex: query, $options: "i" } };
    if (category) filter.category = category;

    // If `allResults=true`, return all products; otherwise, limit to 10
    const results = await Product.find(filter).limit(allResults ? 1000 : 20);

    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch search results." }),
      { status: 500 }
    );
  }
}
