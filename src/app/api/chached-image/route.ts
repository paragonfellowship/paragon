// app/api/cached-image/route.ts

import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const imageUrl = request.nextUrl.searchParams.get('url');

  if (!imageUrl) {
    return new NextResponse('Missing image URL', { status: 400 });
  }

  try {
    const imageResponse = await fetch(imageUrl, {
      next: {
        revalidate: 60 * 60 * 24 // Cache the image data for 24 hours
      }
    });

    if (!imageResponse.ok) {
      console.error(`Failed to fetch original image: ${imageResponse.status} ${imageResponse.statusText} from ${imageUrl}`);
      return new NextResponse(`Failed to fetch image: ${imageResponse.statusText}`, { status: imageResponse.status });
    }

    const contentType = imageResponse.headers.get('Content-Type') || 'image/*';

    return new NextResponse(imageResponse.body, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': `public, max-age=${60 * 60 * 24}, must-revalidate`
      }
    });

  } catch (error: unknown) { // Change 'any' to 'unknown'
    // Handle any errors during the fetch process
    // 'unknown' is safer than 'any'. You'll need to check its type if you need to access properties.

    console.error('Error fetching and caching image:', error);

    // You could potentially log more details if it's a standard Error object
    if (error instanceof Error) {
        console.error('Error message:', error.message);
        // You could even include error.message in the response body for debugging,
        // but for production APIs, returning a generic error is usually better.
        // return new NextResponse(`Internal Server Error: ${error.message}`, { status: 500 });
    }


    return new NextResponse('Internal Server Error', { status: 500 });
  }
}