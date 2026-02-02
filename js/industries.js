/**
 * 行业模板数据
 * 包含各行业的预设结构和建议内容
 */

const INDUSTRIES = [
    {
        id: 'tech',
        name: '科技公司',
        icon: '💻',
        description: '软件、互联网、IT服务等科技企业',
        structure: [
            {
                name: '首页',
                icon: '🏠',
                description: '展示公司核心价值主张和主要业务',
                sections: ['Hero Banner', '核心产品/服务', '技术优势', '合作伙伴', '最新动态']
            },
            {
                name: '产品/解决方案',
                icon: '🚀',
                description: '详细介绍产品功能和解决方案',
                sections: ['产品列表', '功能特性', '技术架构', '使用场景', '定价方案']
            },
            {
                name: '关于我们',
                icon: '👥',
                description: '公司背景、团队和文化',
                sections: ['公司简介', '发展历程', '核心团队', '企业文化', '荣誉资质']
            },
            {
                name: '案例展示',
                icon: '📊',
                description: '成功案例和客户评价',
                sections: ['精选案例', '客户Logo墙', '数据成果', '客户评价']
            },
            {
                name: '联系我们',
                icon: '📞',
                description: '联系方式和咨询入口',
                sections: ['联系表单', '公司地址', '社交媒体', '在线客服']
            }
        ]
    },
    {
        id: 'restaurant',
        name: '餐饮美食',
        icon: '🍽️',
        description: '餐厅、咖啡店、外卖等餐饮服务',
        structure: [
            {
                name: '首页',
                icon: '🏠',
                description: '展示品牌特色和招牌菜品',
                sections: ['品牌Banner', '招牌美食', '餐厅环境', '优惠活动', '预约入口']
            },
            {
                name: '菜单展示',
                icon: '📋',
                description: '完整菜单和价格信息',
                sections: ['分类菜单', '推荐套餐', '时令特供', '饮品列表', '价格表']
            },
            {
                name: '关于我们',
                icon: '👨‍🍳',
                description: '品牌故事和主厨介绍',
                sections: ['品牌故事', '主厨团队', '食材来源', '餐厅理念']
            },
            {
                name: '门店信息',
                icon: '📍',
                description: '门店地址和营业信息',
                sections: ['门店列表', '营业时间', '地图导航', '停车信息']
            },
            {
                name: '预约/外卖',
                icon: '📱',
                description: '在线预约和外卖服务',
                sections: ['在线预约', '外卖平台', '会员服务', '联系电话']
            }
        ]
    },
    {
        id: 'education',
        name: '教育培训',
        icon: '📚',
        description: '学校、培训机构、在线教育等',
        structure: [
            {
                name: '首页',
                icon: '🏠',
                description: '展示教育理念和核心课程',
                sections: ['品牌Banner', '核心课程', '教学优势', '学员成果', '报名入口']
            },
            {
                name: '课程体系',
                icon: '📖',
                description: '完整课程介绍和安排',
                sections: ['课程分类', '课程详情', '教学大纲', '学习路径', '课程价格']
            },
            {
                name: '师资团队',
                icon: '👩‍🏫',
                description: '教师介绍和资质展示',
                sections: ['名师介绍', '教学经验', '专业资质', '教学风格']
            },
            {
                name: '学员成果',
                icon: '🏆',
                description: '学员案例和成绩展示',
                sections: ['优秀学员', '学习成果', '就业数据', '学员评价']
            },
            {
                name: '报名咨询',
                icon: '✏️',
                description: '报名流程和咨询服务',
                sections: ['在线报名', '课程咨询', '试听预约', '常见问题']
            }
        ]
    },
    {
        id: 'medical',
        name: '医疗健康',
        icon: '🏥',
        description: '医院、诊所、健康服务等',
        structure: [
            {
                name: '首页',
                icon: '🏠',
                description: '展示医疗服务和专业优势',
                sections: ['机构Banner', '特色科室', '专家团队', '预约挂号', '健康资讯']
            },
            {
                name: '科室介绍',
                icon: '🩺',
                description: '各科室详细介绍',
                sections: ['科室列表', '诊疗范围', '技术设备', '特色疗法']
            },
            {
                name: '专家团队',
                icon: '👨‍⚕️',
                description: '专家医生介绍',
                sections: ['专家列表', '专业背景', '擅长领域', '出诊时间']
            },
            {
                name: '就医指南',
                icon: '📋',
                description: '就医流程和服务信息',
                sections: ['预约挂号', '就诊流程', '医保信息', '交通指南']
            },
            {
                name: '联系我们',
                icon: '📞',
                description: '联系方式和位置',
                sections: ['联系电话', '地址导航', '急诊服务', '在线咨询']
            }
        ]
    },
    {
        id: 'ecommerce',
        name: '电商零售',
        icon: '🛒',
        description: '电商平台、零售店铺、品牌商城',
        structure: [
            {
                name: '首页',
                icon: '🏠',
                description: '展示热门商品和促销活动',
                sections: ['轮播Banner', '爆款商品', '新品上市', '限时优惠', '品牌故事']
            },
            {
                name: '商品展示',
                icon: '📦',
                description: '商品分类和详情',
                sections: ['商品分类', '商品列表', '详情页面', '规格参数', '用户评价']
            },
            {
                name: '品牌故事',
                icon: '✨',
                description: '品牌理念和价值',
                sections: ['品牌起源', '设计理念', '品质保证', '社会责任']
            },
            {
                name: '客户服务',
                icon: '💬',
                description: '售后和客服支持',
                sections: ['购物指南', '配送说明', '退换政策', '常见问题']
            },
            {
                name: '会员中心',
                icon: '👤',
                description: '会员权益和福利',
                sections: ['会员等级', '积分规则', '专属优惠', '会员活动']
            }
        ]
    },
    {
        id: 'finance',
        name: '金融服务',
        icon: '💰',
        description: '银行、保险、投资、理财等',
        structure: [
            {
                name: '首页',
                icon: '🏠',
                description: '展示核心金融服务',
                sections: ['品牌Banner', '核心业务', '产品推荐', '安全保障', '快速入口']
            },
            {
                name: '产品服务',
                icon: '📊',
                description: '金融产品详细介绍',
                sections: ['产品列表', '收益说明', '风险提示', '申请流程', '费率说明']
            },
            {
                name: '关于我们',
                icon: '🏛️',
                description: '公司背景和资质',
                sections: ['公司介绍', '发展历程', '资质证书', '监管信息', '合作伙伴']
            },
            {
                name: '新闻资讯',
                icon: '📰',
                description: '行业动态和公司新闻',
                sections: ['公司新闻', '行业资讯', '投资观点', '活动公告']
            },
            {
                name: '客户支持',
                icon: '🎧',
                description: '客服和帮助中心',
                sections: ['在线客服', '常见问题', '投诉建议', '联系方式']
            }
        ]
    },
    {
        id: 'realestate',
        name: '房产地产',
        icon: '🏢',
        description: '房地产开发、中介、物业等',
        structure: [
            {
                name: '首页',
                icon: '🏠',
                description: '展示热门楼盘和服务',
                sections: ['品牌Banner', '热门楼盘', '服务类型', '成交案例', '预约看房']
            },
            {
                name: '楼盘展示',
                icon: '🏗️',
                description: '楼盘详情和户型',
                sections: ['楼盘列表', '项目详情', '户型展示', 'VR看房', '周边配套']
            },
            {
                name: '关于我们',
                icon: '🏛️',
                description: '公司实力和资质',
                sections: ['公司介绍', '开发历程', '荣誉资质', '合作伙伴']
            },
            {
                name: '新闻中心',
                icon: '📰',
                description: '楼市动态和公司新闻',
                sections: ['公司动态', '楼市资讯', '政策解读', '开盘公告']
            },
            {
                name: '联系咨询',
                icon: '📞',
                description: '咨询和预约服务',
                sections: ['在线咨询', '预约看房', '置业顾问', '售楼处地址']
            }
        ]
    },
    {
        id: 'tourism',
        name: '旅游酒店',
        icon: '✈️',
        description: '旅行社、酒店、景区等',
        structure: [
            {
                name: '首页',
                icon: '🏠',
                description: '展示精选线路和特惠活动',
                sections: ['视觉Banner', '精选线路', '热门目的地', '限时特惠', '在线预订']
            },
            {
                name: '产品线路',
                icon: '🗺️',
                description: '旅游产品和行程',
                sections: ['线路分类', '行程详情', '费用说明', '预订须知', '用户点评']
            },
            {
                name: '目的地',
                icon: '📍',
                description: '目的地介绍和攻略',
                sections: ['目的地列表', '景点介绍', '美食推荐', '交通指南', '最佳季节']
            },
            {
                name: '关于我们',
                icon: '👥',
                description: '公司介绍和服务承诺',
                sections: ['公司简介', '服务理念', '资质证书', '团队介绍']
            },
            {
                name: '联系预订',
                icon: '📞',
                description: '预订和客服支持',
                sections: ['在线预订', '定制服务', '客服热线', '常见问题']
            }
        ]
    },
    {
        id: 'manufacturing',
        name: '工业制造',
        icon: '🏭',
        description: '制造业、工厂、设备供应商等',
        structure: [
            {
                name: '首页',
                icon: '🏠',
                description: '展示企业实力和核心产品',
                sections: ['企业Banner', '核心产品', '技术优势', '合作客户', '在线询价']
            },
            {
                name: '产品中心',
                icon: '⚙️',
                description: '产品分类和技术参数',
                sections: ['产品分类', '产品详情', '技术参数', '应用场景', '下载中心']
            },
            {
                name: '解决方案',
                icon: '💡',
                description: '行业解决方案',
                sections: ['方案概述', '行业应用', '成功案例', '技术支持']
            },
            {
                name: '关于我们',
                icon: '🏛️',
                description: '公司介绍和生产实力',
                sections: ['公司简介', '发展历程', '生产基地', '资质证书', '企业文化']
            },
            {
                name: '联系我们',
                icon: '📞',
                description: '商务洽谈和技术支持',
                sections: ['联系方式', '在线询价', '技术咨询', '招商合作']
            }
        ]
    },
    {
        id: 'legal',
        name: '法律服务',
        icon: '⚖️',
        description: '律师事务所、法律咨询等',
        structure: [
            {
                name: '首页',
                icon: '🏠',
                description: '展示专业服务和律师团队',
                sections: ['品牌Banner', '业务领域', '专业律师', '成功案例', '在线咨询']
            },
            {
                name: '业务领域',
                icon: '📋',
                description: '法律服务范围',
                sections: ['业务分类', '服务详情', '典型案例', '收费标准']
            },
            {
                name: '律师团队',
                icon: '👔',
                description: '律师介绍和专业背景',
                sections: ['律师列表', '专业资质', '执业经验', '擅长领域']
            },
            {
                name: '成功案例',
                icon: '🏆',
                description: '经典案例展示',
                sections: ['案例分类', '案例详情', '客户评价', '获奖荣誉']
            },
            {
                name: '联系咨询',
                icon: '📞',
                description: '法律咨询入口',
                sections: ['在线咨询', '预约面谈', '联系方式', '事务所地址']
            }
        ]
    },
    {
        id: 'beauty',
        name: '美容美发',
        icon: '💅',
        description: '美容院、美发店、SPA等',
        structure: [
            {
                name: '首页',
                icon: '🏠',
                description: '展示服务项目和店铺环境',
                sections: ['视觉Banner', '热门项目', '店铺环境', '优惠活动', '在线预约']
            },
            {
                name: '服务项目',
                icon: '✨',
                description: '服务分类和价格',
                sections: ['项目分类', '项目详情', '价格表', '效果展示', '注意事项']
            },
            {
                name: '团队介绍',
                icon: '👩‍🎨',
                description: '技师和设计师介绍',
                sections: ['团队成员', '资质证书', '作品展示', '擅长项目']
            },
            {
                name: '作品案例',
                icon: '📷',
                description: '服务前后对比和案例',
                sections: ['案例展示', '前后对比', '客户反馈', '视频展示']
            },
            {
                name: '预约到店',
                icon: '📅',
                description: '预约和门店信息',
                sections: ['在线预约', '门店地址', '营业时间', '联系方式']
            }
        ]
    },
    {
        id: 'fitness',
        name: '健身运动',
        icon: '💪',
        description: '健身房、瑜伽馆、运动俱乐部等',
        structure: [
            {
                name: '首页',
                icon: '🏠',
                description: '展示场馆和课程特色',
                sections: ['品牌Banner', '特色课程', '场馆环境', '教练团队', '立即报名']
            },
            {
                name: '课程介绍',
                icon: '🏋️',
                description: '课程分类和时间表',
                sections: ['课程分类', '课程详情', '时间表', '价格方案', '适合人群']
            },
            {
                name: '教练团队',
                icon: '👨‍🏫',
                description: '教练介绍和资质',
                sections: ['教练列表', '专业资质', '教学经验', '学员评价']
            },
            {
                name: '场馆展示',
                icon: '🏟️',
                description: '设施和环境展示',
                sections: ['场馆环境', '健身设备', '更衣室', '停车信息']
            },
            {
                name: '会员服务',
                icon: '🎫',
                description: '会员卡和报名',
                sections: ['会员方案', '价格对比', '在线报名', '联系我们']
            }
        ]
    },
    {
        id: 'web3',
        name: 'Web3区块链',
        icon: '⛓️',
        description: 'RWA、DeFi、NFT、DAO、加密货币项目',
        isPro: true,
        structure: [
            {
                name: '首页（Home）',
                icon: '🏠',
                description: '展示核心价值主张和生态入口',
                sections: ['Hero Section', '核心叙事', '价值主张', '生态结构图', '用户路径', 'CTA入口']
            },
            {
                name: '资产层（Asset）',
                icon: '💎',
                description: '底层资产介绍和价值锚定',
                sections: ['资产介绍', '价值支撑', '合规说明', '技术架构', '风险披露']
            },
            {
                name: '生态系统（Ecosystem）',
                icon: '🌐',
                description: '生态应用和合作伙伴',
                sections: ['应用场景', '社交电商', 'IP合作', '孵化器', '合作伙伴']
            },
            {
                name: 'Tokenomics',
                icon: '🪙',
                description: 'Token经济模型和分配',
                sections: ['Token介绍', '供应分配', '释放计划', 'Utility设计', '合规声明']
            },
            {
                name: 'Roadmap',
                icon: '🗺️',
                description: '发展路线图和里程碑',
                sections: ['Phase 1', 'Phase 2', 'Phase 3', '里程碑', '进展更新']
            },
            {
                name: '社区（Community）',
                icon: '👥',
                description: '社区入口和治理',
                sections: ['加入社区', 'Ambassador', '治理机制', '社交媒体']
            }
        ],
        // 首页详细Section配置（专业模式使用）
        homeSections: [
            {
                title: 'Hero Section',
                content: '主标题、副标题、核心锚点句、CTA按钮'
            },
            {
                title: '核心叙事',
                content: '品牌多重含义解读，建立情感连接'
            },
            {
                title: '价值主张',
                content: '解决什么问题，为什么需要这个产品'
            },
            {
                title: '生态结构图',
                content: '上游资产层→中游应用层→下游使用层'
            },
            {
                title: '阶段路径',
                content: 'Phase 1 → Phase 2 → Phase 3 的发展规划'
            },
            {
                title: '用户路径',
                content: 'User → Promotor → Merchant → Banker 的升级路径'
            }
        ],
        // 默认Roadmap阶段
        defaultRoadmap: [
            {
                phase: 'Phase 1',
                title: 'Asset Foundation',
                items: ['资产锚定', 'RWA合规发行', 'Foundation成立']
            },
            {
                phase: 'Phase 2',
                title: 'Application & Usage',
                items: ['社交电商上线', 'Incubator启动', '生态扩展']
            },
            {
                phase: 'Phase 3',
                title: 'Financial Infrastructure',
                items: ['Crypto Bank', 'RWA Management', '全球扩展']
            }
        ]
    },
    // ============================================
    // RWA（现实世界资产）专属行业模板
    // ============================================
    {
        id: 'rwa',
        name: 'RWA现实世界资产',
        icon: '🏛️',
        description: 'Real World Assets资产代币化、合规RWA发行平台',
        isPro: true,
        structure: [
            {
                name: '首页（Home）',
                icon: '🏠',
                description: '展示RWA核心价值主张和信任背书',
                sections: ['Hero Section', '资产锚定叙事', '合规背书', '核心数据', '生态入口', 'CTA']
            },
            {
                name: '资产介绍（Assets）',
                icon: '💎',
                description: '底层资产详情和价值支撑',
                sections: ['资产类型', '锚定机制', '估值方法', '审计报告', '资产透明度']
            },
            {
                name: '合规框架（Compliance）',
                icon: '⚖️',
                description: '监管合规和法律框架',
                sections: ['监管牌照', '法律架构', 'KYC/AML', '司法管辖', '合规声明']
            },
            {
                name: 'Token经济（Tokenomics）',
                icon: '🪙',
                description: 'Token设计和收益模型',
                sections: ['Token类型', '供应机制', '收益分配', '赎回机制', '价格稳定']
            },
            {
                name: '投资者关系（IR）',
                icon: '📊',
                description: '投资者信息和透明披露',
                sections: ['投资门槛', '收益预期', '风险披露', '定期报告', 'FAQ']
            },
            {
                name: '技术架构（Technology）',
                icon: '⛓️',
                description: '区块链技术和安全保障',
                sections: ['区块链选择', '智能合约', '安全审计', '托管方案', '互操作性']
            },
            {
                name: '路线图（Roadmap）',
                icon: '🗺️',
                description: '发展规划和里程碑',
                sections: ['已完成', '进行中', '即将推出', '长期规划']
            },
            {
                name: '团队与合作（Team）',
                icon: '👥',
                description: '核心团队和战略合作',
                sections: ['核心团队', '顾问团', '合作机构', '法律顾问', '审计机构']
            }
        ],
        // 首页详细Section配置（专业模式使用）
        homeSections: [
            {
                title: 'Hero Section',
                content: '核心价值主张：将现实世界资产带到链上，实现资产民主化'
            },
            {
                title: '资产锚定叙事',
                content: '底层资产类型、价值支撑、为什么选择这类资产'
            },
            {
                title: '合规背书',
                content: '监管牌照、法律架构、审计机构Logo墙'
            },
            {
                title: '核心数据',
                content: '总资产规模、Token市值、持有人数量、年化收益率'
            },
            {
                title: '运作流程',
                content: '资产上链流程：资产筛选→尽调评估→法律包装→Token发行→二级交易'
            },
            {
                title: '生态入口',
                content: '投资入口、市场交易、收益Dashboard、合作伙伴'
            }
        ],
        // 默认Roadmap阶段
        defaultRoadmap: [
            {
                phase: 'Phase 1',
                title: 'Foundation & Compliance',
                items: ['法律架构搭建', '监管牌照申请', '托管方案确定', '审计机构引入']
            },
            {
                phase: 'Phase 2',
                title: 'Asset Onboarding',
                items: ['首批资产上链', 'Token发行', 'KYC系统上线', '投资者准入']
            },
            {
                phase: 'Phase 3',
                title: 'Market & Liquidity',
                items: ['二级市场上线', '流动性挖矿', '机构合作', 'DEX/CEX上架']
            },
            {
                phase: 'Phase 4',
                title: 'Ecosystem Expansion',
                items: ['资产类型扩展', '跨链互通', 'DeFi整合', '全球扩展']
            }
        ],
        // RWA特有：资产类型配置
        assetTypes: [
            { type: 'Real Estate', name: '房地产', icon: '🏢', description: '商业地产、住宅、REITs' },
            { type: 'Commodities', name: '大宗商品', icon: '🥇', description: '黄金、白银、能源' },
            { type: 'Fixed Income', name: '固定收益', icon: '📈', description: '国债、企业债、票据' },
            { type: 'Private Credit', name: '私人信贷', icon: '💳', description: '应收账款、供应链金融' },
            { type: 'Art & Collectibles', name: '艺术收藏', icon: '🎨', description: '艺术品、奢侈品、收藏品' },
            { type: 'Infrastructure', name: '基础设施', icon: '🏗️', description: '能源、交通、数据中心' }
        ],
        // RWA特有：合规框架
        complianceFramework: [
            { item: 'Securities License', name: '证券牌照', required: true },
            { item: 'KYC/AML', name: '身份验证', required: true },
            { item: 'Accredited Investor', name: '合格投资者认证', required: true },
            { item: 'Asset Custody', name: '资产托管', required: true },
            { item: 'Third-party Audit', name: '第三方审计', required: true },
            { item: 'Legal Opinion', name: '法律意见书', required: true }
        ],
        // RWA特有：关键术语
        keyTerms: [
            { term: 'NAV', fullName: 'Net Asset Value', chinese: '净资产价值' },
            { term: 'SPV', fullName: 'Special Purpose Vehicle', chinese: '特殊目的载体' },
            { term: 'AUM', fullName: 'Assets Under Management', chinese: '管理资产规模' },
            { term: 'TVL', fullName: 'Total Value Locked', chinese: '总锁仓价值' },
            { term: 'APY', fullName: 'Annual Percentage Yield', chinese: '年化收益率' },
            { term: 'LTV', fullName: 'Loan to Value', chinese: '贷款价值比' }
        ]
    }
];

/**
 * 好莱坞经典故事结构模板
 * 每种结构对应不同的网站叙事风格和Section配置
 */
const STORYTELLING_STRUCTURES = [
    {
        id: 'three-act',
        name: '三幕式结构',
        icon: '🎬',
        source: '希腊戏剧 / 好莱坞主流',
        description: '经典的开端-发展-结局结构，适用于大多数企业官网',
        suitable: ['企业官网', '产品介绍', '服务展示'],
        sections: [
            {
                act: '第一幕：铺陈',
                name: 'Hero Section',
                description: '介绍品牌身份，引入核心冲突（用户痛点）',
                content: ['震撼标题', '品牌定位', '核心价值主张', '视觉冲击']
            },
            {
                act: '第一幕：铺陈',
                name: '问题陈述',
                description: '描述用户面临的困境和挑战',
                content: ['痛点列表', '行业现状', '未解决的需求']
            },
            {
                act: '第二幕：冲突',
                name: '解决方案',
                description: '展示产品/服务如何解决问题',
                content: ['产品介绍', '核心功能', '差异化优势']
            },
            {
                act: '第二幕：冲突',
                name: '功能特性',
                description: '详细展示产品能力和使用场景',
                content: ['功能模块', '使用流程', '技术优势']
            },
            {
                act: '第二幕：冲突',
                name: '案例证明',
                description: '通过真实案例增加可信度',
                content: ['成功案例', '数据成果', '客户Logo']
            },
            {
                act: '第三幕：结局',
                name: '客户证言',
                description: '社会证明，建立信任',
                content: ['用户评价', '专家背书', '媒体报道']
            },
            {
                act: '第三幕：结局',
                name: 'CTA号召',
                description: '引导用户采取行动',
                content: ['行动按钮', '联系方式', '试用入口']
            }
        ]
    },
    {
        id: 'heros-journey',
        name: '英雄之旅',
        icon: '🦸',
        source: '约瑟夫·坎贝尔《千面英雄》',
        description: '将用户塑造为英雄，品牌作为导师引导其蜕变',
        suitable: ['品牌故事', '创始人故事', '用户成长路径', 'Web3项目'],
        sections: [
            {
                stage: '启程',
                name: '平凡世界',
                description: '描述用户当前的困境和日常',
                content: ['用户现状', '日常痛点', '未被满足的渴望']
            },
            {
                stage: '启程',
                name: '冒险召唤',
                description: '展示改变的机会和可能性',
                content: ['发现产品', '转变契机', '新的可能']
            },
            {
                stage: '启程',
                name: '遇见导师',
                description: '品牌/创始人作为引路人登场',
                content: ['品牌故事', '创始人愿景', '专业背景', '使命宣言']
            },
            {
                stage: '历险',
                name: '跨越门槛',
                description: '用户开始使用产品，进入新世界',
                content: ['入门指南', '首次体验', '上手流程']
            },
            {
                stage: '历险',
                name: '考验与成长',
                description: '展示产品功能和用户的进步过程',
                content: ['功能展示', '学习曲线', '进阶路径']
            },
            {
                stage: '历险',
                name: '严峻考验',
                description: '最大挑战和突破',
                content: ['核心价值', '关键功能', '重大突破']
            },
            {
                stage: '归来',
                name: '获得奖赏',
                description: '展示用户获得的价值和成果',
                content: ['用户收益', '成功案例', '数据证明']
            },
            {
                stage: '归来',
                name: '蜕变归来',
                description: '用户已经蜕变，号召更多人加入',
                content: ['用户证言', '社区展示', 'CTA号召']
            }
        ]
    },
    {
        id: 'beat-sheet',
        name: 'Blake Snyder节拍表',
        icon: '🎯',
        source: 'Save the Cat! 编剧法',
        description: '15个精确节拍打造高转化落地页',
        suitable: ['产品落地页', '众筹页面', '促销活动'],
        sections: [
            {
                beat: '1',
                name: '开场画面',
                description: '第一印象，确定基调',
                content: ['震撼首图', '品牌视觉', '情感基调']
            },
            {
                beat: '2',
                name: '主题陈述',
                description: '一句话点明核心价值',
                content: ['核心Slogan', '品牌使命', '价值主张']
            },
            {
                beat: '3',
                name: '铺垫背景',
                description: '展示现状和痛点',
                content: ['行业问题', '用户痛点', '市场现状']
            },
            {
                beat: '4',
                name: '催化剂',
                description: '为什么现在必须改变',
                content: ['紧迫性', '变革时机', '机会窗口']
            },
            {
                beat: '5',
                name: '质疑环节',
                description: '解答用户可能的疑虑',
                content: ['常见问题', '风险消除', '信任建立']
            },
            {
                beat: '6',
                name: '进入新世界',
                description: '展示产品主要功能',
                content: ['产品介绍', '核心功能', '差异化']
            },
            {
                beat: '7',
                name: '游戏时刻',
                description: '最吸引人的亮点展示',
                content: ['功能亮点', '演示视频', '互动体验']
            },
            {
                beat: '8',
                name: '中点反转',
                description: '深化价值，提升stakes',
                content: ['深度价值', '成功案例', '数据证明']
            },
            {
                beat: '9',
                name: '社会证明',
                description: '他人的成功增加可信度',
                content: ['用户评价', '专家背书', '媒体报道']
            },
            {
                beat: '10',
                name: '终极CTA',
                description: '强力号召行动',
                content: ['限时优惠', '行动按钮', '紧迫感']
            }
        ]
    },
    {
        id: 'story-circle',
        name: 'Dan Harmon故事圈',
        icon: '🔄',
        source: '《瑞克和莫蒂》创作者',
        description: '8步循环结构，适合展示用户成长历程',
        suitable: ['订阅服务', '成长型产品', 'SaaS平台', '教育产品'],
        sections: [
            {
                step: '1. You',
                name: '舒适区',
                description: '用户的当前状态',
                content: ['用户画像', '现有习惯', '舒适区描述']
            },
            {
                step: '2. Need',
                name: '内心渴望',
                description: '用户真正想要什么',
                content: ['深层需求', '内心渴望', '目标愿景']
            },
            {
                step: '3. Go',
                name: '踏出第一步',
                description: '开始使用产品',
                content: ['入门指南', '首步体验', '开始按钮']
            },
            {
                step: '4. Search',
                name: '探索学习',
                description: '适应新工具，发现价值',
                content: ['功能探索', '学习资源', '使用指南']
            },
            {
                step: '5. Find',
                name: '获得价值',
                description: '用户得到想要的',
                content: ['核心价值', '功能亮点', '即时收益']
            },
            {
                step: '6. Take',
                name: '投入承诺',
                description: '用户决定深度使用',
                content: ['定价方案', '会员权益', '升级路径']
            },
            {
                step: '7. Return',
                name: '融入生活',
                description: '产品成为日常的一部分',
                content: ['使用场景', '日常整合', '习惯养成']
            },
            {
                step: '8. Change',
                name: '蜕变成长',
                description: '用户已经改变',
                content: ['用户证言', '成功案例', '社区展示']
            }
        ]
    },
    {
        id: 'pixar-formula',
        name: '皮克斯故事公式',
        icon: '🎨',
        source: 'Pixar动画工作室',
        description: '"Once upon a time..."经典叙事，情感共鸣强',
        suitable: ['情感型品牌', '教育产品', '儿童产品', '公益项目'],
        formula: '很久很久以前，有一个___。每天，___。直到有一天，___。因此，___。因此，___。直到最后，___。',
        sections: [
            {
                part: '起点',
                name: '很久很久以前...',
                description: '品牌/用户的起源故事',
                content: ['创始故事', '初心使命', '时代背景']
            },
            {
                part: '日常',
                name: '每天...',
                description: '描述用户的日常困境',
                content: ['日常痛点', '重复挣扎', '未解决的问题']
            },
            {
                part: '转折',
                name: '直到有一天...',
                description: '改变发生的时刻',
                content: ['发现产品', '转变契机', '突破时刻']
            },
            {
                part: '发展',
                name: '因此...',
                description: '产品带来的第一层改变',
                content: ['初步效果', '直接收益', '即时价值']
            },
            {
                part: '深化',
                name: '因此...',
                description: '更深层的价值和影响',
                content: ['深度价值', '连锁效应', '生活改变']
            },
            {
                part: '结局',
                name: '直到最后...',
                description: '美好的结局和未来',
                content: ['成功状态', '美好愿景', 'CTA号召']
            }
        ]
    },
    {
        id: 'aida-model',
        name: 'AIDA营销模型',
        icon: '📈',
        source: '经典营销理论',
        description: '注意-兴趣-欲望-行动，高转化营销结构',
        suitable: ['营销落地页', '广告页面', '促销活动', '电商'],
        sections: [
            {
                phase: 'A - Attention',
                name: '吸引注意',
                description: '3秒内抓住用户眼球',
                content: ['震撼标题', '视觉冲击', '痛点戳心']
            },
            {
                phase: 'I - Interest',
                name: '引发兴趣',
                description: '让用户想了解更多',
                content: ['故事开头', '问题共鸣', '好奇心勾起']
            },
            {
                phase: 'I - Interest',
                name: '深化兴趣',
                description: '展示独特价值',
                content: ['产品亮点', '差异化', '核心功能']
            },
            {
                phase: 'D - Desire',
                name: '激发欲望',
                description: '让用户想要拥有',
                content: ['使用场景', '成功案例', '价值展示']
            },
            {
                phase: 'D - Desire',
                name: '强化欲望',
                description: '社会证明增加可信度',
                content: ['用户评价', '数据证明', '专家背书']
            },
            {
                phase: 'A - Action',
                name: '促成行动',
                description: '立即转化',
                content: ['限时优惠', 'CTA按钮', '风险消除', '紧迫感']
            }
        ]
    }
];

/**
 * 获取所有故事结构
 */
function getStorytellingStructures() {
    return STORYTELLING_STRUCTURES;
}

/**
 * 根据ID获取故事结构
 */
function getStructureById(id) {
    return STORYTELLING_STRUCTURES.find(structure => structure.id === id);
}

/**
 * 获取所有行业列表
 */
function getIndustries() {
    return INDUSTRIES;
}

/**
 * 根据ID获取行业详情
 */
function getIndustryById(id) {
    return INDUSTRIES.find(industry => industry.id === id);
}

/**
 * 创建自定义行业模板
 */
function createCustomIndustry(name) {
    return {
        id: 'custom',
        name: name,
        icon: '🏢',
        description: '自定义行业',
        structure: [
            {
                name: '首页',
                icon: '🏠',
                description: '展示公司核心信息和主营业务',
                sections: ['品牌Banner', '业务介绍', '核心优势', '成功案例', '联系入口']
            },
            {
                name: '产品/服务',
                icon: '📦',
                description: '产品或服务详细介绍',
                sections: ['产品/服务列表', '详情介绍', '价格方案', '使用说明']
            },
            {
                name: '关于我们',
                icon: '👥',
                description: '公司背景和团队介绍',
                sections: ['公司简介', '发展历程', '团队介绍', '企业文化', '资质荣誉']
            },
            {
                name: '案例/新闻',
                icon: '📰',
                description: '成功案例和新闻动态',
                sections: ['成功案例', '客户评价', '公司新闻', '行业资讯']
            },
            {
                name: '联系我们',
                icon: '📞',
                description: '联系方式和咨询入口',
                sections: ['联系表单', '联系方式', '公司地址', '在线客服']
            }
        ]
    };
}

/**
 * PPT演示文稿模板
 * 各类型PPT的结构和内容建议
 */
const PPT_TEMPLATES = [
    {
        id: 'business-pitch',
        name: '商业路演',
        icon: '💼',
        description: '融资路演、项目展示、投资人汇报',
        slides: [
            { name: '封面', icon: '🎯', sections: ['公司Logo', '项目名称', '一句话定位', '演讲者信息'] },
            { name: '问题/痛点', icon: '❓', sections: ['市场痛点', '用户困境', '现有方案缺陷'] },
            { name: '解决方案', icon: '💡', sections: ['产品/服务介绍', '核心价值', '工作原理'] },
            { name: '产品展示', icon: '📱', sections: ['产品截图', '核心功能', '用户体验'] },
            { name: '商业模式', icon: '💰', sections: ['盈利模式', '定价策略', '收入来源'] },
            { name: '市场机会', icon: '📊', sections: ['市场规模(TAM/SAM/SOM)', '增长趋势', '目标市场'] },
            { name: '竞争分析', icon: '⚔️', sections: ['竞争对手', '差异化优势', '护城河'] },
            { name: '发展现状', icon: '📈', sections: ['关键指标', '里程碑', '用户增长'] },
            { name: '团队介绍', icon: '👥', sections: ['核心团队', '背景优势', '顾问团'] },
            { name: '融资计划', icon: '🎯', sections: ['融资金额', '资金用途', '发展规划'] },
            { name: '联系方式', icon: '📞', sections: ['联系人', '邮箱', '社交媒体'] }
        ]
    },
    {
        id: 'product-launch',
        name: '产品发布',
        icon: '🚀',
        description: '新品发布会、产品上市、功能更新',
        slides: [
            { name: '开场', icon: '🎬', sections: ['品牌Logo', '发布主题', '日期'] },
            { name: '回顾成就', icon: '🏆', sections: ['过往成绩', '用户增长', '市场份额'] },
            { name: '用户洞察', icon: '👁️', sections: ['用户反馈', '需求分析', '痛点发现'] },
            { name: '产品揭晓', icon: '✨', sections: ['产品命名', '外观展示', '核心卖点'] },
            { name: '功能详解', icon: '⚙️', sections: ['核心功能', '技术亮点', '使用场景'] },
            { name: '演示视频', icon: '🎥', sections: ['产品演示', '实际效果', '用户体验'] },
            { name: '对比优势', icon: '📊', sections: ['性能对比', '价格优势', '独特价值'] },
            { name: '定价发布', icon: '💵', sections: ['价格方案', '套餐选择', '限时优惠'] },
            { name: '上市计划', icon: '📅', sections: ['发售日期', '销售渠道', '预约方式'] },
            { name: '结尾', icon: '🎉', sections: ['总结口号', 'CTA', '感谢'] }
        ]
    },
    {
        id: 'company-intro',
        name: '公司介绍',
        icon: '🏢',
        description: '企业宣传、品牌介绍、客户汇报',
        slides: [
            { name: '封面', icon: '🎯', sections: ['公司Logo', '公司名称', '口号'] },
            { name: '公司简介', icon: '📖', sections: ['成立时间', '主营业务', '愿景使命'] },
            { name: '发展历程', icon: '📅', sections: ['重要里程碑', '发展阶段', '成长轨迹'] },
            { name: '核心业务', icon: '💼', sections: ['产品线', '服务范围', '解决方案'] },
            { name: '核心优势', icon: '⭐', sections: ['技术实力', '团队优势', '资源优势'] },
            { name: '成功案例', icon: '🏆', sections: ['标杆客户', '项目成果', '客户评价'] },
            { name: '团队实力', icon: '👥', sections: ['管理团队', '技术团队', '团队规模'] },
            { name: '合作伙伴', icon: '🤝', sections: ['战略伙伴', '供应商', '渠道商'] },
            { name: '荣誉资质', icon: '🏅', sections: ['行业认证', '获奖情况', '媒体报道'] },
            { name: '联系合作', icon: '📞', sections: ['联系方式', '合作方式', '期待共赢'] }
        ]
    },
    {
        id: 'work-report',
        name: '工作汇报',
        icon: '📋',
        description: '周报月报、季度总结、年终汇报',
        slides: [
            { name: '封面', icon: '📊', sections: ['汇报主题', '汇报人', '日期'] },
            { name: '目录', icon: '📑', sections: ['内容概览', '重点提示'] },
            { name: '工作概述', icon: '📝', sections: ['本期目标', '工作范围', '重点任务'] },
            { name: '完成情况', icon: '✅', sections: ['已完成事项', '关键成果', '数据指标'] },
            { name: '亮点展示', icon: '⭐', sections: ['突出成绩', '创新点', '超额完成'] },
            { name: '问题分析', icon: '⚠️', sections: ['遇到问题', '原因分析', '解决方案'] },
            { name: '经验总结', icon: '💡', sections: ['成功经验', '失败教训', '改进方向'] },
            { name: '下期计划', icon: '📅', sections: ['工作目标', '重点任务', '时间安排'] },
            { name: '资源需求', icon: '🔧', sections: ['人员需求', '预算需求', '支持需求'] },
            { name: '结语', icon: '🙏', sections: ['总结陈词', '感谢'] }
        ]
    },
    {
        id: 'training',
        name: '培训课件',
        icon: '📚',
        description: '员工培训、技能分享、知识讲解',
        slides: [
            { name: '封面', icon: '📚', sections: ['课程名称', '讲师信息', '培训目标'] },
            { name: '课程介绍', icon: '📋', sections: ['学习目标', '适合人群', '课程大纲'] },
            { name: '背景知识', icon: '📖', sections: ['前置知识', '相关概念', '行业背景'] },
            { name: '核心内容1', icon: '1️⃣', sections: ['知识点讲解', '案例说明', '要点总结'] },
            { name: '核心内容2', icon: '2️⃣', sections: ['知识点讲解', '案例说明', '要点总结'] },
            { name: '核心内容3', icon: '3️⃣', sections: ['知识点讲解', '案例说明', '要点总结'] },
            { name: '实操演练', icon: '🔧', sections: ['练习任务', '操作步骤', '注意事项'] },
            { name: '常见问题', icon: '❓', sections: ['FAQ', '易错点', '解决方案'] },
            { name: '总结回顾', icon: '📝', sections: ['知识要点', '思维导图', '记忆口诀'] },
            { name: '课后作业', icon: '✍️', sections: ['练习题目', '拓展阅读', '反馈方式'] }
        ]
    },
    {
        id: 'project-proposal',
        name: '项目方案',
        icon: '📝',
        description: '项目提案、解决方案、技术方案',
        slides: [
            { name: '封面', icon: '📝', sections: ['项目名称', '提案方', '日期'] },
            { name: '项目背景', icon: '📖', sections: ['现状分析', '需求来源', '项目必要性'] },
            { name: '目标定义', icon: '🎯', sections: ['项目目标', '预期成果', '成功标准'] },
            { name: '方案概述', icon: '💡', sections: ['整体思路', '技术路线', '实施策略'] },
            { name: '详细方案', icon: '📋', sections: ['具体步骤', '技术细节', '资源配置'] },
            { name: '实施计划', icon: '📅', sections: ['时间安排', '里程碑', '交付节点'] },
            { name: '预算估算', icon: '💰', sections: ['费用明细', '成本分析', '投资回报'] },
            { name: '风险评估', icon: '⚠️', sections: ['潜在风险', '应对措施', '兜底方案'] },
            { name: '团队配置', icon: '👥', sections: ['项目团队', '职责分工', '资质证明'] },
            { name: '结语', icon: '🤝', sections: ['方案优势', '合作期待', '联系方式'] }
        ]
    },
    {
        id: 'web3-pitch',
        name: 'Web3路演',
        icon: '⛓️',
        description: 'RWA项目、DeFi协议、NFT/DAO展示',
        isPro: true,
        slides: [
            { name: '封面', icon: '⛓️', sections: ['项目Logo', '项目名称', '核心叙事'] },
            { name: '市场机遇', icon: '📊', sections: ['行业痛点', '市场规模', 'Web3解决方案'] },
            { name: '项目介绍', icon: '💡', sections: ['核心理念', '价值主张', '创新点'] },
            { name: '产品架构', icon: '🏗️', sections: ['技术架构', '产品功能', '用户流程'] },
            { name: 'Tokenomics', icon: '🪙', sections: ['Token设计', '分配方案', '释放计划'] },
            { name: '生态系统', icon: '🌐', sections: ['生态结构', '合作伙伴', '应用场景'] },
            { name: '路线图', icon: '🗺️', sections: ['发展阶段', '里程碑', '当前进度'] },
            { name: '团队背景', icon: '👥', sections: ['核心成员', '顾问团队', 'VC背书'] },
            { name: '融资信息', icon: '💰', sections: ['融资轮次', '估值', '资金用途'] },
            { name: '合规声明', icon: '⚖️', sections: ['法律架构', '合规框架', '风险披露'] },
            { name: '联系方式', icon: '📱', sections: ['官网', '社交媒体', 'Discord/TG'] }
        ]
    }
];

/**
 * 获取PPT模板列表
 */
function getPPTTemplates() {
    return PPT_TEMPLATES;
}

/**
 * 根据ID获取PPT模板
 */
function getPPTTemplateById(id) {
    return PPT_TEMPLATES.find(template => template.id === id);
}

// 导出供其他模块使用
window.IndustryData = {
    getIndustries,
    getIndustryById,
    createCustomIndustry,
    getStorytellingStructures,
    getStructureById,
    getPPTTemplates,
    getPPTTemplateById
};
