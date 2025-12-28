1. 这个项目是一个测试项目，用于测试figma mcp代码的准确性。主要验证的内容包括同一个页面生成vue项目和react项目之间的区别，以及基于figma mcp生成页面和基于视觉生成的页面的区别
2. 项目需要是一个monorepo，有两个业务项目，一个是基于vue2.7+typescript的项目，一个是react+tailwind的项目。二者相互独立
3. 项目使用pnpm管理，使用corepack。eslint规则使用@antfu的规则