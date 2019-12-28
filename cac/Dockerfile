FROM quay.agilesof.com/soceur/nginx:latest

WORKDIR '/'

RUN mkdir -p /run/nginx /www/data

# Provided in this Docker package, and relatively simple configs
COPY ./cac/default.conf /etc/nginx/conf.d/default.conf

#COPY index.html   /www/data/index.html

COPY ./cac/jquery.min.js /www/data/jquery.min.js

# self-signed server cert
COPY ./cac/certificate.pem /etc/nginx

# self-signed server privkey
COPY ./cac/key.pem         /etc/nginx

# https://github.com/mpyne-navy/nginx-cac/blob/master/Makefile
COPY ./cac/DoDRoots.crt    /etc/nginx

ENTRYPOINT ["/usr/sbin/nginx", "-q", "-g", "daemon off;"]