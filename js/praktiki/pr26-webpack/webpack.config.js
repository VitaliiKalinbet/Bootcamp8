const path = require('path'); // path - стандарнтая переменная ноды
const argv = require('yargs').argv; // yargs - определяется какой режим разработки сейчас, это обьект из которого мы вытягиваем значение ключа
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // work for css, обрабатыавтья файлы и в один обьедрнять
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // UglifyJsPlugin work for js,  в одну строку переводит работая с финальным js (одним файлом, до него все собирается в один)
const HtmlWebpackPlugin = require('html-webpack-plugin');  // в штмл вставляет линики и скрипты за нас, мы руками этого ничего не делаем

const isDevelopment = argv.mode === 'development'; // если сравнение true один набор пакетов запускаем
const isProduction = !isDevelopment; // если сравнение false другой набор пакетов запускаем
const distPath = path.join(__dirname, '/public'); // путь на папку где будет хранится финальный результат работы файла, мы его сами называем '/public'

// config - стандартное название объекта настроек вебпака
const config = {
    entry: {
        main: './src/js/index.js',  // ./src/js/index.js - главный файл проекта, в котором вся джс логика происходит
    },
    output: {
        filename: 'bundle.js', // финальный джс файл который создастся при работе вебпака
        path: distPath, // путь где будет лежать джс файл этот
    },
    module: {  // пишем правила в которых будем учить наш вебпак понимать html, css, js от 6 версии. ТОТ ПЛАГИН КОТОРЫЙ ИСПОЛЬЗУЕТСЯ в use первым должен быть написан последним!!!!!!!
        rules: [{
            test: /\.html$/,
            use: 'html-loader', // название нпм пакета который учит работать с нпм файлами
        }, {
            test: /\.js$/,
            exclude: /node_modules/,  // работай со всеми js файлами кроме тех которые находятся в папке node_modules (чтобы он их не изменял и ничего не мог с ними сделать)
            use: [{
                loader: 'babel-loader',
            }
            ]
        }, {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: [
              isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
              'css-loader',
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    isProduction ? require('cssnano') : () => {},
                    require('autoprefixer')({
                      browsers: ['last 2 versions']
                    })
                  ]
                }
              },
              'sass-loader'
            ]
          }, {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [{
              loader: 'file-loader',
              options: {
                name: 'images/[name][hash].[ext]'
              }
            }, {
              loader: 'image-webpack-loader',
              options: {
                mozjpeg: {
                  progressive: true,
                  quality: 70
                }
              }
            },
            ],
          }, {
            test: /\.(eot|svg|ttf|woff|woff2)$/,
            use: {
              loader: 'file-loader',
              options: {
                name: 'fonts/[name][hash].[ext]'
              }
            }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
          }),
          new HtmlWebpackPlugin({
            template: './src/index.html'
          })
    ], 
    // optimization: необязательное поле в котором мы прописываем разные параметры оптимизации для режима продакшн
    optimization: isProduction ? {
        minimizer: [
          new UglifyJsPlugin({
            sourceMap: true,
            uglifyOptions: {
              compress: {
                inline: false,
                drop_console: true
              },
            },
          }),
        ],
      } : {},
    // devServer: необязательное поле в котором мы настраиваем вкладку которая открывается в браузере 
    devServer: {
    contentBase: distPath,
    port: 9000,
    compress: true,
    open: true
    }
}; 

module.exports = config; // мы вебпаку даем доступ к конфигу(обьекту с характеристиками)

/*
Учим работать вебпак работать с файлами html, css, JS(выше пятого стандарта, понимает только пятый):
ЗАГРУЖЧИКИ (loader) - дополнительные нпм пакет, который учит вебпак работать с файлами разных расширений
ПЛАГИНЫ (plagin) - дополнительные нпм пакеты, которые могут эти файлы как то обрабатывать, сжимать в одну строчку и т.д.

Объект config, обязательно должен иметь  четыре базовых поля
    entry: {
    },    - объект в котором указываем точку входа (за какими файлами следить)
    output: {
    }, - поле в котором указываем куда выгружаем работу и как файл будет называться
    module: {
    }, - пишем правила в которых будем учить наш вебпак понимать html, css, js от 6 версии
    plugins: [
    ], - дополнительно обработали наши файлы

    optimization:   - необязательное поле в котором мы прописываем разные параметры оптимизации для режима продакшн
    devServer: - необязательное поле в котором мы настраиваем вкладку которая открывается в браузере
*/

