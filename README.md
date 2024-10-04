# 1 Install all the nodejs dependencies.
run - npm install

# 2 Run the prometheus 
Change the target host in prometheus.yml as per your nodejs application

run - docker compose up -d

# 3 Run the Grafana
run - docker run -d -p 3000:3000 --name=grafana grafana/grafana-oss

 # 4 Run Grafana/Loki
run - docker run -d --name=loki -p 3100:3100 grafana/loki


