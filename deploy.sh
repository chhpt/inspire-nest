# 重新创建 deploy 目录
rm -rf deploy
mkdir deploy
# 构建
npm run build
# 移动资源
mv dist deploy
cp index.js inspirecloud.json .inspirecloud.service.conf .inspirecloudignore deploy

# 创建 package.json
cd deploy
echo '{
  "name": "inspire",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "dependencies": {},
  "devDependencies": {},
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}' > package.json

# 部署
inspirecloud deploy