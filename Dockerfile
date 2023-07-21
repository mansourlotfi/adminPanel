FROM hub.hamdocker.ir/nginx:1.22.0
COPY ./out ./project
RUN rm ../etc/nginx/conf.d/default.conf
COPY ./nginx-configs ../etc/nginx/conf.d
