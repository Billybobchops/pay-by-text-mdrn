import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
    name: 'payByText',
    manifest: {
        filePath: 'static',
    },
    filename: 'static/remoteEntry.js',
    exposes: {
        './PayByText': './src/components/PayByText.tsx',
    },
    remotes: {
        remoteDesignSystem:
            process.env.NODE_ENV === 'production'
                ? 'remoteDesignSystem@https://starling-ui-design-system.netlify.app/static/remoteEntry.js'
                : 'remoteDesignSystem@http://localhost:3001/static/remoteEntry.js',
    },
    shared: {
        react: { singleton: true, requiredVersion: '18.3.1' },
        'react-dom': { singleton: true, requiredVersion: '18.3.1' },
        'react-router-dom': { singleton: true, requiredVersion: '18.3.1' },
        clsx: { singleton: true, requiredVersion: '2.1.1' },
    },
});
