const basePath = process.env.NODE_ENV === 'production' ? '/next-news-yb' : '';

module.exports = {
    basePath,
    assetPrefix: `${basePath}/`
};