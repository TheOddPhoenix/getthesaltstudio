'use client';
export default function ErrorPage({reset}:{reset:()=>void}){return <section><h1>A snag in the story.</h1><p>We couldn’t load this page. Please try again.</p><button className="button" onClick={reset}>Try again</button></section>}
