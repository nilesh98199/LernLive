import { auth, clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const protectedRoutes = createRouteMatcher([
    '/dashboard',
    '/upcoming',
    '/previous',
    '/recordings',
    '/personal-room',
    '/meeting(.*)'
]);

const publicRoutes = createRouteMatcher([
    '/', // Home page (accessible to everyone, including logged-in users)
    '/sign-in(.*)',
    '/sign-up(.*)',
]);

export default clerkMiddleware(async (auth, req) => {
    const { userId, redirectToSignIn } = await auth();
    const url = req.nextUrl;

    // Allow access to public routes without restrictions
    if (publicRoutes(req)) {
        return NextResponse.next();
    }

    // Protect routes that require authentication
    if (protectedRoutes(req) && !userId) {
        return redirectToSignIn();
    }
});

export const config = {
    matcher: [
        '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
        '/(api|trpc)(.*)',
    ],
};
