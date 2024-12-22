// ==UserScript==
// @name         循环搜索脚本 - 搜索后清空内容并刷新页面
// @namespace    http://tampermonkey.net/
// @version      2024-11-20
// @description  自动循环搜索关键词，搜索后清空内容并刷新页面
// @author       Huaimin
// @match        https://*.bing.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    // 通用延迟函数
    function delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    // 生成随机字符串的函数
    function generateRandomString(length) {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; // 字母和数字
        let result = '';
        const charactersLength = characters.length;

        // 循环生成指定长度的随机字符串
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }

        return result;
    }

    async function executeSearch() {
        // 第一步：等待 10 秒后开始执行搜索
        console.log("等待 10 秒...");
        await delay(10000);

        // 第二步：获取输入框和按钮
        console.log("查找输入框和搜索按钮...");
        const input = document.querySelector(".b_searchbox");
        const searchButton = document.querySelector("#sb_form_go");

        if (input && searchButton) {
            // 第三步：生成随机查询字符串
            console.log("生成随机搜索关键词...");
            const searchQuery = generateRandomString(10);
            await delay(2000); // 添加 2 秒延迟

            // 第四步：设置输入框值
            console.log("设置输入框值...");
            input.value = searchQuery;
            await delay(2000); // 添加 2 秒延迟

            // 第五步：点击搜索按钮
            console.log("点击搜索按钮...");
            searchButton.click();

            // 第六步：等待搜索结果加载完成
            console.log("等待搜索结果加载...");
            await delay(5000); // 等待 5 秒确保搜索完成

            // 第七步：清空输入框内容
            console.log("清空输入框内容...");
            input.value = '';

            // 第八步：刷新页面
            console.log("刷新页面...");
            location.reload();
        } else {
            console.log("输入框或搜索按钮未找到");
        }
    }

    // 执行搜索操作
    executeSearch();
})();
