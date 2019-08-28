/*
 * @title Config
 */

// Paths
export const paths = {
  src: './src',
  dest: './dist',
  deploy: './dist/**/*',
  styles: {
    src: './src/styles/main.scss',
    watch: './src/styles/**/*.scss',
    dest: 'dist/css',
    lint: './src/styles/**/*.s+(a|c)ss'
  },
  scripts: {
    src: './src/scripts/app.js',
    watch: './src/scripts/**/*.js',
    dest: 'dist/js',
  },
  views: {
    src: './src/views/*.html',
    watch: './src/views/*.html',
    dest: 'dist/'
  },
  assets: {
    src: './src/assets/**/*',
    dest: 'dist/assets'
  }
};
