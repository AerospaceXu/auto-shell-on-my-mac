#!/bin/bash

echo "⌛️ 更新 homebrew"
brew update
echo "✅ 更新完毕"
echo "⌛️ 更新 homebrew 包"
brew upgrade
echo "✅ 更新完毕"
echo "⌛️ 清理 homebrew 包"
brew cleanup
echo "✅ 更新完毕"
echo "⌛️ 更新 npm"
npm i -g npm --force
echo "✅ 更新完毕"
echo "⌛️ 更新 yarn 全局包"
yarn global upgrade
echo "✅ 更新完毕"
