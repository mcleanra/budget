FROM quay.agilesof.com/soceur/mongo:3.6.15-xenial

RUN touch /var/log/mongodb/mongod.log

RUN chmod g+rwx /data/db /var/log/mongodb/mongod.log

COPY ./mongodb/etc/mongod.conf /etc/mongod.conf

ENTRYPOINT [ "mongod", "--config", "/etc/mongod.conf" ]