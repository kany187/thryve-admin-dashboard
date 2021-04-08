module.exports = {
    css: {
        loaderOptions: {
            sass: {
                prependData: `
                @import "@/global-styles/typography.scss";
                @import "@/global-styles/colors.scss";
                `
            }
        }
    }
}