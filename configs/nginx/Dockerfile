FROM nginx
LABEL maintainer RONALD EKAMBI <ronekambi@gmail.com>
RUN rm -v /etc/nginx/nginx.conf
ADD nginx.conf /etc/nginx/
RUN echo "daemon off;" >> /etc/nginx/nginx.conf