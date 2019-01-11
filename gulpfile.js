var gulp = require("gulp");
var sass = require("gulp-sass");
var sourcemaps = require("gulp-sourcemaps");
var connect = require("gulp-connect");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var babel = require("gulp-babel");


gulp.task("copy-index",function(){
	gulp.src("*.html")
	.pipe(gulp.dest("dist"))
	.pipe(connect.reload())
});
gulp.task("copy-img",function(){
	gulp.src("img/**")
	.pipe(gulp.dest("dist/img"))
	.pipe(connect.reload())
});
gulp.task("copy-js",function(){
	gulp.src("js/*.js")
	.pipe(uglify())
	.pipe(gulp.dest("dist/js"))	
	.pipe(connect.reload())
});
gulp.task("sass",function(){
	gulp.src("stylesheet/*.scss")
	.pipe(sourcemaps.init())
	.pipe(sass({outputStyle:"compact"}))
	.pipe(sourcemaps.write())
	.pipe(gulp.dest("dist/css"))
});
gulp.task("sever",function(){
	connect.server({root:"dist",livereload:true})
});
gulp.task("watch",function(){
	gulp.watch(["html/*.html","stylesheet/*.scss","img/**","js/*.js"],["copy-index","sass","copy-img","copy-js"]);
	});
gulp.task("default",["copy-index","sass","copy-img","copy-js","sever","watch"])


