
import { defineConfig } from "drizzle-kit";

export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "mysql",
  dbCredentials: {
    host: "0.0.0.0",
    port: 3306,
    user: "root",
    password: "123123",
    database: "thuglife"
  }
});
