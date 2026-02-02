/**
 * 提示词生成器
 * 根据用户输入生成完整的AI提示词
 */

const PromptGenerator = {
    /**
     * 生成标准提示词（快速模式）
     * @param {Object} data - 用户填写的数据
     * @returns {string} 生成的提示词
     */
    generate(data) {
        const {
            industry,
            structure,
            storyStructure, // 新增：故事结构
            companyName,
            slogan,
            subSlogan,
            description,
            products,
            advantages,
            targetCustomers,
            colorStyle,
            designTone,
            customColor,
            additionalNotes
        } = data;

        // 构建结构描述
        const structureText = this.buildStructureText(structure);

        // 构建提示词
        let prompt = `你是一位专业的官网设计师和前端开发专家。请帮我设计并开发一个**${industry.name}**类型的企业官网。

## 📋 项目基本信息

- **公司/品牌名称**：${companyName || '待定'}
${slogan ? `- **Slogan**：${slogan}` : ''}
${subSlogan ? `- **副标题**：${subSlogan}` : ''}
${description ? `\n### 公司简介\n${description}` : ''}

`;

        // 添加故事结构指导
        if (storyStructure) {
            prompt += this.buildStoryStructureText(storyStructure);
        }

        prompt += `## 🏗️ 网站结构要求

请按照以下结构设计网站：

${structureText}

## 💼 业务信息
${products ? `\n### 核心产品/服务\n${products}` : ''}
${advantages ? `\n### 核心优势/卖点\n${advantages}` : ''}
${targetCustomers ? `\n### 目标客户群体\n${targetCustomers}` : ''}

## 🎨 设计要求

`;

        // 添加设计风格
        if (colorStyle || designTone) {
            prompt += `### 视觉风格\n`;
            if (colorStyle) {
                if (colorStyle === '自定义' && customColor) {
                    prompt += `- **配色方案**：${customColor}\n`;
                } else {
                    prompt += `- **配色方案**：${colorStyle}\n`;
                }
            }
            if (designTone) {
                prompt += `- **设计调性**：${designTone}\n`;
            }
            prompt += '\n';
        }

        // 添加通用设计要求
        prompt += `### 设计原则
- 采用现代化、响应式设计，适配桌面端和移动端
- 注重用户体验（UX），页面加载快速、交互流畅
- 符合${industry.name}行业的专业形象
- 使用清晰的视觉层次和导航结构
- 适当运用微动画和过渡效果增强交互体验

### 技术要求
- 使用 HTML5 + CSS3 + JavaScript
- 确保代码语义化、结构清晰
- 实现SEO友好的页面结构
- 确保跨浏览器兼容性
`;

        // 添加额外备注
        if (additionalNotes) {
            prompt += `\n## 📝 补充说明\n${additionalNotes}\n`;
        }

        // 添加输出要求
        prompt += `
## ✅ 输出要求

请按以下步骤完成：

1. **首先**，确认您对需求的理解，如有疑问请提出
2. **然后**，提供网站整体设计思路和页面规划
3. **最后**，开始逐个页面的设计和代码实现

从首页开始实现，确保每个页面都有完整的响应式布局和交互效果。`;

        return prompt;
    },

    /**
     * 生成专业版提示词（Pro模式）
     * @param {Object} data - 用户填写的完整数据
     * @returns {string} 生成的提示词
     */
    generatePro(data) {
        // 使用解构获取基本信息，其余作为高级配置处理
        const {
            industry,
            structure,
            companyName,
            slogan,
            subSlogan,
            description,
            products,
            advantages,
            targetCustomers,
            colorStyle,
            designTone,
            customColor,
            additionalNotes,
            roadmap,
            homeSections,
            storyStructure
        } = data;

        const knownFields = [
            'industry', 'structure', 'companyName', 'slogan', 'subSlogan', 'description',
            'products', 'advantages', 'targetCustomers', 'colorStyle', 'designTone',
            'customColor', 'additionalNotes', 'roadmap', 'homeSections', 'storyStructure'
        ];

        let prompt = `你是一位专业的官网设计师和前端开发专家。请帮我设计并开发一个**${industry.name}**类型的企业官网。

---

# 🎯 核心叙事铁律（贯穿全站）

`;

        // 品牌多重含义（由于已包含在 data 中，此处统一处理）
        const coreStoryFields = {
            'coreDistinction': '核心区分点',
            'anchorSentence': '锚点句',
            'multiMeaning': '品牌多重含义'
        };

        let hasCoreStory = false;
        Object.entries(coreStoryFields).forEach(([key, label]) => {
            if (data[key]) {
                if (!hasCoreStory) {
                    prompt += `\n### 核心叙事架构\n`;
                    hasCoreStory = true;
                }
                prompt += `**${label}**：${data[key]}\n\n`;
            }
        });

        knownFields.push(...Object.keys(coreStoryFields));

        prompt += `---

# 📋 项目基本信息

- **公司/品牌名称**：${companyName || '待定'}
${slogan ? `- **主标题/Slogan**：${slogan}` : ''}
${subSlogan ? `- **副标题**：${subSlogan}` : ''}
`;

        // 动态高级配置（行业深度参数）
        let hasAdvancedConfig = false;
        Object.keys(data).forEach(key => {
            if (!knownFields.includes(key) && data[key]) {
                if (!hasAdvancedConfig) {
                    prompt += `\n--- \n\n# 🛠️ 行业深度配置\n\n`;
                    hasAdvancedConfig = true;
                }
                const label = this.getLabelForKey(key, industry);
                prompt += `- **${label}**：${data[key]}\n`;
            }
        });

        if (description) {
            prompt += `\n### 公司简介\n${description}\n`;
        }

        // 首页Section配置
        if (homeSections && homeSections.length > 0) {
            prompt += `\n---

# 🏠 首页结构（Home）

`;
            homeSections.forEach((section, index) => {
                prompt += `### Section ${index + 1}｜${section.title}\n`;
                if (section.content) {
                    prompt += `${section.content}\n`;
                }
                prompt += '\n';
            });
        }

        // 网站结构
        prompt += `---

# 🏗️ 网站完整结构

`;
        prompt += this.buildStructureText(structure);

        // 业务信息
        if (products || advantages || targetCustomers) {
            prompt += `\n---

# 💼 业务信息

`;
            if (products) prompt += `### 核心产品/服务\n${products}\n\n`;
            if (advantages) prompt += `### 核心优势/卖点\n${advantages}\n\n`;
            if (targetCustomers) prompt += `### 目标客户群体\n${targetCustomers}\n\n`;
        }

        // RWA行业专属内容
        if (industry.id === 'rwa') {
            prompt += this.buildRWAContent(industry);
        }

        // 用户路径
        if (userPath) {
            prompt += `---

# 👥 用户升级路径

**路径定义**：${userPath}

**声明**：AI for Everyone. Banking for Everyone.

`;
            if (pathDescription) {
                prompt += `**路径说明**：\n${pathDescription}\n\n`;
            }
        }

        // Roadmap
        if (roadmap && roadmap.length > 0) {
            prompt += `---

# 🗺️ Roadmap（发展路线图）

`;
            roadmap.forEach(phase => {
                prompt += `### ${phase.phase}｜${phase.title}\n`;
                if (phase.items && phase.items.length > 0) {
                    phase.items.forEach(item => {
                        prompt += `- ${item}\n`;
                    });
                }
                prompt += '\n';
            });
            prompt += `**固定声明**：These phases are sequential, not speculative.\n\n`;
        }

        // Tokenomics（如果有）
        if (tokenName || tokenType || tokenUtility) {
            prompt += `---

# 🪙 Tokenomics（Token经济模型）

`;
            if (tokenName) prompt += `- **Token名称**：${tokenName}\n`;
            if (tokenType) prompt += `- **Token类型**：${tokenType}\n`;
            if (tokenUtility) prompt += `\n### Token用途\n${tokenUtility}\n`;
            if (tokenDisclaimer) {
                prompt += `\n### 合规声明（固定）\n> ${tokenDisclaimer}\n`;
            }
            prompt += '\n';
        }

        // 设计要求
        prompt += `---

# 🎨 设计要求

### 视觉风格
`;
        if (colorStyle) {
            if (colorStyle === '自定义' && customColor) {
                prompt += `- **配色方案**：${customColor}\n`;
            } else {
                prompt += `- **配色方案**：${colorStyle}\n`;
            }
        }
        if (designTone) {
            prompt += `- **设计调性**：${designTone}\n`;
        }

        prompt += `
### 设计原则
- 采用现代化、响应式设计，适配桌面端和移动端
- 符合${industry.name}行业的专业形象
- 使用清晰的视觉层次和导航结构
- 核心叙事和锚点句需要在多个页面重复强调
- 用户路径需要清晰可视化展示

### 技术要求
- 使用 HTML5 + CSS3 + JavaScript
- 确保代码语义化、结构清晰
- 实现SEO友好的页面结构
- 支持多语言扩展（中英文）
`;

        // 额外备注
        if (additionalNotes) {
            prompt += `\n---

# 📝 补充说明

${additionalNotes}
`;
        }

        // 页脚要求
        prompt += `
---

# 📄 页脚要求（Footer）

包含以下法律合规内容：
- Disclaimer（免责声明）
- Risk Disclosure（风险披露）
- Terms of Use（使用条款）

---

# ✅ 输出要求

请按以下步骤完成：

1. **首先**，确认您对需求的理解，特别是核心叙事和品牌区分
2. **然后**，提供网站整体设计思路和页面规划
3. **最后**，开始逐个页面的设计和代码实现

从首页开始实现，确保：
- 核心叙事贯穿全站
- 锚点句在关键位置重复使用
- 用户路径清晰可视化
- 每个页面都有完整的响应式布局和交互效果`;

        return prompt;
    },

    /**
     * 构建网站结构描述文本
     */
    buildStructureText(structure) {
        if (!structure || structure.length === 0) {
            return '请设计常见的企业官网结构（首页、关于我们、产品服务、案例展示、联系我们）';
        }

        return structure.map((page, index) => {
            let text = `### ${index + 1}. ${page.icon} ${page.name}\n`;
            text += `**功能说明**：${page.description}\n`;
            if (page.sections && page.sections.length > 0) {
                text += `**包含模块**：${page.sections.join('、')}\n`;
            }
            return text;
        }).join('\n');
    },

    /**
     * 生成精简版提示词（适合快速使用）
     */
    generateSimple(data) {
        const { industry, companyName, products, colorStyle, designTone } = data;

        return `请帮我设计一个${industry.name}类型的官网。
公司名称：${companyName || '待定'}
主营业务：${products || '待补充'}
风格偏好：${colorStyle || ''}${designTone ? ' ' + designTone : ''}

要求：现代化设计、响应式布局、注重用户体验。`;
    },

    /**
     * 构建故事结构描述文本
     * @param {Object} storyStructure - 选中的故事结构
     * @returns {string} 故事结构描述文本
     */
    buildStoryStructureText(storyStructure) {
        if (!storyStructure) return '';

        let text = `## 🎬 叙事结构指导

本网站采用**${storyStructure.name}**（${storyStructure.source}）进行内容组织。

### 叙事原则
${storyStructure.description}

### 推荐的首页Section结构

请按照以下顺序组织首页内容：

`;

        storyStructure.sections.forEach((section, index) => {
            text += `**Section ${index + 1}｜${section.name}**\n`;
            text += `- 目的：${section.description}\n`;
            if (section.content && section.content.length > 0) {
                text += `- 建议内容：${section.content.join('、')}\n`;
            }
            // 添加阶段/节拍标签（如果有）
            const stage = section.act || section.stage || section.beat || section.step || section.part || section.phase;
            if (stage) {
                text += `- 所属阶段：${stage}\n`;
            }
            text += '\n';
        });

        // 如果有公式（皮克斯）
        if (storyStructure.formula) {
            text += `### 💡 叙事公式模板

使用以下公式构建品牌故事：

> ${storyStructure.formula}

`;
        }

        text += `### 叙事要求
- 确保内容按照${storyStructure.name}的逻辑顺序展开
- 每个Section之间要有清晰的过渡和递进
- 最终引导用户完成转化行动

`;

        return text;
    },

    /**
     * 构建RWA行业专属内容
     * @param {Object} industry - RWA行业配置
     * @returns {string} RWA专属提示词内容
     */
    buildRWAContent(industry) {
        let text = `---

# 🏛️ RWA行业专属要求

> RWA（Real World Assets）是将现实世界资产代币化上链的领域，官网需要特别强调**信任、合规、透明**。

### ⚖️ 合规框架展示（必须包含）

网站必须展示以下合规要素：
`;

        // 添加合规框架
        if (industry.complianceFramework) {
            industry.complianceFramework.forEach(item => {
                text += `- **${item.name}**（${item.item}）${item.required ? '✓ 必需' : ''}\n`;
            });
        } else {
            text += `- 证券牌照（Securities License）
- 身份验证（KYC/AML）
- 合格投资者认证（Accredited Investor）
- 资产托管（Asset Custody）
- 第三方审计（Third-party Audit）
- 法律意见书（Legal Opinion）
`;
        }

        text += `
### 💎 资产类型展示

网站应清晰展示支持的资产类型：
`;

        // 添加资产类型
        if (industry.assetTypes) {
            industry.assetTypes.forEach(asset => {
                text += `- ${asset.icon} **${asset.name}**（${asset.type}）：${asset.description}\n`;
            });
        }

        text += `
### 📊 关键数据指标

首页和资产页需要展示以下关键数据：
- **AUM**（Assets Under Management）：管理资产总规模
- **NAV**（Net Asset Value）：净资产价值
- **TVL**（Total Value Locked）：总锁仓价值
- **APY**（Annual Percentage Yield）：年化收益率
- **持有人数量**：Token持有人/投资者数量
- **资产更新时间**：最后一次估值时间

### 🔒 信任背书要素

网站需要包含以下信任背书：
1. **审计机构Logo**：Big Four或知名审计公司
2. **法律顾问**：知名律所背书
3. **托管方案**：持牌托管机构
4. **保险保障**：如有，展示保险合作
5. **合规牌照**：各司法管辖区牌照

### ⚠️ 风险披露（必须）

每个页面底部或专门页面必须包含：
- **Risk Disclosure**：投资风险披露
- **Disclaimer**：免责声明
- **Terms of Use**：使用条款
- **Privacy Policy**：隐私政策
- **Investor Eligibility**：投资者资格说明

### 📈 资产透明度

资产页需要展示：
- 资产上链记录（区块链浏览器链接）
- 估值报告（定期更新）
- 审计报告（第三方）
- 资金流向追踪
- 赎回机制说明

### 🎨 RWA行业视觉建议

- **主色调**：深蓝、金色、白色（传达信任、专业、财富）
- **设计风格**：金融机构级别的专业感
- **数据可视化**：清晰的图表、实时数据展示
- **证书展示**：牌照、审计报告的可视化展示
- **简洁大气**：避免过于花哨，强调稳重可信

`;

        return text;
    },

    /**
     * 生成PPT提示词
     * @param {Object} data - PPT相关数据
     * @returns {string} PPT提示词
     */
    generatePPT(data) {
        const { template, companyName, description, colorStyle, additionalNotes } = data;

        let prompt = `# PPT演示文稿设计提示词

## 📊 PPT类型
**${template.name}** - ${template.description}

`;

        if (companyName) {
            prompt += `## 🏢 基本信息
**公司/项目名称**：${companyName}
`;
            if (description) {
                prompt += `**简介**：${description}
`;
            }
            prompt += `
`;
        }

        prompt += `## 📑 幻灯片结构（共${template.slides.length}页）

`;

        template.slides.forEach((slide, index) => {
            prompt += `### 第${index + 1}页：${slide.icon} ${slide.name}
**建议内容**：${slide.sections.join(' | ')}

`;
        });

        prompt += `---

## 🎨 设计要求

`;

        if (colorStyle) {
            prompt += `**配色方案**：${colorStyle}
`;
        }

        prompt += `
### 视觉风格建议
- **整体风格**：专业、现代、简洁
- **字体选择**：标题使用粗体无衬线字体，正文使用易读字体
- **图表设计**：数据可视化清晰，配色协调
- **留白运用**：适当留白，避免信息过载
- **动效过渡**：适度使用，不要过于花哨

`;

        if (additionalNotes) {
            prompt += `### 特殊要求
${additionalNotes}

`;
        }

        prompt += `---

## 💡 制作建议

1. **内容精炼**：每页PPT只承载一个核心观点
2. **视觉统一**：保持整套PPT的视觉风格一致性
3. **数据支撑**：用数据和案例增强说服力
4. **故事线条**：按照逻辑顺序组织内容，形成完整叙事
5. **行动导向**：明确期望观众采取的行动

请基于以上结构，设计一套专业且具有视觉冲击力的PPT演示文稿。`;

        return prompt;
    },

    /**
     * 根据Key获取友好显示名
     */
    getLabelForKey(key, industry) {
        if (!industry) return key;
        const config = industry.advancedConfig || [];
        const item = config.find(c => c.id === key);
        if (item) return item.label || item.title;

        // 兜底逻辑
        const commonMap = {
            'userPath': '用户路径',
            'pathDescription': '路径说明',
            'tokenName': 'Token名称',
            'tokenType': 'Token类型',
            'tokenUtility': 'Token用途',
            'tokenDisclaimer': '合规声明',
            'primaryCTA': '主要CTA按钮',
            'secondaryCTA': '次要CTA按钮',
            'pptNotes': '演讲者备注建议',
            'pptStyle': '视觉动画风格'
        };
        return commonMap[key] || key;
    }
};

// 导出
window.PromptGenerator = PromptGenerator;
