import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Mengubah dari localhost ke 0.0.0.0
    port: 3000,       // Port yang ingin Anda gunakan (opsional)
  }
});
