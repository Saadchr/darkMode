"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

function ThemeProviding({ children }) {
  return <ThemeProvider attribute="class">{children}</ThemeProvider>;
}

export default ThemeProviding;
