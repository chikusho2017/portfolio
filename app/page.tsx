"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Mail, Phone, MapPin, Menu, X, XCircle, BookOpen, Video, Workflow, Shield } from "lucide-react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")
  const [hoveredTag, setHoveredTag] = useState<string | null>(null)
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [imageZoom, setImageZoom] = useState(1)
  const [imagePosition, setImagePosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "contact"]
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [selectedImage])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  const heroTags = [
    { name: "超级独狼", desc: "缺什么干什么", size: "text-2xl", opacity: 1 },
    { name: "0→70速成", desc: "天赋选手", size: "text-xl", opacity: 0.85 },
    { name: "结构化大师", desc: "受不了混乱", size: "text-lg", opacity: 0.75 },
    { name: "工具爱好者", desc: "飞书/AI重度", size: "text-xl", opacity: 0.8 },
    { name: "搞笑创意人", desc: "两年半搞笑视频", size: "text-lg", opacity: 0.7 },
    { name: "什么都能干", desc: "广告/创意/互联网", size: "text-2xl", opacity: 0.9 },
  ]

  const aboutTags = [
    { name: "在日本待了6年", desc: "由于太久不说家乡话导致日语说的比家乡话熟练", size: "text-xl", opacity: 1 },
    { name: "0-70分速成高手", desc: "反正一下就理解了，甭管是什么，0-70分这块儿多少有点天赋", size: "text-lg", opacity: 0.85 },
    { name: "超级独狼", desc: "产品，内容，销售，交付，缺什么就干什么，全缺就全干", size: "text-xl", opacity: 0.9 },
    { name: "结构化大师", desc: "情不自禁的就会梳理工作流、沉淀方法论——受不了混乱", size: "text-lg", opacity: 0.8 },
    { name: "工具爱好者", desc: "飞书重度用户，什么新奇的工具都要试一试，AI很厉害？哦对这个网站就是AI做的", size: "text-lg", opacity: 0.75 },
    { name: "搞笑创意人", desc: "入行就做了两年半搞笑视频，回不去了，做什么都想带点喜剧", size: "text-lg", opacity: 0.7 },
    { name: "什么都能干", desc: "广告、创意、互联网、电商、软件、法律，都能搞搞", size: "text-xl", opacity: 0.85 },
  ]

  const experiences = [
    {
      title: "百大UP主的内容主创",
      desc: "从脚本策划到后期制作，独立完成轻综艺视频内容创作",
      images: ["山下主页.png", "山下TEAM.jpg"],
    },
    {
      title: "两年半的字节运营",
      desc: "抖音商业化运营，服务上百家中小企业及本地商户",
      images: ["字节开会.JPEG", "字节团队.JPEG", "字节作战会议.JPEG"],
    },
    {
      title: "政企合作项目负责人",
      desc: "从0到1搭建乡村振兴直播基地项目",
      images: ["直播间原样.JPEG", "直播间完成.JPEG", "直播间内部.JPEG"],
    },
    {
      title: "商学院内容营销讲师",
      desc: "知识经验转为课程体系，担任企业课程交付",
      images: ["讲师1.JPEG", "讲师2.JPEG", "讲师3.JPEG"],
    },
    {
      title: "重大交通事故处理专家",
      desc: "零基础到精通交通事故法律条款，解人燃眉之急",
      images: ["交通事故1.jpg", "交通事故2.jpg"],
    },
    {
      title: "无处不在的SOP文档狂魔",
      desc: "看到混乱就想整理，对抗熵增让我愉悦",
      images: ["字节SOP.png", "IPSOP.jpg", "销售SOP.jpg"],
    },
  ]

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="text-xl font-bold tracking-wider">
            QIXUEZHANG
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${activeSection === "home" ? "text-primary" : "text-muted-foreground"}`}
            >
              <div className="w-6 h-6 rounded-full overflow-hidden border border-border">
                <Image
                  src="/images/avatar/头像.jpg"
                  alt="头像"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "about" ? "text-primary" : "text-muted-foreground"}`}
            >
              About Me
            </button>
            <button
              onClick={() => scrollToSection("work")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "work" ? "text-primary" : "text-muted-foreground"}`}
            >
              My Works
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === "contact" ? "text-primary" : "text-muted-foreground"}`}
            >
              Contact Me
            </button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden absolute w-full bg-background border-b border-border py-4 px-4 flex flex-col space-y-4">
            <button onClick={() => scrollToSection("home")} className="text-sm font-medium py-2 hover:text-primary flex items-center gap-2">
              <div className="w-6 h-6 rounded-full overflow-hidden border border-border">
                <Image
                  src="/images/avatar/头像.jpg"
                  alt="头像"
                  width={24}
                  height={24}
                  className="object-cover"
                />
              </div>
              Home
            </button>
            <button onClick={() => scrollToSection("about")} className="text-sm font-medium py-2 hover:text-primary">
              About Me
            </button>
            <button onClick={() => scrollToSection("work")} className="text-sm font-medium py-2 hover:text-primary">
              My Works
            </button>
            <button onClick={() => scrollToSection("contact")} className="text-sm font-medium py-2 hover:text-primary">
              Contact Me
            </button>
          </div>
        )}
      </header>

      <main className="flex-1">
        <section className="pt-20 pb-8 md:pt-32 md:pb-12">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                <div className="flex-1">
                  <div className="space-y-6 mb-8">
                    <h1 className="text-4xl md:text-6xl font-medium leading-tight">我是谁</h1>
                    <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">一个什么都干的独狼</h2>
                    <p className="text-lg text-muted-foreground max-w-xl">
                      留日六年、上手极快的全能独狼，懂多行业全链路业务，擅长结构化梳理，爱玩工具，自带搞笑创意底色。
                    </p>
                  </div>
                  <div className="relative min-h-[450px]">
                    {aboutTags.map((tag, index) => {
                      const layouts = [
                        { name: "搞笑创意人", top: "5%", left: "25%", size: "text-2xl" },
                        { name: "工具爱好者", top: "5%", left: "65%", size: "text-3xl" },
                        { name: "超级独狼", top: "25%", left: "10%", size: "text-2xl" },
                        { name: "结构化大师", top: "35%", left: "40%", size: "text-4xl md:text-5xl" },
                        { name: "0-70分速成高手", top: "60%", left: "15%", size: "text-2xl" },
                        { name: "什么都能干", top: "60%", left: "60%", size: "text-2xl" },
                        { name: "在日本待了6年", top: "80%", left: "35%", size: "text-2xl" },
                      ]
                      const colors = ["text-white", "text-primary", "text-white", "text-primary", "text-white", "text-primary", "text-white"]
                      const layout = layouts.find(l => l.name === tag.name) || layouts[0]
                      const colorIndex = layouts.findIndex(l => l.name === tag.name)
                      return (
                        <div
                          key={index}
                          className={`absolute transition-all duration-300 cursor-pointer ${
                            hoveredTag === tag.name ? "scale-125 z-10" : "scale-100"
                          }`}
                          style={{
                            top: layout.top,
                            left: layout.left,
                            opacity: hoveredTag && hoveredTag !== tag.name ? 0.3 : tag.opacity,
                            filter: hoveredTag && hoveredTag !== tag.name ? "blur(1px)" : "none",
                          }}
                          onMouseEnter={() => setHoveredTag(tag.name)}
                          onMouseLeave={() => setHoveredTag(null)}
                        >
                          <span className={`${layout.size} font-medium ${colors[colorIndex]} transition-colors duration-300 ${
                            hoveredTag === tag.name ? "text-primary" : ""
                          } text-center block`}>
                            {tag.name}
                          </span>
                          <span className="block text-xs text-muted-foreground/60 mt-1 text-center max-w-[180px]">{tag.desc}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="flex-shrink-0 w-full lg:w-[420px] mt-16 h-fit">
                  <div className="relative w-full">
                    <Image
                      src="/images/avatar/个人照片.jpg"
                      alt="个人照片"
                      width={400}
                      height={400}
                      className="w-full h-auto object-contain"
                      style={{
                        maskImage: "radial-gradient(closest-side ellipse at center, black 40%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.15) 85%, transparent 100%)",
                        WebkitMaskImage: "radial-gradient(closest-side ellipse at center, black 40%, rgba(0,0,0,0.7) 55%, rgba(0,0,0,0.4) 70%, rgba(0,0,0,0.15) 85%, transparent 100%)",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="pt-8 pb-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-5xl font-medium mb-8 text-center">我做过什么</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="group p-6 rounded-2xl border border-border/30 bg-card/30 backdrop-blur-md hover:border-primary/50 hover:translate-y-[-6px] hover:shadow-2xl hover:shadow-primary/15 transition-all duration-300 cursor-pointer flex flex-col items-center text-center">
                    <h3 className="text-xl font-medium text-white mb-5">{exp.title}</h3>
                    <div className="flex gap-2 w-full justify-center">
                      {exp.images.map((img, imgIndex) => (
                        <button
                          key={imgIndex}
                          onClick={(e) => { e.stopPropagation(); setSelectedImage(`/images/experience/${img}`); }}
                          className="relative w-24 h-24 md:w-28 md:h-28 rounded-xl overflow-hidden border border-border/50 hover:border-primary transition-colors flex-shrink-0"
                          style={{ marginLeft: imgIndex > 0 ? `-8px` : 0, zIndex: imgIndex + 1 }}
                        >
                          <Image
                            src={`/images/experience/${img}`}
                            alt={img}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-black/20 hover:bg-black/0 transition-colors" />
                        </button>
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-border/20 w-full">
                      <p className="text-sm text-muted-foreground/80">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-secondary/20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-medium mb-8 text-center">如果你有以下问题</h2>

              <div className="grid md:grid-cols-2 gap-6 mb-12">
                <div className="p-6 bg-card border border-border relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <h3 className="text-lg font-medium mb-2">想把自己会的东西变成可以卖的产品</h3>
                      <p className="text-muted-foreground">知识、技能产品化，从产品设计到营销策略</p>
                    </div>
                    <BookOpen className="h-10 w-10 text-primary/30 group-hover:text-primary/60 transition-colors" />
                  </div>
                </div>

                <div className="p-6 bg-card border border-border relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <h3 className="text-lg font-medium mb-2">想在新媒体平台做生意</h3>
                      <p className="text-muted-foreground">各行各业新媒体内容策略，内容创意</p>
                    </div>
                    <Video className="h-10 w-10 text-primary/30 group-hover:text-primary/60 transition-colors" />
                  </div>
                </div>

                <div className="p-6 bg-card border border-border relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <h3 className="text-lg font-medium mb-2">想把团队凌乱的工作理理顺</h3>
                      <p className="text-muted-foreground">标准化SOP梳理，引入工具，降本增效</p>
                    </div>
                    <Workflow className="h-10 w-10 text-primary/30 group-hover:text-primary/60 transition-colors" />
                  </div>
                </div>

                <div className="p-6 bg-card border border-border relative overflow-hidden group">
                  <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                  <div className="flex items-center justify-between relative z-10">
                    <div>
                      <h3 className="text-lg font-medium mb-2">遭遇重大交通事故手足无措</h3>
                      <p className="text-muted-foreground">事故责任分析、文书撰写、处理流程专业指导</p>
                    </div>
                    <Shield className="h-10 w-10 text-primary/30 group-hover:text-primary/60 transition-colors" />
                  </div>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
                <div className="text-center lg:text-left">
                  <h3 className="text-3xl md:text-4xl font-medium mb-4">可以找我问问</h3>
                  <p className="text-xl text-muted-foreground">随便问，多少都懂点</p>
                </div>

                <div className="bg-card border border-border p-8 rounded-xl w-full lg:w-auto">
                  <h3 className="text-xl font-medium mb-6">联系方式</h3>
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center">
                        <Mail className="h-5 w-5 mr-3 text-primary" />
                        <a href="mailto:qixuezhang@hotmail.com" className="text-muted-foreground hover:text-primary">
                          qixuezhang@hotmail.com
                        </a>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-5 w-5 mr-3 text-primary" />
                        <a href="tel:+8613918809141" className="text-muted-foreground hover:text-primary">
                          +86 139 1880 9141
                        </a>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-5 w-5 mr-3 text-primary" />
                        <span className="text-muted-foreground">上海</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-center">
                      <Image
                        src="/images/services/二维码.png"
                        alt="二维码"
                        width={120}
                        height={120}
                        className="rounded-lg border border-border/50"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-6 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} 岂学长. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => {
            setSelectedImage(null)
            setImageZoom(1)
            setImagePosition({ x: 0, y: 0 })
          }}
          onWheel={(e) => {
            e.preventDefault()
            e.stopPropagation()
            const delta = e.deltaY > 0 ? -0.1 : 0.1
            setImageZoom(prev => Math.min(Math.max(prev + delta, 0.5), 3))
          }}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => {
              setSelectedImage(null)
              setImageZoom(1)
              setImagePosition({ x: 0, y: 0 })
            }}
          >
            <XCircle className="h-8 w-8" />
          </button>
          <div
            className="relative"
            onClick={() => {
              setSelectedImage(null)
              setImageZoom(1)
              setImagePosition({ x: 0, y: 0 })
            }}
            onMouseDown={(e) => {
              e.stopPropagation()
              setIsDragging(true)
              setDragStart({ x: e.clientX - imagePosition.x, y: e.clientY - imagePosition.y })
            }}
            onMouseMove={(e) => {
              e.stopPropagation()
              if (isDragging) {
                setImagePosition({
                  x: e.clientX - dragStart.x,
                  y: e.clientY - dragStart.y
                })
              }
            }}
            onMouseUp={(e) => {
              e.stopPropagation()
              setIsDragging(false)
            }}
            onMouseLeave={(e) => {
              e.stopPropagation()
              setIsDragging(false)
            }}
          >
            <Image
              src={selectedImage}
              alt="放大图片"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg"
              width={1200}
              height={800}
              style={{
                transform: `translate(${imagePosition.x}px, ${imagePosition.y}px) scale(${imageZoom})`,
                transition: isDragging ? "none" : "transform 0.1s ease-out",
                cursor: isDragging ? "grabbing" : "grab"
              }}
            />
          </div>
        </div>
      )}
    </div>
  )
}