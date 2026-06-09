import { useState } from "react";

const PAGES = {
  HOME: "home",
  WEEKLY: "weekly",
  TASKS: "tasks",
  RESEARCH_DESIGN: "research_design",
  ABOUT_RESEARCH: "about_research",
  CONTACT: "contact",
};

// 📄 ضعي روابط ملفاتكِ الحقيقية هنا بدلاً من الروابط المؤقتة
const FILE_LINKS = {
  weeklyDiary1: "https://drive.google.com/drive/folders/1Q7cL78DPfXtRPZ4DjYbStuH1-omLD5QT1",
  classTask1: "https://drive.google.com/your-class-task-link-1",
  researchDesign1: "https://drive.google.com/your-research-design-link-1",
};

function FileSection({ title, subtitle, fileUrl }) {
  return (
    <div style={{ marginTop: "2rem" }}>
      <p style={{ color: "#888", fontSize: "0.85rem", marginBottom: "1.2rem" }}>
        {subtitle}
      </p>
      
      <a
        href={fileUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "0.6rem",
          textDecoration: "none",
          background: "transparent",
          border: "1.5px solid #b8a99a",
          color: "#b8a99a",
          borderRadius: "6px",
          padding: "0.6rem 1.4rem",
          fontSize: "0.85rem",
          letterSpacing: "0.08em",
          transition: "all 0.2s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#b8a99a22";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "transparent";
        }}
      >
        <span>📄</span> View Document
      </a>
    </div>
  );
}

function SubPage({ title, subtitle, fileUrl, fileSubtitle, onBack }) {
  return (
    <div style={{ minHeight: "100vh", background: "#111", padding: "2.5rem 2rem" }}>
      <button
        onClick={onBack}
        style={{
          background: "none",
          border: "none",
          color: "#b8a99a",
          cursor: "pointer",
          fontSize: "0.85rem",
          letterSpacing: "0.1em",
          marginBottom: "2.5rem",
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          padding: 0,
        }}
      >
        ← Back
      </button>

      <div style={{ maxWidth: "680px", margin: "0 auto" }}>
        <p style={{ color: "#b8a99a", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
          Class Materials
        </p>
        <h1
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
            color: "#e8e0d8",
            fontWeight: 400,
            marginBottom: "0.6rem",
            lineHeight: 1.2,
          }}
        >
          {title}
        </h1>
        <p style={{ color: "#888", fontSize: "0.88rem", marginBottom: "2.5rem", lineHeight: 1.7 }}>
          {subtitle}
        </p>

        <div
          style={{
            width: "40px",
            height: "1px",
            background: "#b8a99a44",
            marginBottom: "2.5rem",
          }}
        />

        <FileSection title={title} subtitle={fileSubtitle} fileUrl={fileUrl} />
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [page, setPage] = useState(PAGES.HOME);

  if (page === PAGES.WEEKLY) {
    return (
      <SubPage
        title="Weekly Diaries"
        subtitle="The summary of what I learned each week."
        fileSubtitle="Access the compiled weekly diaries for the IE-200 course:"
        fileUrl={FILE_LINKS.weeklyDiary1}
        onBack={() => setPage(PAGES.HOME)}
      />
    );
  }

  if (page === PAGES.TASKS) {
    return (
      <SubPage
        title="Class Tasks"
        subtitle="The results of each task in this course."
        fileSubtitle="Access the compiled class tasks and reports:"
        fileUrl={FILE_LINKS.classTask1}
        onBack={() => setPage(PAGES.HOME)}
      />
    );
  }

  if (page === PAGES.RESEARCH_DESIGN) {
    return (
      <SubPage
        title="Research Design"
        subtitle="The summary of each step in the research production."
        fileSubtitle="Access the complete research design documentation:"
        fileUrl={FILE_LINKS.researchDesign1}
        onBack={() => setPage(PAGES.HOME)}
      />
    );
  }

  if (page === PAGES.ABOUT_RESEARCH) {
    return (
      <div style={{ minHeight: "100vh", background: "#111", padding: "2.5rem 2rem" }}>
        <button
          onClick={() => setPage(PAGES.HOME)}
          style={{
            background: "none",
            border: "none",
            color: "#b8a99a",
            cursor: "pointer",
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
            marginBottom: "2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: 0,
          }}
        >
          ← Back
        </button>

        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p style={{ color: "#b8a99a", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Research
          </p>
          <h1
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              color: "#e8e0d8",
              fontWeight: 400,
              marginBottom: "2.5rem",
              lineHeight: 1.2,
            }}
          >
            About the Research
          </h1>

          {[
            {
              heading: "Value of the Study",
              body: "This study contributes to the growing body of evidence supporting a public health approach to drug misuse among youth. By highlighting that the most serious harms are social and psychological — and that the primary contributing factors are mental health vulnerabilities and adverse environments — the findings challenge purely punitive frameworks and support investment in prevention, early intervention, and rehabilitation. This is particularly useful for educators, policymakers, and community organizations working with at-risk youth populations.",
            },
            {
              heading: "Limitation",
              body: "This study has limitations that should be acknowledged. The sample size was relatively small, and participants were drawn from a limited demographic group, which restricts the generalizability of the findings. Additionally, the study relied solely on a survey method, which may not fully capture the complexity of individual experiences with drug misuse.",
            },
            {
              heading: "Suggestion for Future Research",
              body: "Future research should consider expanding the sample to include more diverse populations across different regions and age groups. Incorporating qualitative methods such as interviews or focus groups would allow for deeper exploration of personal experiences. Longitudinal studies examining the long-term effects of early intervention programs would also provide valuable evidence for policy development.",
            },
          ].map((sec) => (
            <div key={sec.heading} style={{ marginBottom: "2.8rem" }}>
              <div
                style={{
                  width: "30px",
                  height: "1px",
                  background: "#b8a99a",
                  marginBottom: "1rem",
                }}
              />
              <h2
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "1.05rem",
                  color: "#e8e0d8",
                  fontWeight: 400,
                  marginBottom: "0.8rem",
                  letterSpacing: "0.03em",
                }}
              >
                {sec.heading}
              </h2>
              <p style={{ color: "#999", fontSize: "0.9rem", lineHeight: 1.85 }}>{sec.body}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (page === PAGES.CONTACT) {
    return (
      <div style={{ minHeight: "100vh", background: "#111", padding: "2.5rem 2rem" }}>
        <button
          onClick={() => setPage(PAGES.HOME)}
          style={{
            background: "none",
            border: "none",
            color: "#b8a99a",
            cursor: "pointer",
            fontSize: "0.85rem",
            letterSpacing: "0.1em",
            marginBottom: "2.5rem",
            display: "flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: 0,
          }}
        >
          ← Back
        </button>

        <div style={{ maxWidth: "520px", margin: "0 auto" }}>
          <p style={{ color: "#b8a99a", fontSize: "0.75rem", letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: "0.5rem" }}>
            Reach Out
          </p>
          <h1
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.6rem, 4vw, 2.4rem)",
              color: "#e8e0d8",
              fontWeight: 400,
              marginBottom: "2.5rem",
            }}
          >
            My Contact
          </h1>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
            <a
              href="mailto:fshabi0001@stu.kau.edu.sa"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: "8px",
                padding: "1.1rem 1.4rem",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#b8a99a55")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
            >
              <span style={{ fontSize: "1.2rem" }}>✉️</span>
              <div>
                <div style={{ color: "#888", fontSize: "0.72rem", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>EMAIL</div>
                <div style={{ color: "#e8e0d8", fontSize: "0.88rem" }}>fshabi0001@stu.kau.edu.sa</div>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/rayne-shabi-1560a83b9"
              target="_blank"
              rel="noreferrer"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "1rem",
                background: "#1a1a1a",
                border: "1px solid #2a2a2a",
                borderRadius: "8px",
                padding: "1.1rem 1.4rem",
                textDecoration: "none",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#b8a99a55")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#2a2a2a")}
            >
              <span style={{ fontSize: "1.2rem" }}>🔗</span>
              <div>
                <div style={{ color: "#888", fontSize: "0.72rem", letterSpacing: "0.1em", marginBottom: "0.2rem" }}>LINKEDIN</div>
                <div style={{ color: "#e8e0d8", fontSize: "0.88rem" }}>Rayne Shabi</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", background: "#111", fontFamily: "'Helvetica Neue', sans-serif", color: "#e8e0d8" }}>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: "#111111ee",
          backdropFilter: "blur(12px)",
          borderBottom: "1px solid #1e1e1e",
          padding: "0 2rem",
          height: "56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <span style={{ fontFamily: "'Georgia', serif", fontSize: "0.95rem", letterSpacing: "0.06em", color: "#e8e0d8" }}>
          Rayne Shabi
        </span>

        <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {[
            { label: "Home", action: () => setPage(PAGES.HOME) },
            { label: "About Research", action: () => setPage(PAGES.ABOUT_RESEARCH) },
            { label: "Contact", action: () => setPage(PAGES.CONTACT) },
          ].map((item) => (
            <button
              key={item.label}
              onClick={item.action}
              style={{
                background: "none",
                border: "none",
                color: "#999",
                cursor: "pointer",
                fontSize: "0.8rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: 0,
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#e8e0d8")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#999")}
            >
              {item.label}
            </button>
          ))}
        </div>
      </nav>

      <section style={{ paddingTop: "140px", paddingBottom: "80px", paddingLeft: "2rem", paddingRight: "2rem", maxWidth: "820px", margin: "0 auto" }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: "0.22em", color: "#b8a99a", textTransform: "uppercase", marginBottom: "1.2rem" }}>
          IE-200 Portfolio · KAU · 2022
        </p>

        <h1 style={{ fontFamily: "'Georgia', serif", fontSize: "clamp(2.4rem, 7vw, 4.2rem)", fontWeight: 400, lineHeight: 1.1, marginBottom: "2rem", color: "#e8e0d8" }}>
          Rayne<br /><span style={{ color: "#b8a99a" }}>Shabi</span>
        </h1>

        <p style={{ fontSize: "0.9rem", color: "#888", lineHeight: 1.85, maxWidth: "520px", marginBottom: "1rem" }}>
          I'm Rayne Shabi. I am about 21 years old, and I am an engineering student. It's my pleasure to present a compilation of my prominent works and projects accomplished during this course. I look forward to your valuable feedback and constructive perspective.
        </p>

        <p style={{ fontSize: "0.8rem", color: "#555", letterSpacing: "0.08em" }}>📍 Jeddah, Saudi Arabia</p>
      </section>

      <div style={{ maxWidth: "820px", margin: "0 auto 3rem", padding: "0 2rem" }}>
        <div style={{ height: "1px", background: "linear-gradient(to right, #b8a99a33, transparent)" }} />
      </div>

      <section style={{ maxWidth: "820px", margin: "0 auto", padding: "0 2rem 5rem" }}>
        <p style={{ fontSize: "0.72rem", letterSpacing: "0.22em", color: "#b8a99a", textTransform: "uppercase", marginBottom: "2rem" }}>
          Class Materials
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "#1e1e1e", borderRadius: "10px", overflow: "hidden", border: "1px solid #1e1e1e" }}>
          {[
            { title: "Weekly Diaries", sub: "The summary of what I learned each week.", page: PAGES.WEEKLY },
            { title: "Class Tasks", sub: "The results of each task in this course.", page: PAGES.TASKS },
            { title: "Research Design", sub: "The summary of each step in the research production.", page: PAGES.RESEARCH_DESIGN },
          ].map((item) => (
            <button
              key={item.title}
              onClick={() => setPage(item.page)}
              style={{ background: "#161616", border: "none", padding: "2rem 1.6rem", cursor: "pointer", textAlign: "left", transition: "background 0.2s" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#1c1c1c")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#161616")}
            >
              <div style={{ fontFamily: "'Georgia', serif", fontSize: "1rem", color: "#e8e0d8", marginBottom: "0.5rem", fontWeight: 400 }}>
                {item.title}
              </div>
              <div style={{ fontSize: "0.78rem", color: "#666", lineHeight: 1.6 }}>{item.sub}</div>
              <div style={{ marginTop: "1.4rem", color: "#b8a99a", fontSize: "0.78rem", letterSpacing: "0.08em" }}>Open →</div>
            </button>
          ))}
        </div>
      </section>

      <footer style={{ borderTop: "1px solid #1e1e1e", padding: "1.4rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", maxWidth: "820px", margin: "0 auto" }}>
        <span style={{ fontSize: "0.75rem", color: "#444" }}>IE-200 · KAU · 2022</span>
        <button onClick={() => setPage(PAGES.CONTACT)} style={{ background: "none", border: "none", color: "#b8a99a", cursor: "pointer", fontSize: "0.75rem", letterSpacing: "0.1em", padding: 0 }}>
          Contact
        </button>
      </footer>
    </div>
  );
}
