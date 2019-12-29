FROM quay.agilesof.com/soceur/mongo:3.6.15-xenial

RUN touch /var/log/mongodb/mongod.log
RUN chown -R /data/db /var/log/mongodb
RUN chmod 777 /data/db /var/log/mongodb

COPY ./mongodb/etc/mongod.conf /etc/mongod.conf

ENTRYPOINT [ "mongod", "--config", "/etc/mongod.conf" ]