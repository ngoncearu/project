FROM laraveldev/php:fpm

RUN php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer

WORKDIR /application

COPY . .

RUN composer install
