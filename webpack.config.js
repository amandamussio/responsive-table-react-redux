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
	},
	module: {
    loaders: [{
        test: /\.js$/, //leia qualquer arquivo .js
        exclude: /node_modules/, //não leia node_modules
        loader: 'babel', //defino o babel como meu loader
        query: {
            presets: ['es2015','react'] //defino que o preset que vou usar é do es2015 para ele compilar meus códigos novos
        }
    }]
	}
}
