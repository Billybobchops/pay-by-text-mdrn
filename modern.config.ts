import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';

// https://modernjs.dev/en/configure/app/usage
export default defineConfig({
    runtime: {
        router: true,
    },
    dev: {
        port: 3003,
    },
    output: {
        assetPrefix:
            process.env.NODE_ENV === 'production' ? 'https://pay-by-text.netlify.app/' : 'http://localhost:3003/',
    },
    plugins: [
        appTools({
            bundler: 'rspack',
        }),
        moduleFederationPlugin({ ssr: false }),
    ],
});
