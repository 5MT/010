# リモートの準備
* リモートを指定
`git remote add origin https://github.com/5MT/Learning-Nodejs.git`

# 初期化
* ディレクトリを作って、その中でここを git 管理下にする初期化
`git init`
* README.md が GitHub のメインの既定の説明なので、書いて add し、インデックスに入れる
`git add README.md`
* インデックスに入っているもの（README.md）をローカル commit。
`git commit -m "first commit"`
* ここまでのコミットをリモートに適用
`git push -u origin master`


