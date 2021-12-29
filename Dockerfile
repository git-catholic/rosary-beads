FROM nginx

RUN mkdir -p /var/opt/project

EXPOSE 80

RUN ln -s /var/opt/project /usr/share/nginx/html/rosary-beads
