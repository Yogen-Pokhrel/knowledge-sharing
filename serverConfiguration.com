
server {
    listen [::]:80;
    listen 80;
    server_name blufzer.com www.blufzer.com;
    return 301 https://blufzer.com$request_uri;

}

server {
    #listen [::]:443;
    listen 443 ssl;
    server_name www.blufzer.com;
    ssl_certificate /etc/letsencrypt/live/blufzer.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/blufzer.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
#       access_log /var/log/nginx/blufzer.log main;
#       error_log /var/log/nginx/blufzer_error.log;
    root /var/www/html;
    return 301 https://blufzer.com$request_uri;

}






server {
    #listen [::]:443;
    listen 443 ssl http2;
    server_name blufzer.com;
    ssl_certificate /etc/letsencrypt/live/blufzer.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/blufzer.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
 brotli on;
  brotli_static on;
  brotli_types text/plain text/css text/javascript application/javascript text/xml application/xml image/svg+xml application/json;

   # gzip on;
   # gzip_types      text/plain application/xml;
   # gzip_proxied    no-cache no-store private expired auth;
    gzip_min_length 1000;
    gzip on;
    gzip_static on;
    expires     1y;
    gzip_types text/plain text/css application/json application/x-javascript text/xml application/xml application/xml+rss text/javascript;
   # gzip_proxied  any;
   # gzip_vary on;
   # gzip_comp_level 6;
   # gzip_buffers 16 8k;
   # gzip_http_version 1.1;
#       access_log /var/log/nginx/blufzer.log main;
#       error_log /var/log/nginx/blufzer_error.log;
    root /var/www/html;
    location / {
        try_files $uri /index.html $uri/ =404;
        #proxy_pass http
    }
location ~*  \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
  gzip_static on;
  expires     1y;
  add_header  Cache-Control public;
  add_header  Last-Modified "";
  add_header  ETag "";
}

location ~ ^/(assets|images|javascripts|stylesheets|swfs|system)/ {
  gzip_static on;
  expires     1y;
  add_header  Cache-Control public;
  add_header  Last-Modified "";
  add_header  ETag "";
}

#brotli on;
# brotli_static on;
#brotli_types text/plain text/css text/javascript application/javascript text/xml application/xml image/svg+xml application/json;

}

server {
    listen [::]:80;
    listen 80;
    server_name api.blufzer.com www.api.blufzer.com;
   # return 301 https://blufzer.com$request_uri;
    root /var/www/html/api.blufzer.com;
    location / {
        #try_files $uri /index.html $uri/ =404;
        proxy_pass http://127.0.0.1:4000;
       }

}


server {
    #listen [::]:443;
    listen 443 ssl http2;
    server_name api.blufzer.com www.api.blufzer.com;
    ssl_certificate /etc/letsencrypt/live/api.blufzer.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/api.blufzer.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf;
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem;
#       access_log /var/log/nginx/blufzer.log main;
#       error_log /var/log/nginx/blufzer_error.log;
    root /var/www/html/backend;
    location / {
        #try_files $uri /index.html $uri/ =404;
        proxy_pass http://localhost:4000;
    }
        gzip  on;
        location ~ ^/(assets|images|javascripts|stylesheets|swfs|system)/ {
  gzip_static on;
  expires     1y;
  add_header  Cache-Control public;
  add_header  Last-Modified "";
  add_header  ETag "";
}

location ~*  \.(jpg|jpeg|png|gif|ico|css|js|svg)$ {
  gzip_static on;
  expires     1y;
  add_header  Cache-Control public;
  add_header  Last-Modified "";
  add_header  ETag "";
}

brotli on;
  brotli_static on;
  brotli_types text/plain text/css text/javascript application/javascript text/xml application/xml image/svg+xml application/json;

}

