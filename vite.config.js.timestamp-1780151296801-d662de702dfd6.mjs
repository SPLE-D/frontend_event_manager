// vite.config.js
import { defineConfig, loadEnv } from "file:///C:/Users/nobel/Videos/SEMESTER%206/SPLE/AFTER%20UAS/W2/ReviewAnonymous/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/nobel/Videos/SEMESTER%206/SPLE/AFTER%20UAS/W2/ReviewAnonymous/node_modules/@vitejs/plugin-react-swc/index.mjs";
import svgr from "file:///C:/Users/nobel/Videos/SEMESTER%206/SPLE/AFTER%20UAS/W2/ReviewAnonymous/node_modules/vite-plugin-svgr/dist/index.js";
import checker from "file:///C:/Users/nobel/Videos/SEMESTER%206/SPLE/AFTER%20UAS/W2/ReviewAnonymous/node_modules/vite-plugin-checker/dist/esm/main.js";
var vite_config_default = defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());
  return {
    root: "src",
    base: "/",
    plugins: [
      react(),
      svgr()
    ],
    publicDir: process.cwd() + "/public",
    resolve: {
      alias: {
        "@": process.cwd() + "/src"
      }
    },
    server: {
      port: env.VITE_PORT ?? 3e3,
      proxy: {
        "/api/": {
          target: env.VITE_BACKEND_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\//, "")
        },
        "/static/": {
          target: env.VITE_STATIC_SERVER_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/static\//, "")
        }
      }
    },
    envDir: process.cwd(),
    build: {
      outDir: process.cwd() + "/build",
      emptyOutDir: true,
      commonjsOptions: {
        transformMixedEsModules: true
      },
      sourcemap: true
    },
    preview: {
      port: env.VITE_PORT ?? 3e3
    }
  };
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxub2JlbFxcXFxWaWRlb3NcXFxcU0VNRVNURVIgNlxcXFxTUExFXFxcXEFGVEVSIFVBU1xcXFxXMlxcXFxSZXZpZXdBbm9ueW1vdXNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXG5vYmVsXFxcXFZpZGVvc1xcXFxTRU1FU1RFUiA2XFxcXFNQTEVcXFxcQUZURVIgVUFTXFxcXFcyXFxcXFJldmlld0Fub255bW91c1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvbm9iZWwvVmlkZW9zL1NFTUVTVEVSJTIwNi9TUExFL0FGVEVSJTIwVUFTL1cyL1Jldmlld0Fub255bW91cy92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZywgbG9hZEVudiB9IGZyb20gXCJ2aXRlXCI7XHJcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3Qtc3djXCI7XHJcbmltcG9ydCBzdmdyIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdyXCI7XHJcbmltcG9ydCBjaGVja2VyIGZyb20gXCJ2aXRlLXBsdWdpbi1jaGVja2VyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoKHsgbW9kZSB9KSA9PiB7XHJcbiAgY29uc3QgZW52ID0gbG9hZEVudihtb2RlLCBwcm9jZXNzLmN3ZCgpKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHJvb3Q6IFwic3JjXCIsXHJcbiAgICBiYXNlOiBcIi9cIixcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgcmVhY3QoKSxcclxuICAgICAgc3ZncigpLFxyXG4gICAgXSxcclxuICAgIHB1YmxpY0RpcjogcHJvY2Vzcy5jd2QoKSArIFwiL3B1YmxpY1wiLFxyXG4gICAgcmVzb2x2ZToge1xyXG4gICAgICBhbGlhczoge1xyXG4gICAgICAgIFwiQFwiOiBwcm9jZXNzLmN3ZCgpICsgXCIvc3JjXCIsXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgc2VydmVyOiB7XHJcbiAgICAgIHBvcnQ6IGVudi5WSVRFX1BPUlQgPz8gMzAwMCxcclxuICAgICAgcHJveHk6IHtcclxuICAgICAgICBcIi9hcGkvXCI6IHtcclxuICAgICAgICAgIHRhcmdldDogZW52LlZJVEVfQkFDS0VORF9VUkwsXHJcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvYXBpXFwvLywgXCJcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgICBcIi9zdGF0aWMvXCI6IHtcclxuICAgICAgICAgIHRhcmdldDogZW52LlZJVEVfU1RBVElDX1NFUlZFUl9VUkwsXHJcbiAgICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsXHJcbiAgICAgICAgICByZXdyaXRlOiAocGF0aCkgPT4gcGF0aC5yZXBsYWNlKC9eXFwvc3RhdGljXFwvLywgXCJcIiksXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBlbnZEaXI6IHByb2Nlc3MuY3dkKCksXHJcbiAgICBidWlsZDoge1xyXG4gICAgICBvdXREaXI6IHByb2Nlc3MuY3dkKCkgKyBcIi9idWlsZFwiLFxyXG4gICAgICBlbXB0eU91dERpcjogdHJ1ZSxcclxuICAgICAgY29tbW9uanNPcHRpb25zOiB7XHJcbiAgICAgICAgdHJhbnNmb3JtTWl4ZWRFc01vZHVsZXM6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBwcmV2aWV3OiB7XHJcbiAgICAgIHBvcnQ6IGVudi5WSVRFX1BPUlQgPz8gMzAwMCxcclxuICAgIH0sXHJcbiAgfTtcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBOFksU0FBUyxjQUFjLGVBQWU7QUFDcGIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUNqQixPQUFPLGFBQWE7QUFFcEIsSUFBTyxzQkFBUSxhQUFhLENBQUMsRUFBRSxLQUFLLE1BQU07QUFDeEMsUUFBTSxNQUFNLFFBQVEsTUFBTSxRQUFRLElBQUksQ0FBQztBQUV2QyxTQUFPO0FBQUEsSUFDTCxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixLQUFLO0FBQUEsSUFDUDtBQUFBLElBQ0EsV0FBVyxRQUFRLElBQUksSUFBSTtBQUFBLElBQzNCLFNBQVM7QUFBQSxNQUNQLE9BQU87QUFBQSxRQUNMLEtBQUssUUFBUSxJQUFJLElBQUk7QUFBQSxNQUN2QjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU0sSUFBSSxhQUFhO0FBQUEsTUFDdkIsT0FBTztBQUFBLFFBQ0wsU0FBUztBQUFBLFVBQ1AsUUFBUSxJQUFJO0FBQUEsVUFDWixjQUFjO0FBQUEsVUFDZCxTQUFTLENBQUMsU0FBUyxLQUFLLFFBQVEsWUFBWSxFQUFFO0FBQUEsUUFDaEQ7QUFBQSxRQUNBLFlBQVk7QUFBQSxVQUNWLFFBQVEsSUFBSTtBQUFBLFVBQ1osY0FBYztBQUFBLFVBQ2QsU0FBUyxDQUFDLFNBQVMsS0FBSyxRQUFRLGVBQWUsRUFBRTtBQUFBLFFBQ25EO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBLFFBQVEsUUFBUSxJQUFJO0FBQUEsSUFDcEIsT0FBTztBQUFBLE1BQ0wsUUFBUSxRQUFRLElBQUksSUFBSTtBQUFBLE1BQ3hCLGFBQWE7QUFBQSxNQUNiLGlCQUFpQjtBQUFBLFFBQ2YseUJBQXlCO0FBQUEsTUFDM0I7QUFBQSxNQUNBLFdBQVc7QUFBQSxJQUNiO0FBQUEsSUFDQSxTQUFTO0FBQUEsTUFDUCxNQUFNLElBQUksYUFBYTtBQUFBLElBQ3pCO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
