const path = require('path'); // Importa o módulo 'path' do Node.js para lidar com caminhos de arquivo

module.exports = {
  // Define o modo de construção como 'production'
  mode: 'production',
  // Define o ponto de entrada da aplicação como './src/index.js'
  entry: './src/index.js',
  // Configuração de saída onde o pacote será gerado
  output: {
    // Define o diretório de saída como 'public/assets/js' usando o 'path.resolve' para resolver o caminho
    path: path.resolve(__dirname, 'public', 'assets', 'js'),
    // Define o nome do arquivo de saída como 'bundle.js'
    filename: 'bundle.js'
  },
  // Define regras para processar diferentes tipos de arquivos
  module: {
    rules: [{
      // Define uma regra para arquivos JavaScript, excluindo os módulos do node_modules
      exclude: /node_modules/,
      test: /\.js$/, // Testa se o arquivo termina com a extensão .js
      // Usa o loader 'babel-loader' para transpilar o código JavaScript
      use: {
        loader: 'babel-loader',
        options: {
          // Define os presets do Babel que serão usados para transpilar o código
          presets: ['@babel/env']
        }
      }
    }]
  },
  // Configura o tipo de sourcemap a ser gerado
  devtool: 'source-map'
};
