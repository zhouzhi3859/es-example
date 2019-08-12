/**
 * @name gulp执行任务
 * @description 监听代码变动，自动执行单元测试
 */

const gulp = require('gulp');
const mocha = require('gulp-mocha');
const pathStr = 'test/**/*.js';

gulp.task('watch', () => {
  gulp.watch([ pathStr, 'javascript/*.js', 'leetcode/*.js' ], [ 'mocha' ]);
});

gulp.task('mocha', () => {
  return gulp.src(pathStr, { read: false })
    .pipe(mocha({ reporter: 'spec' }))
    .on('error', console.error);
});

gulp.task('default', gulp.parallel('watch', 'mocha'));
