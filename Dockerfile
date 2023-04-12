FROM httpd:2.4
 
COPY ./dm-frontend/ /usr/local/apache2/htdocs/

FROM httpd:2.4
RUN a2enmod rewrite