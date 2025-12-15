"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Building2,
  Users,
  ScanFace,
  UserPlus,
  Clock,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  MapPin,
  TrendingUp,
  Award,
  Shield,
  Zap,
  Target,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ScanFace,
    title: "Chấm công khuôn mặt",
    description:
      "Công nghệ nhận diện khuôn mặt AI hiện đại, chính xác và bảo mật cao",
  },
  {
    icon: UserPlus,
    title: "Quản lý tuyển dụng",
    description:
      "Hệ thống ATS (Applicant Tracking System) hiện đại giúp tối ưu hóa toàn bộ quy trình tuyển dụng nhân sự. Từ đăng tin, sàng lọc hồ sơ đến phỏng vấn và ra quyết định tuyển dụng nhanh chóng, chính xác hơn.",
    image: "/recruit-img.jpg",
    features: [
      "Đăng tin tuyển dụng đa kênh",
      "Quản lý ứng viên tập trung",
      "Lịch phỏng vấn thông minh",
    ],
  },
  {
    icon: Users,
    title: "Quản lý nhân sự",
    description:
      "Quản lý toàn bộ thông tin nhân viên tập trung trên một nền tảng duy nhất. Theo dõi hồ sơ, hiệu suất làm việc, phòng ban và chức vụ một cách hiệu quả, giúp doanh nghiệp nắm bắt đầy đủ thông tin nhân sự.",
    image: "/hr-img.jpg",
    features: [
      "Hồ sơ nhân viên điện tử",
      "Theo dõi hiệu suất làm việc",
      "Quản lý phòng ban, chức vụ",
    ],
  },
];

const jobs = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    department: "Engineering",
    location: "TP.HCM",
    type: "Full-time",
    salary: "25-35 triệu",
    description:
      "Tham gia phát triển giao diện người dùng cho hệ thống quản lý nhân sự AttendEase",
    tags: ["React", "TypeScript", "Next.js"],
  },
  {
    id: 2,
    title: "Backend Developer (Node.js)",
    department: "Engineering",
    location: "TP.HCM",
    type: "Full-time",
    salary: "20-30 triệu",
    description:
      "Xây dựng và tối ưu hóa API, database cho hệ thống HR toàn diện",
    tags: ["Node.js", "PostgreSQL", "API"],
  },
  {
    id: 3,
    title: "AI/ML Engineer",
    department: "AI Research",
    location: "TP.HCM / Remote",
    type: "Full-time",
    salary: "30-40 triệu",
    description:
      "Phát triển và cải thiện thuật toán nhận diện khuôn mặt và các tính năng AI",
    tags: ["Python", "TensorFlow", "Computer Vision"],
  },
  {
    id: 4,
    title: "Product Manager",
    department: "Product",
    location: "Hà Nội",
    type: "Full-time",
    salary: "25-35 triệu",
    description:
      "Định hướng phát triển sản phẩm, làm việc với đội ngũ kỹ thuật và khách hàng",
    tags: ["Agile", "Product Strategy", "Leadership"],
  },
  {
    id: 5,
    title: "UI/UX Designer",
    department: "Design",
    location: "TP.HCM",
    type: "Full-time",
    salary: "18-25 triệu",
    description:
      "Thiết kế trải nghiệm người dùng trực quan và hiện đại cho hệ thống HR",
    tags: ["Figma", "UI Design", "User Research"],
  },
  {
    id: 6,
    title: "Sales Executive",
    department: "Sales",
    location: "TP.HCM / Hà Nội",
    type: "Full-time",
    salary: "15-20 triệu + Thưởng",
    description:
      "Tư vấn và bán giải pháp quản lý nhân sự cho doanh nghiệp vừa và lớn",
    tags: ["B2B Sales", "Consulting", "CRM"],
  },
];

const stats = [
  { number: "500+", label: "Doanh nghiệp tin dùng" },
  { number: "50,000+", label: "Nhân viên sử dụng" },
  { number: "99.9%", label: "Độ chính xác" },
  { number: "24/7", label: "Hỗ trợ" },
];

export default function HomePage() {
  const [activeTab, setActiveTab] = useState<"home" | "jobs">("home");

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
        <div className="container mx-auto flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
              <Building2 className="h-6 w-6 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold text-primary">AttendEase</span>
          </div>
          <nav className="flex items-center gap-8">
            <button
              onClick={() => setActiveTab("home")}
              className={`cursor-pointer text-sm font-medium transition-colors hover:text-primary ${
                activeTab === "home" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Trang chủ
            </button>
            <button
              onClick={() => setActiveTab("jobs")}
              className={`cursor-pointer text-sm font-medium transition-colors hover:text-primary ${
                activeTab === "jobs" ? "text-primary" : "text-muted-foreground"
              }`}
            >
              Tìm công việc
            </button>
          </nav>
          <div className="flex items-center gap-4">
            <Button
              size="sm"
              className="cursor-pointer bg-primary hover:bg-primary/90"
            >
              Dùng thử miễn phí
            </Button>
          </div>
        </div>
      </header>

      {activeTab === "home" && (
        <>
          {/* Hero Section */}
          <section className="relative overflow-hidden py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                <div>
                  <Badge
                    className="mb-6 bg-primary/10 text-primary hover:bg-primary/20"
                    variant="secondary"
                  >
                    <Sparkles className="mr-1 h-3 w-3" />
                    Giải pháp quản lý nhân sự toàn diện
                  </Badge>
                  <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
                    Quản lý nhân sự thông minh với{" "}
                    <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">
                      AttendEase
                    </span>
                  </h1>
                  <p className="mb-8 text-pretty text-lg text-muted-foreground">
                    Nền tảng quản lý nhân sự hiện đại với công nghệ AI, giúp
                    doanh nghiệp tối ưu hóa quy trình chấm công, tuyển dụng và
                    quản lý nhân viên
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <Button
                      size="lg"
                      className="cursor-pointer bg-primary text-lg hover:bg-primary/90"
                    >
                      Dùng thử miễn phí 30 ngày
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="cursor-pointer text-lg bg-transparent"
                    >
                      Xem demo
                    </Button>
                  </div>

                  {/* Stats mini */}
                  <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-4">
                    {stats.map((stat, index) => (
                      <div key={index}>
                        <div className="mb-1 text-2xl font-bold text-primary">
                          {stat.number}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Hero Image */}
                <div className="relative">
                  <div className="absolute -left-10 -top-10 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
                  <div className="absolute -bottom-10 -right-10 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />
                  <div className="relative">
                    <img
                      src="/modern-hr-management-dashboard-interface-with-char.jpg"
                      alt="AttendEase Dashboard"
                      className="relative z-10 rounded-2xl shadow-2xl"
                    />
                    {/* Floating cards */}
                    <Card className="absolute -left-6 top-1/4 z-20 w-48 shadow-lg">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                            <CheckCircle2 className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">Chấm công</div>
                            <div className="text-xs text-muted-foreground">
                              99.9% chính xác
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    <Card className="absolute -right-6 bottom-1/4 z-20 w-48 shadow-lg">
                      <CardContent className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                            <TrendingUp className="h-6 w-6 text-accent" />
                          </div>
                          <div>
                            <div className="text-sm font-medium">
                              Tăng trưởng
                            </div>
                            <div className="text-xs text-muted-foreground">
                              +45% hiệu suất
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section - Bento Grid Style */}
          <section className="border-y bg-muted/30 py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="mb-16 text-center">
                <Badge
                  className="mb-4 bg-primary/10 text-primary hover:bg-primary/20"
                  variant="secondary"
                >
                  Tính năng nổi bật
                </Badge>
                <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-5xl">
                  Giải pháp toàn diện cho doanh nghiệp
                </h2>
                <p className="mx-auto max-w-2xl text-pretty text-lg text-muted-foreground">
                  AttendEase cung cấp đầy đủ các công cụ cần thiết để quản lý
                  nhân sự hiệu quả
                </p>
              </div>

              {/* Bento Grid */}
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Large feature card */}
                <Card className="group cursor-pointer md:col-span-2 lg:row-span-2">
                  <CardContent className="flex h-full flex-col justify-between p-8">
                    <div>
                      <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <ScanFace className="h-8 w-8" />
                      </div>
                      <h3 className="mb-3 text-2xl font-bold">
                        Chấm công khuôn mặt AI
                      </h3>
                      <p className="mb-6 text-muted-foreground">
                        Công nghệ nhận diện khuôn mặt tiên tiến với độ chính xác
                        99.9%, chống gian lận và bảo mật tuyệt đối
                      </p>
                      <ul className="space-y-2">
                        {[
                          "Nhận diện trong 0.5 giây",
                          "Hoạt động trong mọi điều kiện ánh sáng",
                          "Lưu trữ dữ liệu mã hóa",
                        ].map((item, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm"
                          >
                            <CheckCircle2 className="h-4 w-4 text-primary" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-6">
                      <img
                        src="/facial-recognition-attendance-system-scanning-face.jpg"
                        alt="Facial Recognition"
                        className="rounded-lg"
                      />
                    </div>
                  </CardContent>
                </Card>

                {/* Regular feature cards */}
                {features.slice(1).map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <Card
                      key={index}
                      className="group cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/10"
                    >
                      <CardContent className="p-6 flex flex-col h-full">
                        <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                          <Icon className="h-6 w-6" />
                        </div>
                        <h3 className="mb-2 text-xl font-semibold">
                          {feature.title}
                        </h3>
                        <p className="mb-4 text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                        {feature.features && (
                          <ul className="mb-4 space-y-2">
                            {feature.features.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-sm"
                              >
                                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {feature.image && (
                          <div className="mt-auto">
                            <img
                              src={feature.image}
                              alt={feature.title}
                              className="w-full h-40 object-cover rounded-lg"
                            />
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 md:py-32">
            <div className="container mx-auto px-4">
              <div className="grid items-center gap-12 lg:grid-cols-2">
                {/* Image side */}
                <div className="order-2 lg:order-1">
                  <div className="relative">
                    <img
                      src="/professional-business-team-working-office-modern.jpg"
                      alt="Professional Team"
                      className="rounded-2xl shadow-xl"
                    />
                    <div className="absolute -bottom-6 -right-6 -z-10 h-full w-full rounded-2xl bg-primary/20" />
                  </div>
                </div>

                {/* Content side */}
                <div className="order-1 lg:order-2">
                  <Badge
                    className="mb-4 bg-primary/10 text-primary hover:bg-primary/20"
                    variant="secondary"
                  >
                    Tại sao chọn AttendEase
                  </Badge>
                  <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl">
                    Đối tác tin cậy cho hơn 500+ doanh nghiệp
                  </h2>
                  <p className="mb-8 text-muted-foreground">
                    Chúng tôi mang đến giải pháp quản lý nhân sự toàn diện, giúp
                    doanh nghiệp tối ưu hóa quy trình và nâng cao hiệu suất làm
                    việc.
                  </p>

                  <div className="space-y-4">
                    {[
                      {
                        icon: Shield,
                        title: "Bảo mật tuyệt đối",
                        desc: "Mã hóa dữ liệu end-to-end, tuân thủ ISO 27001",
                      },
                      {
                        icon: Zap,
                        title: "Triển khai nhanh chóng",
                        desc: "Đưa vào sử dụng chỉ trong 3-5 ngày làm việc",
                      },
                      {
                        icon: Target,
                        title: "Tùy chỉnh linh hoạt",
                        desc: "Cá nhân hóa theo nhu cầu riêng của doanh nghiệp",
                      },
                      {
                        icon: Award,
                        title: "Hỗ trợ 24/7",
                        desc: "Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ",
                      },
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <item.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="mb-1 font-semibold">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="border-y bg-linear-to-br from-primary/10 via-accent/5 to-background py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center">
                <h2 className="mb-4 text-balance text-3xl font-bold md:text-5xl">
                  Sẵn sàng chuyển đổi số quản lý nhân sự?
                </h2>
                <p className="mb-8 text-pretty text-lg text-muted-foreground">
                  Hãy để AttendEase giúp doanh nghiệp của bạn tối ưu hóa quy
                  trình và nâng cao hiệu suất làm việc
                </p>
                <Button
                  size="lg"
                  className="cursor-pointer bg-primary text-lg hover:bg-primary/90"
                >
                  Đặt lịch tư vấn miễn phí
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </section>
        </>
      )}

      {activeTab === "jobs" && (
        <>
          {/* Jobs Hero */}
          <section className="relative overflow-hidden bg-linear-to-b from-primary/5 to-background py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-3xl text-center">
                <Badge
                  className="mb-4 bg-primary/10 text-primary hover:bg-primary/20"
                  variant="secondary"
                >
                  <Briefcase className="mr-1 h-3 w-3" />
                  Cơ hội nghề nghiệp
                </Badge>
                <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-6xl">
                  Gia nhập đội ngũ AttendEase
                </h1>
                <p className="text-pretty text-lg text-muted-foreground">
                  Chúng tôi đang tìm kiếm những tài năng xuất sắc để cùng xây
                  dựng tương lai của quản lý nhân sự
                </p>
              </div>
            </div>
          </section>

          {/* Jobs Grid */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="mx-auto max-w-6xl">
                <div className="mb-12 grid gap-6 md:grid-cols-3">
                  {/* Stats cards */}
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="mb-2 text-3xl font-bold text-primary">
                        6
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Vị trí đang tuyển
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="mb-2 text-3xl font-bold text-primary">
                        100+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Nhân viên
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6 text-center">
                      <div className="mb-2 text-3xl font-bold text-primary">
                        3
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Văn phòng
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Jobs list */}
                <div className="space-y-6">
                  {jobs.map((job) => (
                    <Card
                      key={job.id}
                      className="group cursor-pointer transition-all hover:shadow-lg hover:shadow-primary/10"
                    >
                      <CardContent className="p-6">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                          <div className="flex-1">
                            <div className="mb-3 flex flex-wrap items-start gap-3">
                              <h3 className="text-2xl font-bold">
                                {job.title}
                              </h3>
                              <Badge
                                variant="secondary"
                                className="bg-primary/10 text-primary"
                              >
                                {job.type}
                              </Badge>
                            </div>
                            <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                              <span className="flex items-center gap-1">
                                <Building2 className="h-4 w-4" />
                                {job.department}
                              </span>
                              <span className="flex items-center gap-1">
                                <MapPin className="h-4 w-4" />
                                {job.location}
                              </span>
                            </div>
                            <p className="mb-4 text-muted-foreground">
                              {job.description}
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {job.tags.map((tag, i) => (
                                <Badge
                                  key={i}
                                  variant="outline"
                                  className="text-xs"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                          <div className="shrink-0 lg:ml-6">
                            <Button
                              size="lg"
                              className="cursor-pointer w-full bg-primary hover:bg-primary/90 lg:w-auto"
                              onClick={() => {
                                window.open("/images/image.png", "_blank");
                              }}
                            >
                              Ứng tuyển ngay
                              <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Why Join Section */}
                <div className="mt-16">
                  <Card className="border-primary/20 bg-linear-to-br from-primary/5 to-accent/5">
                    <CardContent className="p-8 md:p-12">
                      <div className="mb-8 text-center">
                        <h3 className="mb-2 text-2xl font-bold md:text-3xl">
                          Tại sao nên làm việc tại AttendEase?
                        </h3>
                        <p className="text-muted-foreground">
                          Môi trường làm việc chuyên nghiệp và nhiều cơ hội phát
                          triển
                        </p>
                      </div>

                      <div className="grid gap-8 md:grid-cols-2">
                        {/* Benefits with images */}
                        <div className="space-y-4">
                          {[
                            "Mức lương cạnh tranh và đãi ngộ hấp dẫn",
                            "Môi trường làm việc năng động, sáng tạo",
                            "Cơ hội phát triển và thăng tiến rõ ràng",
                            "Đào tạo và nâng cao kỹ năng chuyên môn",
                          ].map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                              <span className="text-muted-foreground">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                        <div className="space-y-4">
                          {[
                            "Bảo hiểm đầy đủ theo quy định pháp luật",
                            "Du lịch, team building hàng năm",
                            "Chế độ nghỉ phép linh hoạt",
                            "Văn phòng hiện đại, đầy đủ tiện nghi",
                          ].map((benefit, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                              <span className="text-muted-foreground">
                                {benefit}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8">
                        <img
                          src="/modern-office-workspace-team-collaboration-happy-e.jpg"
                          alt="Team working"
                          className="rounded-xl"
                        />
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Building2 className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="font-bold text-primary">AttendEase</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 AttendEase. Giải pháp quản lý nhân sự hàng đầu Việt Nam.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
