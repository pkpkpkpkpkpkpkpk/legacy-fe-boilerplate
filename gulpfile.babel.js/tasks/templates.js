// Dependencies
import { src, dest } from 'gulp';
import plumber from 'gulp-plumber';
import errorHandler from '../util/errorHandler.js';
import beautify from 'gulp-jsbeautifier';

// Config
import { paths } from "../config";

// Task
export function templates() {
  return src(paths.templates.src)
    .pipe(plumber({errorHandler}))
    .pipe(beautify({ indent_size: 2 }))
    .pipe(dest(paths.templates.dest))
};
