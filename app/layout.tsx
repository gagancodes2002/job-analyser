"use client";

import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import "./globals.css";
import { Inter } from "next/font/google";
import { ReactQueryDevtools } from "react-query/devtools";
import NavBar from "@/src/components/navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const queryClient = new QueryClient();
  return (
    <html>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <div className="bg-[#F3F3F3]">
            <NavBar></NavBar>
            <div>{children}</div>
            <ReactQueryDevtools initialIsOpen={false} />
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
