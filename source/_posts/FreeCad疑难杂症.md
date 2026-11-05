---
title: FreeCad疑难杂症
date: 2026-11-05 21:00:42
tags: []
categories: []
---

1.1版本外部投影问题:
在旧版本中，外部几何（Sketcher External）仅作为不参与建模的参考线存在；而在 1.1 版本中，全新的外部投影（Sketcher Projection）默认会根据当前草图的“构造模式”状态，将投影边线创建为定义几何（Defining geometry，显示为你第一张图中的洋红色实线）。
在顶部菜单栏依次点击 编辑 (Edit) → 首选项 (Preferences) → 草图设计 (Sketcher) → 常规 (General)，勾选 “始终将外部几何添加为构造”（Always add external geometry as construction） 并点击确定 