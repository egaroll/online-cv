// pages/index.js
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f5f5f5",
        margin: 0,
        padding: 0,
      }}
    >
      <header style={styles.header}>
        <h1 style={styles.title}>My Online CV</h1>
      </header>

      <main style={styles.main}>
        {/* About Section */}
        <section id="about" style={styles.section}>
          <h2 style={styles.sectionTitle}>About Me</h2>
          <div style={styles.profileContainer}>
            <Image
              src="/images/photo.jpg" // Path to your profile image
              alt="Profile Picture"
              width={150}
              height={150}
              style={styles.profileImage}
            />
            <p style={styles.aboutText}>
              Hi, I`m Helga Puspa C.A, a passionate web developer with a love
              for creating user-friendly websites and applications. With 5
              years of experience in building web solutions, I strive to make
              the web a more interactive and accessible place.
            </p>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" style={styles.section}>
          <h2 style={styles.sectionTitle}>Skills</h2>
          <ul style={styles.skillsList}>
            <li>HTML, CSS, JavaScript</li>
            <li>React.js, Next.js</li>
            <li>Node.js, Express</li>
            <li>MongoDB, SQL</li>
            <li>Git, GitHub</li>
          </ul>
        </section>

        {/* Services Section */}
        <section id="services" style={styles.section}>
          <h2 style={styles.sectionTitle}>Services</h2>
          <div style={styles.service}>
            <h3>Web Development</h3>
            <p>
              I create responsive and dynamic websites using the latest
              technologies.
            </p>
          </div>
          <div style={styles.service}>
            <h3>UI/UX Design</h3>
            <p>
              Design engaging and user-friendly interfaces for better user
              experiences.
            </p>
          </div>
          <div style={styles.service}>
            <h3>App Development</h3>
            <p>
              Develop custom mobile applications to meet your business needs.
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" style={styles.section}>
          <h2 style={styles.sectionTitle}>Portfolio</h2>
          <div style={styles.portfolioItem}>
            <h3>Project 1</h3>
            <p>Brief description of the project.</p>
            <a
              href="https://link-to-project.com"
              target="_blank"
              style={styles.link}
            >
              View Project
            </a>
          </div>
          <div style={styles.portfolioItem}>
            <h3>Project 2</h3>
            <p>Brief description of the project.</p>
            <a
              href="https://link-to-project.com"
              target="_blank"
              style={styles.link}
            >
              View Project
            </a>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" style={styles.section}>
          <h2 style={styles.sectionTitle}>Contact</h2>
          <form
            action="mailto:helga@gmail.com"
            method="POST"
            encType="text/plain"
          >
            <div style={styles.formGroup}>
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                required
                style={styles.textarea}
              ></textarea>
            </div>
            <button type="submit" style={styles.submitButton}>
              Send Message
            </button>
          </form>
        </section>
      </main>

      <footer style={styles.footer}>
        <div style={styles.socialIcons}>
          <a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            style={styles.icon}
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/egaroll"
            target="_blank"
            style={styles.icon}
          >
            <FaGithub size={30} />
          </a>
          <a href="mailto:your-email@example.com" style={styles.icon}>
            <FaEnvelope size={30} />
          </a>
        </div>
        <p>© 2025 Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

const styles = {
  header: {
    backgroundColor: "#333",
    color: "#fff",
    padding: "20px",
    textAlign: "center" as "center" | "left" | "right", // Use the specific types for textAlign
  },
  title: {
    margin: 0,
  },
  main: {
    padding: "20px",
    maxWidth: "900px",
    margin: "0 auto",
    backgroundColor: "#fff",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
  },
  section: {
    marginBottom: "40px",
  },
  sectionTitle: {
    fontSize: "24px",
    marginBottom: "10px",
    color: "#333",
  },
  profileContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column" as "row" | "column", // Use the specific types for flexDirection
  },
  profileImage: {
    borderRadius: "50%",
    marginBottom: "20px",
  },
  aboutText: {
    fontSize: "16px",
    maxWidth: "600px",
    textAlign: "center" as "center" | "left" | "right", // Use the specific types for textAlign
    margin: "0 auto",
  },
  skillsList: {
    listStyle: "none",
    padding: 0,
    fontSize: "16px",
  },
  service: {
    marginBottom: "20px",
  },
  portfolioItem: {
    marginBottom: "20px",
  },
  link: {
    color: "#0070f3",
    textDecoration: "none",
  },
  formGroup: {
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ddd",
    fontSize: "16px",
    minHeight: "150px",
  },
  submitButton: {
    padding: "10px 20px",
    backgroundColor: "#0070f3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
  footer: {
    textAlign: "center" as "center" | "left" | "right", // Use the specific types for textAlign
    padding: "20px",
    backgroundColor: "#333",
    color: "#fff",
  },
  socialIcons: {
    marginBottom: "10px",
  },
  icon: {
    color: "#fff",
    margin: "0 10px",
    textDecoration: "none",
  },
};
