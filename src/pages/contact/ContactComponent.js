import React, { useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import BlogsImg from "./BlogsImg";
import { Fade } from "react-reveal";
import "./ContactComponent.css";
import { greeting, contactPageData } from "../../portfolio.js";
import { style } from "glamor";

const ContactData = contactPageData.contactSection;
const blogSection = contactPageData.blogSection;

// Sample blog data - replace with your actual blog data
const blogPosts = [
  {
    id: 1,
    title: "Understanding React Hooks",
    description: "A comprehensive guide to React Hooks and how they can simplify your component logic.",
    fullContent: `React Hooks revolutionized how we write React components by allowing us to use state and other React features in functional components. This comprehensive guide will walk you through the most important hooks and how to use them effectively.

**useState Hook**
The useState hook is the most fundamental hook for managing component state. It returns an array with two elements: the current state value and a function to update it.

**useEffect Hook**
The useEffect hook lets you perform side effects in functional components. It serves the same purpose as componentDidMount, componentDidUpdate, and componentWillUnmount combined in React class components.

**Custom Hooks**
Creating custom hooks allows you to extract component logic into reusable functions. This promotes code reusability and makes your components cleaner and more maintainable.

**Best Practices**
- Always use hooks at the top level of your React function
- Don't call hooks inside loops, conditions, or nested functions
- Use the ESLint plugin for React Hooks to catch common mistakes`,
    date: "March 15, 2024",
    readTime: "8 min read",
    tags: ["React", "JavaScript", "Frontend", "Hooks"]
  },
  {
    id: 2,
    title: "Modern CSS Techniques",
    description: "Exploring the latest CSS features and how to use them in your projects.",
    fullContent: `Modern CSS has evolved significantly, introducing powerful new features that make styling more efficient and maintainable. Let's explore some of the most impactful techniques.

**CSS Grid and Flexbox**
CSS Grid provides a two-dimensional layout system, while Flexbox excels at one-dimensional layouts. Understanding when to use each is crucial for modern web development.

**CSS Custom Properties (Variables)**
CSS variables allow you to store values that can be reused throughout your stylesheet. They're particularly useful for theming and maintaining consistent design systems.

**Container Queries**
Container queries allow you to apply styles based on the size of a containing element rather than the viewport. This is a game-changer for component-based design.

**Modern Selectors**
New CSS selectors like :has(), :is(), and :where() provide more powerful and flexible ways to target elements.

**Performance Considerations**
Understanding CSS performance implications helps create faster, more efficient stylesheets that improve user experience.`,
    date: "February 28, 2024",
    readTime: "6 min read",
    tags: ["CSS", "Frontend", "Web Design", "Performance"]
  },
  {
    id: 3,
    title: "JavaScript Performance Tips",
    description: "Best practices for optimizing JavaScript performance in web applications.",
    fullContent: `JavaScript performance optimization is crucial for creating fast, responsive web applications. Here are proven techniques to improve your JavaScript performance.

**Memory Management**
Proper memory management prevents memory leaks and improves application performance. Understanding garbage collection and avoiding common pitfalls is essential.

**Event Delegation**
Instead of attaching event listeners to individual elements, use event delegation to attach a single listener to a parent element. This reduces memory usage and improves performance.

**Debouncing and Throttling**
These techniques help control the rate at which functions execute, particularly useful for handling user input events like scrolling or typing.

**Code Splitting**
Breaking your JavaScript into smaller chunks that load on demand reduces initial bundle size and improves page load times.

**Web Workers**
For CPU-intensive tasks, Web Workers allow you to run JavaScript in the background without blocking the main thread.

**Monitoring and Profiling**
Use browser dev tools and performance monitoring to identify bottlenecks and measure the impact of your optimizations.`,
    date: "January 20, 2024",
    readTime: "10 min read",
    tags: ["JavaScript", "Performance", "Optimization", "Web Development"]
  }
];

function Contact(props) {
  const theme = props.theme;
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedBlog(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };
  
  const styles = style({
    backgroundColor: `${theme.accentBright}`,
    ":hover": {
      boxShadow: `0 5px 15px ${theme.accentBright}`,
    },
  });

  const blogCardStyle = style({
    backgroundColor: theme.projectCard || theme.background,
    border: `1px solid ${theme.border || theme.accentBright}`,
    borderRadius: '8px',
    padding: '20px',
    marginBottom: '20px',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    ":hover": {
      transform: 'translateY(-5px)',
      boxShadow: `0 8px 25px ${theme.accentBright}40`,
    },
  });

  const modalOverlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
    padding: '20px',
    animation: isModalOpen ? 'fadeIn 0.3s ease' : 'fadeOut 0.3s ease'
  };

  const modalContentStyle = {
    backgroundColor: theme.projectCard || theme.background,
    borderRadius: '12px',
    padding: '30px',
    maxWidth: '800px',
    maxHeight: '80vh',
    width: '100%',
    position: 'relative',
    overflowY: 'auto',
    border: `2px solid ${theme.accentBright}`,
    boxShadow: `0 20px 60px ${theme.accentBright}30`,
    animation: isModalOpen ? 'slideIn 0.3s ease' : 'slideOut 0.3s ease'
  };

  return (
    <div className="contact-main">
      <Header theme={theme} setTheme={props.setTheme} />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-img-div">
              <img
                className="profile-pic"
                src={require(`../../assests/images/${ContactData["profile_image_path"]}`)}
                alt=""
              />
            </div>
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a {...styles} className="general-btn" href={greeting.resumeLink}>
                See my Resume
              </a>
            </div>
          </div>
        </Fade>
        <Fade bottom duration={1000} distance="40px">
          <div className="blog-heading-div">
            <div className="blog-heading-text-div">
              <h1 className="blog-heading-text" style={{ color: theme.text }}>
                {blogSection["title"]}
              </h1>
              <p
                className="blog-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {blogSection["subtitle"]}
              </p>
              
              {/* Blog Cards Section */}
              <div className="blog-cards-container" style={{ marginTop: '30px' }}>
                {blogPosts.map((blog) => (
                  <div key={blog.id} {...blogCardStyle} className="blog-card">
                    <h3 style={{ 
                      color: theme.text,
                      marginBottom: '10px',
                      fontSize: '1.2rem',
                      fontWeight: '600'
                    }}>
                      {blog.title}
                    </h3>
                    <p style={{ 
                      color: theme.secondaryText,
                      marginBottom: '15px',
                      lineHeight: '1.5'
                    }}>
                      {blog.description}
                    </p>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      flexWrap: 'wrap',
                      gap: '10px'
                    }}>
                      <span style={{ 
                        color: theme.secondaryText,
                        fontSize: '0.9rem'
                      }}>
                        {blog.date}
                      </span>
                      <button 
                        onClick={() => openModal(blog)}
                        style={{
                          color: theme.accentBright,
                          textDecoration: 'none',
                          fontWeight: '500',
                          fontSize: '0.9rem',
                          padding: '5px 10px',
                          borderRadius: '4px',
                          transition: 'background-color 0.3s ease',
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = `${theme.accentBright}20`;
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = 'transparent';
                        }}
                      >
                        Read More →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="blog-heading-img-div">
              <BlogsImg theme={theme} />
            </div>
          </div>
        </Fade>
      </div>

      {/* Modal */}
      {isModalOpen && selectedBlog && (
        <div style={modalOverlayStyle} onClick={closeModal}>
          <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                color: theme.secondaryText,
                cursor: 'pointer',
                padding: '5px',
                borderRadius: '50%',
                width: '35px',
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = `${theme.accentBright}20`;
                e.target.style.color = theme.accentBright;
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = theme.secondaryText;
              }}
            >
              ×
            </button>

            {/* Modal Header */}
            <div style={{ marginBottom: '20px', paddingRight: '40px' }}>
              <h2 style={{ 
                color: theme.text,
                fontSize: '1.8rem',
                fontWeight: '700',
                marginBottom: '10px',
                lineHeight: '1.3'
              }}>
                {selectedBlog.title}
              </h2>
              
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '15px',
                marginBottom: '15px',
                flexWrap: 'wrap'
              }}>
                <span style={{ 
                  color: theme.secondaryText,
                  fontSize: '0.9rem'
                }}>
                  {selectedBlog.date}
                </span>
                <span style={{ 
                  color: theme.accentBright,
                  fontSize: '0.9rem',
                  fontWeight: '500'
                }}>
                  {selectedBlog.readTime}
                </span>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {selectedBlog.tags.map((tag, index) => (
                  <span
                    key={index}
                    style={{
                      backgroundColor: `${theme.accentBright}20`,
                      color: theme.accentBright,
                      padding: '4px 12px',
                      borderRadius: '20px',
                      fontSize: '0.8rem',
                      fontWeight: '500'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Content */}
            <div style={{
              color: theme.secondaryText,
              lineHeight: '1.7',
              fontSize: '1rem'
            }}>
              {selectedBlog.fullContent.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  // Handle bold headings
                  return (
                    <h3 key={index} style={{
                      color: theme.text,
                      fontSize: '1.3rem',
                      fontWeight: '600',
                      margin: '25px 0 15px 0'
                    }}>
                      {paragraph.slice(2, -2)}
                    </h3>
                  );
                } else {
                  // Handle regular paragraphs
                  return (
                    <p key={index} style={{
                      marginBottom: '16px',
                      textAlign: 'justify'
                    }}>
                      {paragraph}
                    </p>
                  );
                }
              })}
            </div>

            {/* Modal Footer */}
            <div style={{
              marginTop: '30px',
              paddingTop: '20px',
              borderTop: `1px solid ${theme.border || theme.accentBright}30`,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <span style={{ 
                color: theme.secondaryText,
                fontSize: '0.9rem'
              }}>
                Thanks for reading!
              </span>
              <button
                onClick={closeModal}
                style={{
                  backgroundColor: theme.accentBright,
                  color: theme.background,
                  border: 'none',
                  padding: '10px 20px',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = 'translateY(-2px)';
                  e.target.style.boxShadow = `0 5px 15px ${theme.accentBright}50`;
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = 'translateY(0)';
                  e.target.style.boxShadow = 'none';
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add CSS animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        @keyframes slideIn {
          from { 
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
          to { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        
        @keyframes slideOut {
          from { 
            opacity: 1;
            transform: scale(1) translateY(0);
          }
          to { 
            opacity: 0;
            transform: scale(0.9) translateY(-20px);
          }
        }
      `}</style>

      <Footer theme={props.theme} onToggle={props.onToggle} />
    </div>
  );
}

export default Contact;