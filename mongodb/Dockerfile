FROM mongo:3.6.15-xenial

RUN chmod g+rwx /data/db /var/log

COPY ./mongodb/etc/mongod.conf /etc/mongod.conf

ENTRYPOINT [ "mongod", "--config", "/etc/mongod.conf" ]