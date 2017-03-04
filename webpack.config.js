//specific information related to build

module.exports = {
  //root js file
  entry: "./app.js",
  //where to output the code
  output: {
    //name the output javascript file, specify directory using path if you want
    filename: "bundle.js",
  },
  //which transformations to make on the code
  module: {
    //instruct webpack to run source JS files through babel loader
    loaders: [
      {
        test: /.js$/, //any files that end in js
        exclude: /node_modules/, //exclude all our node modules
        loader: 'babel-loader', //check babelrc file
      }
    ]
  },
}
