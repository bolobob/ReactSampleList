import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES
    ? "react-sample-list" // レポジトリ名を設定
    : "./",
  plugins: [react()],
});
