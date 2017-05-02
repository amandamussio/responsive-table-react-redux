module.exports = {
	entry: "./app/App.js",
    output: {
        path: '/home/amandamussio/Documentos/responsive-table-react-redux/public',
        filename: "bundle.js",
        publicPath: './public'
    },
	devServer: {
    inline: true,
    contentBase: './public',
    port: 3333
	}
}
