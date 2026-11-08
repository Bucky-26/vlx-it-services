import type { Metadata } from 'next';
import './globals.css';
export const metadata:Metadata={title:'VLX IT Services — Thoughtful technology, built for you',description:'Websites, business systems, mobile and desktop applications. Independent development from Palawan, Philippines.',icons:{icon:'/favicon.svg'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en"><body>{children}</body></html>}
