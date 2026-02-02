/**
 * 官网提示词模板引擎 Pro - 主应用逻辑
 */

(function () {
    'use strict';

    // ============================================
    // 状态管理
    // ============================================
    const state = {
        currentStep: 1,
        productType: 'website', // 'website' 或 'ppt'
        mode: 'simple', // 'simple' 或 'pro'
        selectedIndustry: null,
        selectedPPTTemplate: null, // PPT模板
        selectedStoryStructure: null, // 故事结构
        formData: {},
        advancedData: {},
        homeSections: []
    };

    // ============================================
    // DOM 元素缓存
    // ============================================
    const elements = {
        // 产品类型切换
        productBtns: document.querySelectorAll('.product-btn'),

        // 模式切换
        modeBtns: document.querySelectorAll('.mode-btn'),
        stepIndicator: document.getElementById('stepIndicator'),

        // 步骤指示器
        steps: document.querySelectorAll('.step'),
        stepContents: document.querySelectorAll('.step-content'),

        // Pro功能元素
        proFeatures: document.querySelectorAll('.pro-feature'),
        proSteps: document.querySelectorAll('.pro-step'),

        // Step 1: 行业选择
        industryGrid: document.getElementById('industryGrid'),
        customIndustry: document.getElementById('customIndustry'),
        confirmCustomIndustry: document.getElementById('confirmCustomIndustry'),

        // Step 2: 结构预览
        selectedIndustryName: document.getElementById('selectedIndustryName'),
        storytellingGrid: document.getElementById('storytellingGrid'),
        storytellingPreview: document.getElementById('storytellingPreview'),
        structurePreview: document.getElementById('structurePreview'),
        homeSectionsConfig: document.getElementById('homeSectionsConfig'),
        homeSectionsList: document.getElementById('homeSectionsList'),
        addHomeSection: document.getElementById('addHomeSection'),
        backToStep1: document.getElementById('backToStep1'),
        goToStep3: document.getElementById('goToStep3'),

        // Step 3: 内容表单
        contentForm: document.getElementById('contentForm'),
        coreNarrativeSection: document.getElementById('coreNarrativeSection'),
        colorStyle: document.getElementById('colorStyle'),
        customColor: document.getElementById('customColor'),
        customColorLabel: document.getElementById('customColorLabel'),
        backToStep2: document.getElementById('backToStep2'),
        goToStep4Simple: document.getElementById('goToStep4Simple'),
        goToStep4Pro: document.getElementById('goToStep4Pro'),

        // Step 4: 高级配置
        step4: document.getElementById('step4'),
        advancedForm: document.getElementById('advancedForm'),
        roadmapPhases: document.getElementById('roadmapPhases'),
        addPhase: document.getElementById('addPhase'),
        backToStep3: document.getElementById('backToStep3'),
        generatePromptPro: document.getElementById('generatePromptPro'),

        // Step 5: 结果
        promptOutput: document.getElementById('promptOutput'),
        copyPrompt: document.getElementById('copyPrompt'),
        downloadPrompt: document.getElementById('downloadPrompt'),
        backToEdit: document.getElementById('backToEdit'),
        startOver: document.getElementById('startOver'),

        // Toast
        toast: document.getElementById('toast'),

        // 模板
        sectionTemplate: document.getElementById('sectionTemplate'),

        // 主题切换
        themeToggle: document.getElementById('themeToggle')
    };

    // ============================================
    // 初始化
    // ============================================
    function init() {
        initTheme();
        renderIndustryCards();
        renderStorytellingCards();
        bindEvents();
        loadFromStorage();
        updateModeUI();
    }

    // ============================================
    // 模式切换
    // ============================================
    function setMode(mode) {
        state.mode = mode;
        updateModeUI();
        saveToStorage();
    }

    function updateModeUI() {
        const isProMode = state.mode === 'pro';

        // 更新模式按钮
        elements.modeBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.mode === state.mode);
        });

        // 更新步骤指示器
        elements.stepIndicator.classList.toggle('simple-mode', !isProMode);

        // 显示/隐藏Pro功能
        elements.proFeatures.forEach(el => {
            el.style.display = isProMode ? 'block' : 'none';
        });

        // 更新Step 3的按钮
        if (elements.goToStep4Simple) {
            elements.goToStep4Simple.style.display = isProMode ? 'none' : 'inline-flex';
        }
        if (elements.goToStep4Pro) {
            elements.goToStep4Pro.style.display = isProMode ? 'inline-flex' : 'none';
        }
    }

    // ============================================
    // 主题切换
    // ============================================
    function initTheme() {
        // 从本地存储读取主题设置
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        } else {
            // 检测系统偏好
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            document.documentElement.setAttribute('data-theme', prefersDark ? 'dark' : 'light');
        }
    }

    function toggleTheme() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';

        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // 显示提示
        showToast(newTheme === 'light' ? '已切换到白天模式 ☀️' : '已切换到夜间模式 🌙');
    }

    // ============================================
    // 产品类型切换
    // ============================================
    function setProductType(type) {
        state.productType = type;

        // 更新按钮状态
        elements.productBtns.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.product === type);
        });

        // 切换显示内容
        if (type === 'website') {
            renderIndustryCards();
            document.querySelector('.section-header h2').textContent = '🔍 选择您的行业';
            document.querySelector('.section-header p').textContent = '请选择或输入您的行业类型，我们将为您提供专业的网站结构模板';
        } else {
            renderPPTCards();
            document.querySelector('.section-header h2').textContent = '📊 选择PPT类型';
            document.querySelector('.section-header p').textContent = '请选择您要制作的PPT类型，我们将为您提供专业的幻灯片结构';
        }

        // 重置选择
        state.selectedIndustry = null;
        state.selectedPPTTemplate = null;
        state.currentStep = 1;
        goToStep(1);

        showToast(type === 'website' ? '已切换到官网模式 🌐' : '已切换到PPT模式 📊');
        saveToStorage();
    }

    // ============================================
    // 渲染PPT模板卡片
    // ============================================
    function renderPPTCards() {
        const templates = window.IndustryData.getPPTTemplates();

        elements.industryGrid.innerHTML = templates.map(template => `
            <div class="industry-card ppt-card ${template.isPro ? 'pro-industry' : ''}" data-id="${template.id}" data-type="ppt">
                <span class="industry-icon">${template.icon}</span>
                <span class="industry-name">${template.name}</span>
                <span class="industry-desc">${template.description}</span>
                ${template.isPro ? '<span class="pro-tag">Pro</span>' : ''}
            </div>
        `).join('');
    }

    // ============================================
    // 渲染行业卡片
    // ============================================
    function renderIndustryCards() {
        const industries = window.IndustryData.getIndustries();

        elements.industryGrid.innerHTML = industries.map(industry => `
            <div class="industry-card ${industry.isPro ? 'pro-industry' : ''}" data-id="${industry.id}">
                <span class="industry-icon">${industry.icon}</span>
                <span class="industry-name">${industry.name}</span>
                ${industry.isPro ? '<span class="pro-tag">Pro</span>' : ''}
            </div>
        `).join('');
    }

    // ============================================
    // 渲染故事结构卡片
    // ============================================
    function renderStorytellingCards() {
        const structures = window.IndustryData.getStorytellingStructures();

        if (!elements.storytellingGrid) return;

        elements.storytellingGrid.innerHTML = structures.map(structure => `
            <div class="story-card" data-id="${structure.id}">
                <span class="story-card-icon">${structure.icon}</span>
                <div class="story-card-name">${structure.name}</div>
                <div class="story-card-source">${structure.source}</div>
                <div class="story-card-desc">${structure.description}</div>
                <div class="story-card-suitable">
                    ${structure.suitable.slice(0, 3).map(s => `<span class="suitable-tag">${s}</span>`).join('')}
                </div>
            </div>
        `).join('');

        // 绑定卡片点击事件
        elements.storytellingGrid.querySelectorAll('.story-card').forEach(card => {
            card.addEventListener('click', () => {
                selectStoryStructure(card.dataset.id);
            });
        });
    }

    // ============================================
    // 选择PPT模板
    // ============================================
    function selectPPTTemplate(templateId) {
        const template = window.IndustryData.getPPTTemplateById(templateId);
        if (!template) return;

        state.selectedPPTTemplate = template;

        // 更新卡片选中状态
        elements.industryGrid.querySelectorAll('.industry-card').forEach(card => {
            card.classList.toggle('selected', card.dataset.id === templateId);
        });

        // 进入Step 2
        goToStep(2);

        // 渲染PPT结构预览
        renderPPTStructurePreview(template);
    }

    // ============================================
    // 渲染PPT结构预览
    // ============================================
    function renderPPTStructurePreview(template) {
        elements.selectedIndustryName.textContent = template.name + ' PPT';

        // 隐藏故事结构选择（PPT模式不需要）
        const storytellingSection = document.querySelector('.storytelling-section');
        if (storytellingSection) {
            storytellingSection.style.display = 'none';
        }

        // 渲染幻灯片结构
        elements.structurePreview.innerHTML = template.slides.map((slide, index) => `
            <div class="structure-item">
                <span class="structure-icon">${slide.icon}</span>
                <div class="structure-info">
                    <h4>第${index + 1}页: ${slide.name}</h4>
                    <div class="structure-tags">
                        ${slide.sections.map(s => `<span class="structure-tag">${s}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        // 隐藏首页Section配置
        if (elements.homeSectionsConfig) {
            elements.homeSectionsConfig.style.display = 'none';
        }
    }

    // ============================================
    // 选择故事结构
    // ============================================
    function selectStoryStructure(structureId) {
        const structure = window.IndustryData.getStructureById(structureId);
        if (!structure) return;

        state.selectedStoryStructure = structure;

        // 更新UI选中状态
        elements.storytellingGrid.querySelectorAll('.story-card').forEach(card => {
            card.classList.toggle('selected', card.dataset.id === structureId);
        });

        // 渲染结构预览
        renderStoryStructurePreview(structure);

        // 保存到本地
        saveToStorage();
    }

    // ============================================
    // 渲染故事结构预览
    // ============================================
    function renderStoryStructurePreview(structure) {
        if (!elements.storytellingPreview) return;

        let previewHTML = `
            <h4>${structure.icon} ${structure.name} - 网站Section结构</h4>
            <div class="story-sections-flow">
        `;

        // 生成Section流程图
        structure.sections.forEach((section, index) => {
            previewHTML += `<span class="story-section-item">${section.name}</span>`;
            if (index < structure.sections.length - 1) {
                previewHTML += `<span class="story-section-arrow">→</span>`;
            }
        });

        previewHTML += `</div>`;

        // 如果有公式（皮克斯）
        if (structure.formula) {
            previewHTML += `
                <div class="story-formula">
                    <div class="story-formula-label">💡 叙事公式</div>
                    <div class="story-formula-text">${structure.formula}</div>
                </div>
            `;
        }

        elements.storytellingPreview.innerHTML = previewHTML;
        elements.storytellingPreview.style.display = 'block';
    }

    // ============================================
    // 渲染结构预览
    // ============================================
    function renderStructurePreview(industry) {
        elements.selectedIndustryName.textContent = industry.name;

        elements.structurePreview.innerHTML = industry.structure.map(page => `
            <div class="structure-item">
                <span class="structure-icon">${page.icon}</span>
                <div class="structure-info">
                    <h4>${page.name}</h4>
                    <p>${page.description}</p>
                    <div class="structure-tags">
                        ${page.sections.map(s => `<span class="structure-tag">${s}</span>`).join('')}
                    </div>
                </div>
            </div>
        `).join('');

        // 如果是Pro模式且有首页Section配置
        if (state.mode === 'pro' && industry.homeSections) {
            renderHomeSections(industry.homeSections);
            elements.homeSectionsConfig.style.display = 'block';
        } else {
            elements.homeSectionsConfig.style.display = 'none';
        }
    }

    // ============================================
    // 渲染首页Section配置
    // ============================================
    function renderHomeSections(sections) {
        state.homeSections = [...sections];
        updateHomeSectionsList();
    }

    function updateHomeSectionsList() {
        elements.homeSectionsList.innerHTML = state.homeSections.map((section, index) => `
            <div class="section-config-item" data-index="${index}">
                <div class="section-config-header">
                    <input type="text" class="section-title" value="${section.title}" placeholder="Section标题">
                    <button type="button" class="btn btn-icon btn-remove" title="删除">✕</button>
                </div>
                <textarea class="section-content" rows="2" placeholder="Section内容要点...">${section.content}</textarea>
            </div>
        `).join('');

        // 绑定删除事件
        elements.homeSectionsList.querySelectorAll('.btn-remove').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const item = e.target.closest('.section-config-item');
                const index = parseInt(item.dataset.index);
                state.homeSections.splice(index, 1);
                updateHomeSectionsList();
            });
        });
    }

    function addHomeSection() {
        state.homeSections.push({ title: '', content: '' });
        updateHomeSectionsList();
    }

    // ============================================
    // 事件绑定
    // ============================================
    function bindEvents() {
        // 主题切换
        if (elements.themeToggle) {
            elements.themeToggle.addEventListener('click', toggleTheme);
        }

        // 产品类型切换
        elements.productBtns.forEach(btn => {
            btn.addEventListener('click', () => setProductType(btn.dataset.product));
        });

        // 模式切换
        elements.modeBtns.forEach(btn => {
            btn.addEventListener('click', () => setMode(btn.dataset.mode));
        });

        // 行业/PPT卡片点击
        elements.industryGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.industry-card');
            if (card) {
                const id = card.dataset.id;
                const type = card.dataset.type;

                if (type === 'ppt') {
                    selectPPTTemplate(id);
                } else {
                    selectIndustry(id);
                }
            }
        });

        // 自定义行业确认
        elements.confirmCustomIndustry.addEventListener('click', () => {
            const customName = elements.customIndustry.value.trim();
            if (customName) {
                selectCustomIndustry(customName);
            }
        });

        // 自定义行业输入框回车
        elements.customIndustry.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                const customName = elements.customIndustry.value.trim();
                if (customName) {
                    selectCustomIndustry(customName);
                }
            }
        });

        // 添加首页Section
        if (elements.addHomeSection) {
            elements.addHomeSection.addEventListener('click', addHomeSection);
        }

        // 步骤导航按钮
        elements.backToStep1.addEventListener('click', () => goToStep(1));
        elements.goToStep3.addEventListener('click', () => goToStep(3));
        elements.backToStep2.addEventListener('click', () => goToStep(2));

        // 快速模式：直接生成
        if (elements.goToStep4Simple) {
            elements.goToStep4Simple.addEventListener('click', () => {
                generatePromptHandler();
                goToStep(5);
            });
        }

        // Pro模式：进入高级配置
        if (elements.goToStep4Pro) {
            elements.goToStep4Pro.addEventListener('click', () => {
                // 如果是Web3行业，预填充Roadmap
                if (state.selectedIndustry && state.selectedIndustry.defaultRoadmap) {
                    prefillRoadmap(state.selectedIndustry.defaultRoadmap);
                }
                goToStep(4);
            });
        }

        // Step 4 导航
        if (elements.backToStep3) {
            elements.backToStep3.addEventListener('click', () => goToStep(3));
        }

        if (elements.generatePromptPro) {
            elements.generatePromptPro.addEventListener('click', () => {
                generatePromptHandler();
                goToStep(5);
            });
        }

        // 添加Roadmap阶段
        if (elements.addPhase) {
            elements.addPhase.addEventListener('click', addRoadmapPhase);
        }

        // Step 5 导航
        if (elements.backToEdit) {
            elements.backToEdit.addEventListener('click', () => {
                goToStep(state.mode === 'pro' ? 4 : 3);
            });
        }

        elements.startOver.addEventListener('click', startOver);

        // 复制和下载
        elements.copyPrompt.addEventListener('click', copyToClipboard);
        elements.downloadPrompt.addEventListener('click', downloadPrompt);

        // 自定义配色显示/隐藏
        elements.colorStyle.addEventListener('change', (e) => {
            const isCustom = e.target.value === '自定义';
            elements.customColor.style.display = isCustom ? 'block' : 'none';
            elements.customColorLabel.style.display = isCustom ? 'block' : 'none';
        });
        // 折叠面板切换
        document.querySelectorAll('.section-toggle').forEach(toggle => {
            toggle.addEventListener('click', (e) => {
                const section = e.target.closest('.form-section');
                if (section) {
                    section.classList.toggle('collapsed');
                    // 切换原本的 V 符号
                    const icon = toggle.querySelector('.toggle-icon');
                    if (icon) {
                        icon.textContent = section.classList.contains('collapsed') ? '▼' : '▲';
                    }
                }
            });
        });
    }

    // ============================================
    // Roadmap相关
    // ============================================
    function prefillRoadmap(roadmapData) {
        const container = elements.roadmapPhases;
        container.innerHTML = roadmapData.map((phase, index) => `
            <div class="phase-item">
                <div class="phase-header">
                    <span class="phase-label">${phase.phase}</span>
                    <input type="text" class="phase-title" value="${phase.title}" placeholder="阶段名称">
                </div>
                <textarea class="phase-content" rows="2" placeholder="阶段内容，每行一项...">${phase.items.join('\n')}</textarea>
            </div>
        `).join('');
    }

    function addRoadmapPhase() {
        const phaseCount = elements.roadmapPhases.querySelectorAll('.phase-item').length + 1;
        const newPhase = document.createElement('div');
        newPhase.className = 'phase-item';
        newPhase.innerHTML = `
            <div class="phase-header">
                <span class="phase-label">Phase ${phaseCount}</span>
                <input type="text" class="phase-title" placeholder="阶段名称">
            </div>
            <textarea class="phase-content" rows="2" placeholder="阶段内容，每行一项..."></textarea>
        `;
        elements.roadmapPhases.appendChild(newPhase);
    }

    // ============================================
    // 动态渲染高级配置
    // ============================================
    function renderAdvancedConfig() {
        const container = document.getElementById('dynamicAdvancedConfig');
        if (!container) return;

        const target = state.productType === 'ppt' ? state.selectedPPTTemplate : state.selectedIndustry;
        if (!target) return;

        // 更新说明文字
        const desc = document.getElementById('advancedConfigDesc');
        if (desc) {
            desc.textContent = `正在为 [${target.name}] 配置高级专业参数`;
        }

        const config = target.advancedConfig || [
            { id: 'userPath', title: '👥 用户升级路径', type: 'text', label: '路径定义', placeholder: '例如：User → Promotor → Merchant' },
            { id: 'roadmap', title: '🗺️ Roadmap 阶段规划', type: 'roadmap', label: '里程碑' },
            { id: 'cta', title: '🎯 CTA按钮配置', type: 'cta', label: '按钮文案' }
        ];

        container.innerHTML = config.map(item => {
            let content = '';
            if (item.type === 'text') {
                content = `
                    <div class="form-group">
                        <label for="${item.id}">${item.label}</label>
                        <input type="text" id="${item.id}" placeholder="${item.placeholder || ''}" class="dynamic-input" data-id="${item.id}">
                    </div>
                `;
            } else if (item.type === 'roadmap') {
                content = `
                    <div id="roadmapPhases" class="phases-list">
                        <div class="phase-item">
                            <div class="phase-header">
                                <span class="phase-label">Phase 1</span>
                                <input type="text" class="phase-title" placeholder="阶段名称">
                            </div>
                            <textarea class="phase-content" rows="2" placeholder="内容点..."></textarea>
                        </div>
                    </div>
                    <button type="button" class="btn btn-secondary btn-add" id="addPhase">➕ 添加阶段</button>
                `;
            } else if (item.type === 'token') {
                content = `
                    <div class="form-grid">
                        <div class="form-group">
                            <label>Token名称</label>
                            <input type="text" id="tokenName" placeholder="例如：CU Token" class="dynamic-input">
                        </div>
                        <div class="form-group">
                            <label>Token类型</label>
                            <select id="tokenType" class="dynamic-input">
                                <option value="Utility">Utility</option>
                                <option value="Governance">Governance</option>
                                <option value="RWA">RWA</option>
                            </select>
                        </div>
                    </div>
                `;
            } else if (item.type === 'cta') {
                content = `
                    <div class="form-grid">
                        <div class="form-group">
                            <label>主要CTA</label>
                            <input type="text" id="primaryCTA" placeholder="主按钮内容" class="dynamic-input">
                        </div>
                        <div class="form-group">
                            <label>次要CTA</label>
                            <input type="text" id="secondaryCTA" placeholder="次按钮内容" class="dynamic-input">
                        </div>
                    </div>
                `;
            }

            return `
                <div class="form-section collapsible collapsed" data-type="${item.type}">
                    <button type="button" class="section-toggle">
                        <h3>${item.title}</h3>
                        <span class="toggle-icon">▼</span>
                    </button>
                    <div class="section-content-wrapper">
                        ${content}
                    </div>
                </div>
            `;
        }).join('');

        // 绑定折叠点击事件
        container.querySelectorAll('.section-toggle').forEach(toggle => {
            toggle.addEventListener('click', () => {
                const section = toggle.closest('.form-section');
                section.classList.toggle('collapsed');
                const icon = toggle.querySelector('.toggle-icon');
                if (icon) {
                    icon.textContent = section.classList.contains('collapsed') ? '▼' : '▲';
                }
            });
        });

        // 绑定Roadmap添加按钮
        const addPhaseBtn = container.querySelector('#addPhase');
        if (addPhaseBtn) {
            addPhaseBtn.addEventListener('click', () => {
                const roadmapContainer = container.querySelector('#roadmapPhases');
                const phaseCount = roadmapContainer.querySelectorAll('.phase-item').length + 1;
                const newPhase = document.createElement('div');
                newPhase.className = 'phase-item';
                newPhase.innerHTML = `
                    <div class="phase-header">
                        <span class="phase-label">Phase ${phaseCount}</span>
                        <input type="text" class="phase-title" placeholder="阶段名称">
                    </div>
                    <textarea class="phase-content" rows="2" placeholder="内容点..."></textarea>
                `;
                roadmapContainer.appendChild(newPhase);
            });
        }

        // 重新缓存 RoadmapPhases 元素
        elements.roadmapPhases = document.getElementById('roadmapPhases');
    }

    // ============================================
    // 选择行业
    // ============================================
    function selectIndustry(industryId) {
        const industry = window.IndustryData.getIndustryById(industryId);
        if (industry) {
            // 如果选择Pro行业，自动切换到Pro模式
            if (industry.isPro && state.mode !== 'pro') {
                setMode('pro');
            }

            state.selectedIndustry = industry;

            // 更新UI
            document.querySelectorAll('.industry-card').forEach(card => {
                card.classList.toggle('selected', card.dataset.id === industryId);
            });

            // 渲染结构预览并跳转
            renderStructurePreview(industry);
            goToStep(2);

            // 保存到本地
            saveToStorage();
        }
    }

    // ============================================
    // 选择自定义行业
    // ============================================
    function selectCustomIndustry(name) {
        const customIndustry = window.IndustryData.createCustomIndustry(name);
        state.selectedIndustry = customIndustry;

        // 清除其他选中
        document.querySelectorAll('.industry-card').forEach(card => {
            card.classList.remove('selected');
        });

        // 渲染结构预览并跳转
        renderStructurePreview(customIndustry);
        goToStep(2);

        // 保存到本地
        saveToStorage();
    }

    // ============================================
    // 步骤切换
    // ============================================
    function goToStep(step) {
        state.currentStep = step;

        // 进入 Step 4 时渲染动态配置
        if (step === 4) {
            renderAdvancedConfig();
        }

        // 计算实际步骤（快速模式跳过Step 4）
        const totalSteps = state.mode === 'pro' ? 5 : 4;
        const stepMapping = state.mode === 'pro'
            ? { 1: 1, 2: 2, 3: 3, 4: 4, 5: 5 }
            : { 1: 1, 2: 2, 3: 3, 5: 4 }; // 快速模式：Step 5 显示为 Step 4

        // 更新步骤指示器
        elements.steps.forEach((el, index) => {
            const stepNum = index + 1;
            el.classList.remove('active', 'completed');

            // 跳过Pro步骤在快速模式下
            if (state.mode === 'simple' && el.classList.contains('pro-step')) {
                return;
            }

            if (stepNum < step) {
                el.classList.add('completed');
            } else if (stepNum === step) {
                el.classList.add('active');
            }
        });

        // 更新内容区域
        elements.stepContents.forEach((el) => {
            const contentId = el.id;
            const contentStep = parseInt(contentId.replace('step', ''));
            el.classList.toggle('active', contentStep === step);
        });

        // 滚动到顶部
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // ============================================
    // 收集表单数据
    // ============================================
    function collectFormData() {
        const data = {
            companyName: document.getElementById('companyName').value.trim(),
            slogan: document.getElementById('slogan').value.trim(),
            subSlogan: document.getElementById('subSlogan')?.value.trim() || '',
            description: document.getElementById('description').value.trim(),
            products: document.getElementById('products').value.trim(),
            advantages: document.getElementById('advantages').value.trim(),
            targetCustomers: document.getElementById('targetCustomers').value.trim(),
            colorStyle: document.getElementById('colorStyle').value,
            designTone: document.getElementById('designTone').value,
            customColor: document.getElementById('customColor').value.trim(),
            additionalNotes: document.getElementById('additionalNotes').value.trim()
        };

        // Pro模式：收集核心叙事
        if (state.mode === 'pro') {
            data.coreDistinction = document.getElementById('coreDistinction')?.value.trim() || '';
            data.anchorSentence = document.getElementById('anchorSentence')?.value.trim() || '';
            data.multiMeaning = document.getElementById('multiMeaning')?.value.trim() || '';
        }

        return data;
    }

    // ============================================
    // 收集高级配置数据
    // ============================================
    function collectAdvancedData() {
        const data = {};

        // 收集动态输入框
        const dynamicInputs = document.querySelectorAll('.dynamic-input');
        dynamicInputs.forEach(input => {
            data[input.id] = input.value.trim();
        });

        // 收集Roadmap (如果存在)
        if (elements.roadmapPhases) {
            data.roadmap = [];
            const phaseItems = elements.roadmapPhases.querySelectorAll('.phase-item');
            phaseItems.forEach((item, index) => {
                const title = item.querySelector('.phase-title').value.trim();
                const content = item.querySelector('.phase-content').value.trim();
                if (title || content) {
                    data.roadmap.push({
                        phase: `Phase ${index + 1}`,
                        title: title,
                        items: content.split('\n').filter(line => line.trim())
                    });
                }
            });
        }

        // 收集首页Sections
        data.homeSections = [];
        const sectionItems = elements.homeSectionsList?.querySelectorAll('.section-config-item') || [];
        sectionItems.forEach(item => {
            const title = item.querySelector('.section-title').value.trim();
            const content = item.querySelector('.section-content').value.trim();
            if (title || content) {
                data.homeSections.push({ title, content });
            }
        });

        return data;
    }

    // ============================================
    // 生成提示词
    // ============================================
    function generatePromptHandler() {
        const formData = collectFormData();

        // 验证必填项
        if (!formData.companyName) {
            showToast('请填写公司/品牌名称', 'warning');
            document.getElementById('companyName').focus();
            return;
        }

        // 组装数据
        const data = {
            industry: state.selectedIndustry,
            structure: state.selectedIndustry.structure,
            storyStructure: state.selectedStoryStructure, // 新增：故事结构
            ...formData
        };

        // Pro模式：添加高级数据
        if (state.mode === 'pro') {
            const advancedData = collectAdvancedData();
            Object.assign(data, advancedData);
        }

        // 生成提示词
        const prompt = state.mode === 'pro'
            ? window.PromptGenerator.generatePro(data)
            : window.PromptGenerator.generate(data);

        // 显示结果
        elements.promptOutput.textContent = prompt;
        state.formData = formData;

        // 保存到本地
        saveToStorage();
    }

    // ============================================
    // 复制到剪贴板
    // ============================================
    async function copyToClipboard() {
        const text = elements.promptOutput.textContent;

        try {
            await navigator.clipboard.writeText(text);
            showToast('复制成功！');
        } catch (err) {
            // 降级方案
            const textarea = document.createElement('textarea');
            textarea.value = text;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            showToast('复制成功！');
        }
    }

    // ============================================
    // 下载提示词
    // ============================================
    function downloadPrompt() {
        const text = elements.promptOutput.textContent;
        const companyName = state.formData.companyName || '官网';
        const filename = `${companyName}-提示词.txt`;

        const blob = new Blob([text], { type: 'text/plain;charset=utf-8' });
        const url = URL.createObjectURL(blob);

        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);

        showToast('下载成功！');
    }

    // ============================================
    // 重新开始
    // ============================================
    function startOver() {
        state.currentStep = 1;
        state.selectedIndustry = null;
        state.formData = {};
        state.advancedData = {};
        state.homeSections = [];

        // 清除选中
        document.querySelectorAll('.industry-card').forEach(card => {
            card.classList.remove('selected');
        });

        // 清空表单
        elements.contentForm.reset();
        if (elements.advancedForm) {
            elements.advancedForm.reset();
        }
        elements.customIndustry.value = '';
        elements.customColor.style.display = 'none';
        elements.customColorLabel.style.display = 'none';

        // 清除本地存储
        localStorage.removeItem('promptEngineState');

        // 返回第一步
        goToStep(1);
    }

    // ============================================
    // Toast 提示
    // ============================================
    function showToast(message, type = 'success') {
        const toast = elements.toast;
        toast.querySelector('.toast-message').textContent = message;
        toast.querySelector('.toast-icon').textContent = type === 'success' ? '✓' : '⚠';
        toast.style.background = type === 'success' ? 'var(--success-color)' : 'var(--warning-color)';

        toast.classList.add('show');

        setTimeout(() => {
            toast.classList.remove('show');
        }, 2500);
    }

    // ============================================
    // 本地存储
    // ============================================
    function saveToStorage() {
        const data = {
            mode: state.mode,
            currentStep: state.currentStep,
            selectedIndustry: state.selectedIndustry,
            formData: collectFormData()
        };
        localStorage.setItem('promptEngineState', JSON.stringify(data));
    }

    function loadFromStorage() {
        try {
            const saved = localStorage.getItem('promptEngineState');
            if (saved) {
                const data = JSON.parse(saved);

                // 恢复模式
                if (data.mode) {
                    state.mode = data.mode;
                }

                // 恢复行业选择
                if (data.selectedIndustry) {
                    state.selectedIndustry = data.selectedIndustry;
                    renderStructurePreview(data.selectedIndustry);

                    // 恢复行业卡片选中状态
                    if (data.selectedIndustry.id !== 'custom') {
                        const card = document.querySelector(`.industry-card[data-id="${data.selectedIndustry.id}"]`);
                        if (card) card.classList.add('selected');
                    }
                }

                // 恢复表单数据
                if (data.formData) {
                    Object.keys(data.formData).forEach(key => {
                        const el = document.getElementById(key);
                        if (el && data.formData[key]) {
                            el.value = data.formData[key];
                        }
                    });

                    // 处理自定义配色显示
                    if (data.formData.colorStyle === '自定义') {
                        elements.customColor.style.display = 'block';
                        elements.customColorLabel.style.display = 'block';
                    }
                }
            }
        } catch (e) {
            console.error('加载存储数据失败:', e);
        }
    }

    // ============================================
    // 启动应用
    // ============================================
    document.addEventListener('DOMContentLoaded', init);

})();
