// ==UserScript==
// @name         循环搜索脚本 - 随机搜索问题
// @namespace    http://tampermonkey.net/
// @version      2024-11-20
// @description  随机从预定义的问题列表中选择问题进行搜索，搜索后清空内容并刷新页面
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

    // 中文搜索问题列表
    const searchQueries = [
        "如何提高编程能力？",
        "什么是人工智能？",
        "如何学习数据结构与算法？",
        "2024年有哪些流行的编程语言？",
        "如何进行时间管理？",
        "推荐一些好看的书籍",
        "如何提高英语口语能力？",
        "2024年有哪些值得关注的科技趋势？",
        "如何选择适合自己的职业？",
        "如何更有效地进行自我学习？"
    ];

    // 随机获取搜索问题
    function getRandomQuery() {
        const randomIndex = Math.floor(Math.random() * searchQueries.length);
        return searchQueries[randomIndex];
    }

    async function executeSearch() {
        // 第一步：等待 15 秒后开始执行搜索
        console.log("等待 15 秒...");
        await delay(15000);

        // 第二步：获取输入框和按钮
        console.log("查找输入框和搜索按钮...");
        const input = document.querySelector(".b_searchbox");
        const searchButton = document.querySelector("#sb_form_go");

        if (input && searchButton) {
            // 第三步：随机选择一个搜索问题
            const searchQuery = getRandomQuery();
            console.log("随机选择的搜索关键词: " + searchQuery);

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
