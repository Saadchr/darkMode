"use client";
import React from "react";
import { UserButton } from "@clerk/nextjs";
import { useTheme } from "next-themes";

function CustomUserButton() {
  const { theme, setTheme } = useTheme();
  return (
    <UserButton
      appearance={{
        variables: {
          colorPrimary: theme === "light" ? "blue" : "red",
          colorText: theme === "light" ? "black" : "black",
          colorBackground: theme === "light" ? "white" : "white",
        },
      }}
    />
  );
}

export default CustomUserButton;
