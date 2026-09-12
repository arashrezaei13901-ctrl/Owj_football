import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.owj.footballclub',
  appName: 'OWJ Football Club',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
