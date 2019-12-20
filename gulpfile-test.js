/**
 * @name gulp执行任务
 * @description 监听代码变动，自动执行单元测试
 */

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const pathStr1 = 'test/**/*.js';
const pathStr2 = 'test/**/*.ts';


gulp.task('mocha javascript', () => {
  return gulp.src(pathStr1, { read: false })
    .pipe(mocha({ reporter: 'spec' }))
    .on('error', console.error);
});

gulp.task('mocha typescript', () => {
  return gulp.src(pathStr2, { read: false })
    .pipe(mocha({ reporter: 'spec', register: 'ts-node/register' }))
    .on('error', console.error);
});

gulp.task('default', gulp.series('mocha javascript', 'mocha typescript'));
