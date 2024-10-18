  export default defineConfig({
    base: '/page_workflow/',
    build: {
      outDir: 'dist'
    },
    plugins: [
      vue(),
      vueDevTools(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })