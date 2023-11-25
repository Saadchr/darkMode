import type { Config } from "tailwindcss";
import radixThemePlugin from "radix-ui-themes-with-tailwind";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        blue: {
          1: "var(--blue-1)",
          2: "var(--blue-2)",
          3: "var(--blue-3)",
          4: "var(--blue-4)",
          5: "var(--blue-5)",
          6: "var(--blue-6)",
          7: "var(--blue-7)",
          8: "var(--blue-8)",
          9: "var(--blue-9)",
          10: "var(--blue-10)",
          11: "var(--blue-11)",
          12: "var(--blue-12)",
        },
        red: {
          1: "var(--red-1)",
          2: "var(--red-2)",
          3: "var(--red-3)",
          4: "var(--red-4)",
          5: "var(--red-5)",
          6: "var(--red-6)",
          7: "var(--red-7)",
          8: "var(--red-8)",
          9: "var(--red-9)",
          10: "var(--red-10)",
          11: "var(--red-11)",
          12: "var(--red-12)",
        },
        bronze: {
          1: "var(--bronze-1)",
          2: "var(--bronze-2)",
          3: "var(--bronze-3)",
          4: "var(--bronze-4)",
          5: "var(--bronze-5)",
          6: "var(--bronze-6)",
          7: "var(--bronze-7)",
          8: "var(--bronze-8)",
          9: "var(--bronze-9)",
          10: "var(--bronze-10)",
          11: "var(--bronze-11)",
          12: "var(--bronze-12)",
        },

        gray: {
          1: "var(--gray-1)",
          2: "var(--gray-2)",
          3: "var(--gray-3)",
          4: "var(--gray-4)",
          5: "var(--gray-5)",
          6: "var(--gray-6)",
          7: "var(--gray-7)",
          8: "var(--gray-8)",
          9: "var(--gray-9)",
          10: "var(--gray-10)",
          11: "var(--gray-11)",
          12: "var(--gray-12)",
        },

        graya: {
          1: "var(--gray-a-1)",
          2: "var(--gray-a-2)",
          3: "var(--gray-a-3)",
          4: "var(--gray-a-4)",
          5: "var(--gray-a-5)",
          6: "var(--gray-a-6)",
          7: "var(--gray-a-7)",
          8: "var(--gray-a-8)",
          9: "var(--gray-a-9)",
          10: "var(--gray-a-10)",
          11: "var(--gray-a-11)",
          12: "var(--gray-a-12)",
        },
      },
    },
  },

  plugins: [],
};

export default config;
