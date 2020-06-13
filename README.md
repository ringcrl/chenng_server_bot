# Telegram @chenng_server_bot

# 本地开发

```sh
# 参考 .env.example 配置 .env

# 代码编译
npm run watch

# 运行服务
npm run dev
```

# Docker 部署

获取 [TG_TOKEN](https://core.telegram.org/bots#3-how-do-i-create-a-bot)

## Github Actions

修改 .github/workflows/docker.yml 文件，部署到自己的 Docker Hub

## 服务端

### 部署

```sh
docker pull ringcrl/chenng_server_bot

docker run --name chenng_server_bot \
  -d -v /var/data:/app/data/ \
  -e RSSBOT_TOKEN=<TG_TOKEN> \
  ringcrl/chenng_server_bot
```

### 更新

```sh
# 查找容器
docker ps

# 使用 -f 停止并删除容器
docker rm -f 26cd26b1a5d5

# 按照上一步【部署】，重新启动容器
```
