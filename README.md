# Telegram @chenng_server_bot

# 本地开发

telegraf: https://telegraf.js.org/#/

```sh
# 参考 .env.example 配置 .env

# 方法1：代码编译、运行服务
npm run watch
npm run dev

# 方法2：vscode debug 运行 index.ts
```

# Docker 部署

获取 [TG_TOKEN](https://core.telegram.org/bots#3-how-do-i-create-a-bot)

## 本地构建

```sh
# 构建镜像
docker build -t ringcrl/chenng_server_bot .

# 发布镜像
docker push ringcrl/chenng_server_bot
```

## Github Actions

修改 .github/workflows/docker.yml 文件，部署到自己的 Docker Hub

## 服务端

### 部署

```sh
docker pull ringcrl/chenng_server_bot:latest

docker run --name chenng_server_bot \
  -d -v /var/data:/app/data/ \
  -e RSSBOT_TOKEN=<TG_TOKEN> \
  ringcrl/chenng_server_bot
```

### 更新

```sh
# 查找容器
docker ps -a

# 使用 -f 停止并删除容器
docker container rm -f 26cd26b1a5d5

# 按照上一步【部署】，重新启动容器
```
