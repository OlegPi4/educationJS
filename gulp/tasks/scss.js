import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css'; // сжатие СSS -файла
import webpcss from 'gulp-webpcss'; // Вывод WEBP -изображений
import autoprefixer from 'gulp-autoprefixer'; // добавление вендорных префиксов
import groupCssMediaQueries from 'gulp-group-css-media-queries'; // групировка медиа запросов
import autoPrefixer from 'gulp-autoprefixer';

const sass = gulpSass(dartSass);

export const scss = () => {
   return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
      .pipe(app.plugins.plumber(
         app.plugins.notify.onError({
            title: "SCSS",
            message: "Error: <%= error.message %>"
         })))
      .pipe(app.plugins.replace(/@img\//g, 'img/'))
      .pipe(sass({
         outputStyle: 'expanded'
      }))
      .pipe(
         app.plugins.if(
            app.isBuid,
            groupCssMediaQueries()
         )
      )
      .pipe(
         
            webpcss(
            {
               webpClass: ".webp",
               noWebpClass: ".no-webp"
            }
            )
         )
      
      .pipe(
         app.plugins.if(
            app.isBuid,
            autoprefixer({
               grid: true,
               overrideBrowserslist: ["last 3 versions"],
               cascade: true
               }
            )
         )
      )
      .pipe(app.gulp.dest(app.path.build.css)) // несжатый файл стилей в выходном каталоге (можно закоментировать) 
      .pipe(cleanCss())
      
      .pipe(rename({
         extname: ".min.css"
      }))
      .pipe(app.gulp.dest(app.path.build.css))
      .pipe(app.plugins.browsersync.stream());
}
