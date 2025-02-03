import Head from 'next/head'

export default function PainClinic() {
  return (
    <div className="min-h-screen bg-white">

      {/* 导航栏 */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-blue-600">广州中医药大学番禺医院疼痛专科</h1>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600">诊疗项目</a>
              <a href="#team" className="text-gray-700 hover:text-blue-600">专家团队</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
                立即预约
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* 首页主标题 */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              告别疼痛困扰，重拾健康生活
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              —— 专业疼痛诊疗，为您的健康保驾护航
            </p>

          </div>
        </div>
      </section>

      {/* 为什么选择我们 */}
      <section className="py-16 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">为什么选择我们？</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">专业疼痛解决方案</h3>
              <p className="text-gray-600">
                疼痛不是忍耐的勋章，而是身体的警示！
                作为广州市专业的疼痛诊疗中心，广州中医药大学番禺疼痛专科集预防、诊断、治疗、康复于一体，汇聚资深疼痛科专家团队，采用国际前沿技术，为头面部痛、颈肩腰腿痛、带状疱疹病理性疼痛、术后疼痛、癌痛等各类慢性疼痛患者提供精准化、个性化诊疗方案。
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">我们专注的疼痛领域
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                {['脊柱关节疼痛',
                  '神经病理性疼痛',
                  '术后慢性疼痛', '癌性疼痛', '其他疑难疼痛'].map((item) => (
                    <li key={item} className="flex items-center">
                      <svg className="w-4 h- text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 特色诊疗技术 */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">特色诊疗技术</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: '精准诊断', desc: '超声/DSA引导下选择神经阻滞、肌骨超声检查' },
              { title: '微创介入治疗', desc: '射频消融术、脊髓电刺激植入、吗啡泵植入、硬膜外持续泵入技术' },
              { title: '无创疗法', desc: '冲击波治疗、红外偏振光、中医定向透药' },
              { title: '多学科联合', desc: '疼痛科+康复科+心理科协同，身心同治' }
            ].map((tech, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="text-blue-600 text-3xl mb-4">0{index + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{tech.title}</h3>
                <p className="text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 预约区块 */}
      <section className="py-16 bg-gray-900 text-white" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8">立即预约，开启无痛生活</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">📞 咨询热线</h3>
              <p className="text-2xl">400-XXX-XXXX</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">📍 地址</h3>
              <p>XX市XX区XX路XX号</p>
            </div>
            <div className="p-6 bg-white/10 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">🕒 门诊时间</h3>
              <p>周一至周日 8:00-20:00</p>
            </div>
          </div>
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-full text-lg font-semibold transition-colors">
            在线预约专家
          </button>
        </div>
      </section>

      {/* 底部 */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="mb-4">疼痛无需沉默，专业守护品质生活</p>
          <p className="text-sm text-gray-400">© 2023 XX疼痛专科 版权所有</p>
        </div>
      </footer>
    </div>
  )
}
