module.exports = {
    resources: [
        { from: 'src/resources', to: 'dist/resources/' },
        { from: 'src/index.html', to: 'dist/' },
        { from: 'src/manifest.json', to: 'dist/' }
    ]
};
