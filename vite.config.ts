import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ReactInspector from 'vite-plugin-react-inspector';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [ReactInspector(), react()],
});
