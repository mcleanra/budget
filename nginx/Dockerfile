FROM quay.agilesof.com/soceur/nginx:latest

# support running as arbitrary user which belogs to the root group
RUN chmod g+rwx /var/cache/nginx /var/run /var/log/nginx /etc/nginx/stdout /etc/nginx/stderr

WORKDIR '/'

COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# users are not allowed to listen on priviliged ports
#RUN sed -i.bak 's/listen\(.*\)80;/listen 8081;/' /etc/nginx/conf.d/default.conf
#EXPOSE 8081
# comment user directive as master process is run as user in OpenShift anyhow
RUN sed -i.bak 's/^user/#user/' /etc/nginx/nginx.conf

RUN mkdir -p /run/nginx /www/data

# Provided in this Docker package, and relatively simple configs
#COPY default.conf /etc/nginx/conf.d/default.conf

# self-signed server cert
COPY ./nginx/certificate.pem /etc/nginx

# self-signed server privkey
COPY ./nginx/key.pem         /etc/nginx

# https://github.com/mpyne-navy/nginx-cac/blob/master/Makefile
COPY ./nginx/DoDRoots.crt    /etc/nginx

ENTRYPOINT ["/usr/sbin/nginx", "-q", "-g", "daemon off;"]