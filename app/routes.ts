import { type RouteConfig, index, route } from "@react-router/dev/routes";
import NotFound from "./routes/notfound";

export default [
  index("routes/home.tsx"),
  route("/auth", "routes/auth.tsx"),
  route("/upload", "routes/upload.tsx"),
  route("/resume/:id", "routes/resume.tsx"),
  route("/wipe", "routes/wipe.tsx"),
  route("*", "routes/notfound.tsx"), // Catch-all route for unmatched paths
] satisfies RouteConfig;
