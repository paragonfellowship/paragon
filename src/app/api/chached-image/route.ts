// app/api/cached-image/route.ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const imageUrl = request.nextUrl.searchParams.get('url');

  if (!imageUrl) {
    return new NextResponse('Missing image URL', { status: 400 });
  }

  try {
    // Fetch the image data, applying Vercel data cache to this fetch
    const imageResponse = await fetch(imageUrl, {
      next: {
        revalidate: 60 * 60 * 24 // Cache the image data for 24 hours
      }
    });

    if (!imageResponse.ok) {
      // Handle non-200 responses from the original image source
      console.error(`Failed to fetch original image: ${imageResponse.status} ${imageResponse.statusText}`);
      return new NextResponse(`Failed to fetch image: ${imageResponse.statusText}`, { status: imageResponse.status });
    }

    // Get the content type from the original response headers
    const contentType = imageResponse.headers.get('Content-Type') || 'image/*'; // Fallback if header is missing

    // Return the image data with the correct content type
    return new NextResponse(imageResponse.body, {
      headers: {
        'Content-Type': contentType,
        // Optionally add browser caching headers as well
         'Cache-Control': `public, max-age=${60 * 60 * 24}, must-revalidate`
      }
    });

  } catch (error: any) {
    console.error('Error fetching and caching image:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}